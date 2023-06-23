export default defineNuxtRouteMiddleware((to, from) => {
    if (to.params.chapterSlug === 'l-chapter-1') {
        return;
    }
    return navigateTo('/login');
});