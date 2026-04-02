import React, { createContext, useEffect, useState, useContext } from "react";
import "../Theme.css";

export const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            document.documentElement.classList.add("dark-theme");
        } else {
            document.documentElement.classList.remove("dark-theme");
        }
    }, [theme]);

    const toggleTheme = (mode) => {
        setTheme(mode === "dark" || mode === "light" ? mode : (prev => (prev === "light" ? "dark" : "light")));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};