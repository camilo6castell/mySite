"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeConfig } from "../config/theme";

type ThemeMode = "light" | "dark";

type ThemeContextType = {
  theme: ThemeMode;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<ThemeMode>("light");
  const [mounted, setMounted] = useState(false);

  // ✅ Hidratación segura (evita mismatch)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as ThemeMode | null;

    if (savedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }

    setMounted(true);
  }, []);

  // ✅ Persistencia
  useEffect(() => {
    if (!mounted) return;

    if (theme === "dark") {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // ⚠️ MUY IMPORTANTE: evitar render SSR mismatch
  if (!mounted) return null;

  const currentTheme =
    theme === "dark"
      ? themeConfig.colors.darkTheme
      : themeConfig.colors.lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useThemeContext debe usarse dentro de ThemeProvider");
  }
  return ctx;
};