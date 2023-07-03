<template>
  <Modal @close="$emit('close')">
    <div class="bg-slate-200 p-8 rounded-xl w-full max-w-2xl">
      <div
        v-if="success"
        class="flex flex-col justify-center items-center space-y-6"
      >
        <h2 class="text-xl font-bold">Thanks for buying the course!</h2>
        <button
          @click="login"
          class="mt-4 w-full text-md text-black h-12 px-16 rounded bg-slate-500 hover:bg-slate-400 transition text-white font-semibold"
        >
          Login whith Github to access
        </button>
      </div>
      <form v-else @submit.prevent="handleSubmit">
        <h2 class="font-bold text-xl text-center">Buying {{ course.title }}</h2>
        <div class="mt-8 text-base width bg-white py-6 px-8 rounded shadow-md">
          <div class="w-full flex justify-between items-center mb-8">
            <label class="font-bold"> Email </label>
            <input
              class="input ml-6 focus:outline-none text-left w-full"
              type="email"
              autocomplete="email"
              v-model="email"
              placeholder="your@email.com"
              required
            />
          </div>

          <div id="card-element">
            <!-- Element will create input elements here -->
          </div>
        </div>
        <button
          class="font-sans mt-4 w-full text-lg text-black h-12 px-16 rounded bg-yellow-400 hover:bg-yellow-500 transition"
          :class="processingPayment || email === ''? 'bg-slate-400 cursor-not-allowed' : 'bg-yellow-300 hover:bg-yellow-200 curcer-pointer'"
          :disabled="processingPayment || email === ''"
        >
          <div v-if="processingPayment" class="h-5 w-5">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
          </div>
          <div v-else>Pay $97</div>
        </button>
      </form>
    </div>
  </Modal>
</template>

<script setup lang="ts">
const course = await useCourse();
const config = useRuntimeConfig();
const stripe = ref(null);
const card = ref(null);
const email = ref("");
const processingPayment = ref(false);
const success = ref(false);
const paymentIntentId = ref(null);

const formStyle = {
  base: {
    fontSize: "16px",
    color: "#3d4852",
    " ::placeholder": {
      color: "#8795a1",
    },
  },
};

const elements = computed(() => stripe.value?.elements());

const setupStripe = () => {
  stripe.value = Stripe(config.public.stripeKey);

  if (!card.value && elements.value) {
    card.value = elements.value.create("card", {
      style: formStyle,
    });
    card.value.mount("#card-element");
  }
};

const handleSubmit = async () => {
  if (email.value === "") {
    return;
  }

  processingPayment.value = true;
  let secret;

  try {
    // Create a PaymentIntent with the order amount and currency
    const response = await $fetch("/api/stripe/paymentIntent", {
      method: "POST",
      body: {
        email: email.value,
      },
    });
    secret = response;
  } catch (e) {
    console.log(e);
  }

  try {
    const response = await stripe.value.confirmCardPayment(secret, {
      payment_method: {
        card: card.value,
      },
      receipt_email: email.value,
    });

    if (response.paymentIntent.status === "succeeded") {
      success.value = true;
      paymentIntentId.value = response.paymentIntent.id;
    }
  } catch (e) {
    console.log(e);
  } finally {
    processingPayment.value = false;
  }
};

const login = async () => {
  if (!paymentIntentId.value) {
    return;
  }
  const redirectTo = `/linkWithPurchase/${paymentIntentId.value}`;
  await navigateTo(`login?redirectTo=${redirectTo}`);
};

useHead({
  script: [
    {
      src: "https://js.stripe.com/v3/",
      onload: setupStripe,
    },
  ],
});
</script>
