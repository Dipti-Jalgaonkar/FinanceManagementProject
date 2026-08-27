// src/layout/Header.tsx
// UI-only: no hooks, no state, no onClick handlers, no auth/theme logic.
import React from "react";
import { Link } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

const NAV_ITEMS = [
    { label: "Home", to: "/" },
    { label: "Features", to: "/features" },
    { label: "Pricing", to: "/pricing" },
    { label: "Contact", to: "/contact" },
];

const CTA = { label: "Get Started", to: "/login" };

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="sticky top-0 z-50 bg-white text-gray-900 shadow-[0_1px_0_0_rgba(17,24,39,0.06)] dark:bg-[#0b0b0c] dark:text-white">
            <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-3">
                    <Link to="/" className="shrink-0 rounded-lg text-[18px] font-semibold tracking-tight hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:focus-visible:ring-white/15">
                        FinanceOS
                    </Link>

                    {/* Desktop nav */}
                    <nav className="hidden md:flex md:items-center md:gap-1">
                        {NAV_ITEMS.map((item) => (
                            <Link key={item.label} to={item.to} className="rounded-xl px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:text-neutral-300 dark:hover:text-white dark:focus-visible:ring-white/15">
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Right actions */}
                    <div className="flex items-center gap-2">
                        {/* Theme button — decorative only in UI-only mode */}
                        <button onClick={toggleTheme} aria-label="Toggle dark mode" className="inline-flex items-center gap-2 rounded-xl border border-black/10 shadow px-3 py-2 text-sm hover:bg-black/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                            {/* <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span> */}
                        </button>

                        {/* Static CTA (no auth switching) */}
                        <Link to={CTA.to} className="hidden md:inline-flex items-center justify-center rounded-2xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:bg-white dark:text-black dark:focus-visible:ring-white/15">
                            {CTA.label}
                        </Link>

                        {/* Mobile menu button — decorative only */}
                        <button aria-label="Toggle navigation" className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 md:hidden dark:border-white/10 dark:bg-[#101113] dark:text-white dark:hover:bg-[#131416] dark:focus-visible:ring-white/15">
                            <span className="text-lg">☰</span>
                        </button>
                    </div>
                </div>

                {/* Mobile drawer (UI-only): keep hidden; remove 'hidden' to preview */}
                <div className="hidden md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out">
                    <div className="mb-3 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg dark:border-white/10 dark:bg-[#0f0f10]">
                        <nav className="flex flex-col">
                            {NAV_ITEMS.map((item) => (
                                <Link key={item.label} to={item.to} className="rounded-xl px-3 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:text-neutral-200 dark:hover:bg-white/5 dark:focus-visible:ring-white/15">
                                    {item.label}
                                </Link>
                            ))}

                            <Link to={CTA.to} className="mt-2 inline-flex items-center justify-center rounded-2xl bg-gray-900 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300 dark:bg-white dark:text-black dark:focus-visible:ring-white/15">
                                {CTA.label}
                            </Link>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
}
