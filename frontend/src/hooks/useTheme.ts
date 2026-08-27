import { useEffect, useState } from "react";

// Define a TypeScript type alias limiting theme values to "light" or "dark"
type Theme = "light" | "dark";

// Custom React hook to handle theme logic (dark/light mode)
export const useTheme = () => {
    // Initialize theme state with a function (runs once on first render)
    const [theme, setTheme] = useState<Theme>(() => {
        // This check prevents errors during server-side rendering (SSR)
        if (typeof window !== "undefined") {
            // Get saved theme from localStorage if available, else fallback to user's system preference
            return (localStorage.getItem("theme") as Theme) || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
        }
        // If SSR, just return "light" as a safe fallback
        return "light";
    });

    // useEffect runs whenever the theme changes
    useEffect(() => {
        if (theme === "dark") {
            // If dark mode is selected, add the `dark` class to the <html> tag
            document.documentElement.classList.add("dark");
        } else {
            // If light mode, remove the `dark` class
            document.documentElement.classList.remove("dark");
        }

        // Save the user's theme preference in localStorage
        localStorage.setItem("theme", theme);
    }, [theme]); // Dependency array ensures this effect runs only when `theme` changes

    // Toggles between "light" and "dark" themes
    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    // Return the current theme and toggle function so components can use them
    return { theme, toggleTheme };
};
