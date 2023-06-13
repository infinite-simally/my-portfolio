export const getLocalStorageValue = (key: string): string | null => {
  if (typeof window !== "undefined") {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      console.error(error);
      return null;
    }
  } else {
    return null;
  }
};
