import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    theme: 'dark',
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    const getDefaultTheme = () => {
        if (typeof window === 'undefined') return 'dark';
        
        const stored = localStorage.getItem('theme');
        if (stored) return stored;
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'dark';
    };
    
    const [theme, setTheme] = useState('dark');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setTheme(getDefaultTheme());
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        if (mounted) {
            document.body.setAttribute('data-theme', theme);
        }
    }, [theme, mounted]);

    if (!mounted) {
        return <>{children}</>;
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);