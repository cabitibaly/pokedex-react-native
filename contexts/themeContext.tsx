import React, { Children, createContext, useContext, useState } from "react";

interface ThemeContextType {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    toggleTheme: () => {},
});

export default ThemeContext;

export const ThemeContextProvider = ({ children}: React.PropsWithChildren) => {
    const [theme, setTheme] = useState<string>('light');

    const toggleTheme = () => {
        setTheme((prevTheme: string) => prevTheme === 'light' ? 'dark' : 'light')
    }

    const value = {
        theme: theme,
        toggleTheme: toggleTheme,
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}