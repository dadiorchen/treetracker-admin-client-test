const countToLocaleString = (num) => {
  if (!num?.toLocaleString || typeof num !== 'number') return num;
  return num.toLocaleString();
};

export { countToLocaleString };
