export const validateField = (reg: RegExp) => {
  return (v: string): boolean => {
    return reg.test(v);
  };
};
