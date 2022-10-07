export const read = key => {
  return JSON.parse(localStorage.getItem(key)) || [];
};

export const create = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
