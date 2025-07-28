import React, { createContext, useContext, useEffect, useState } from "react";
import "./theme.css";

const ThemeContext = createContext({ dark: false, toggle: () => {} });

export function ThemeProvider({ defaultDark = false, children }) {
  const [dark, setDark] = useState(defaultDark);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);

  const toggle = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
