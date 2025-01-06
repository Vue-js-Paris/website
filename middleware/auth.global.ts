export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession();

  if (
    !loggedIn.value &&
    to.path.startsWith("/admin") &&
    to.path !== "/admin/login" &&
    to.path !== "/admin/unauthorized"
  ) {
    return navigateTo("/admin/unauthorized");
  }
});
