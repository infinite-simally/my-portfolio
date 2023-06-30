import { createContext, useState } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

import { getLocalStorageValue } from "../../utils/getLocalStorageValue";
import { ThemeProps, storageKey } from "./ThemeProvider.types";
import { setLocalStorageValue } from "../../utils/setLocalStorageValue";

export const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }: ThemeProps): JSX.Element | null => {
  const isDarkModePrefered = useMediaQuery("(prefers-color-scheme: dark)");
  const isDarkModeChoosen = getLocalStorageValue(storageKey);

  let defaultTheme =
    isDarkModeChoosen === null
      ? isDarkModePrefered
      : JSON.parse(isDarkModeChoosen);

  const [isDarkTheme, setIsDarkTheme] = useState(defaultTheme);

  const toggleTheme = (): void => {
    setIsDarkTheme(!isDarkTheme);
    setLocalStorageValue(storageKey, (!isDarkTheme).toString());

    document.body.classList.remove(isDarkTheme ? "dark" : "light");
  };

  document.body.classList.add(isDarkTheme ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
