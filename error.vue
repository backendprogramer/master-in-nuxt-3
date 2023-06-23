<template>
    <NuxtLayout>
        <div class="prose space-y-4 text-center">
            <h1 class="font-bold text-3xl">Dang</h1>
            <p>It looks like something broke.</p>
            <p>Sorry about that.</p>
            <p>
                <strong>{{ error.message }}</strong>
            </p>
            <p>
                Go to the
                <a class="hover:cursor-pointer text-blue-400" @click="handleError">
                    first lesson.
                </a>
            </p>
        </div>
    </NuxtLayout>
</template>

<script setup>
    const error = useError();
    const handleError = () => {
        clearError({
            redirect: '/course/chapter/l-chapter-1/lesson/l-introduction-to-typescript-with-yvue-js-3'
        })
    }
</script>