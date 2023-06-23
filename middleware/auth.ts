export default defineNuxtRouteMiddleware((to, from) => {
    const user = useSupabaseUser();

    if (user.value || to.params.chapterSlug === 'l-chapter-1') {
        return;
    }
    return navigateTo(`/login?redirectTo=${to.path}`);
});