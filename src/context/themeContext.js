import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const themes = {
    dark: {
      backgroundColor: "#220135",
      color: "white",
    },
    light: {
      backgroundColor: "white",
      color: "black",
    },
  };

  const [isDark, setIsDark] = useState(false);
  const theme = isDark ? themes.dark : themes.light;
  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
