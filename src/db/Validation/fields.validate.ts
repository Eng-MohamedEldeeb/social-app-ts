export const validateField = (regex: RegExp) => {
  return (v: string): boolean => {
    return regex.test(v);
  };
};
