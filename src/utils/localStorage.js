export const addToLocalStorage = (movieArg) => {
  localStorage.setItem('movieList', JSON.stringify(movieArg));
};

export const getLocalStorage = () => {
  const localValue = localStorage.getItem('movieList');
  return localValue ? JSON.parse(localStorage.getItem('movieList')) : null;
};
