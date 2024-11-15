const isUserLoggedInGuard = (to, from, next) => {
  const userToken = localStorage.getItem('userToken');

  if (!userToken) {
    return next({ name: 'login' });
  }
  next();
};
export default isUserLoggedInGuard;
