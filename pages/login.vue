<template>
    <div class="prose w-full max-w-2xl h-9 space-y-4 ">
        <h1 class="font-bold text-3xl">Log in to {{ title }}</h1>
        <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded" @click="login">Log in with Github</button>
    </div>
</template>

<script setup lang="ts">
const {title} = useCourse();
const supabase = useSupabaseClient();

const login = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'github',
    });

    if (error) {
        console.log(error);
        
    }
}
</script>