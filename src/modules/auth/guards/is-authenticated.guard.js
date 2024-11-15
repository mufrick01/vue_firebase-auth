const isAuthenticatedGuard = (to, from, next) => {
  const userToken = localStorage.getItem('userToken');

  if (userToken) {
    return next({ name: 'home' });
  }

  next();
};

export default isAuthenticatedGuard;
