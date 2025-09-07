"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { themeConfig } from "../app/config/theme";

type ThemeContextType = {
    theme: "dark" | null;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<"dark" | null>(null);

    // Restaurar desde localStorage
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as "dark" | null;
        setTheme(savedTheme);
    }, []);

    // Guardar en localStorage
    useEffect(() => {
        if (theme === "dark") {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.removeItem("theme");
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? null : "dark"));
    };

    // Selección del objeto de styled-components
    const currentTheme = theme === "dark" ? themeConfig.colors.darkTheme : themeConfig.colors.lightTheme;

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const ctx = useContext(ThemeContext);
    if (!ctx) throw new Error("useThemeContext debe usarse dentro de ThemeProvider");
    return ctx;
};
