export const setLocalStorageValue = (key: string, newVal: string): void => {
  try {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, newVal);
    }
  } catch (error) {
    console.error(error);
  }
};
