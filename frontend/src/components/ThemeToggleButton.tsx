import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export default function ThemeToggleButton() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} aria-label="Toggle dark mode" className="inline-flex items-center gap-2 rounded-xl border border-black/10 shadow px-3 py-2 text-sm hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            {/* <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span> */}
        </button>
    );
}
