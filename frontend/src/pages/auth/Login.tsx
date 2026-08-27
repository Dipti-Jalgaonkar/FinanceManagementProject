// src/pages/Login.tsx
// UI-only version: no state, no hooks, no handlers, no conditional rendering.
import React from "react";
import { Link } from "react-router-dom";
import Header from "@/layout/Header";

const Login: React.FC = () => {
    return (
        <>
            <Header />

            <main className="relative grid min-h-screen place-items-center overflow-hidden bg-white p-4 text-gray-900 dark:bg-gradient-to-b dark:from-black dark:via-neutral-950 dark:to-black dark:text-white">
                {/* dark-mode ambient glows only */}
                <div className="pointer-events-none absolute inset-0 hidden dark:block">
                    <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
                    <div className="absolute bottom-0 left-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
                    <div className="absolute -bottom-24 right-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
                </div>

                <div className="w-full max-w-md">
                    <div className="mb-6 text-center">
                        <div className="mx-auto mb-3 h-11 w-11 rounded-2xl bg-white ring-1 ring-gray-200 shadow-sm dark:bg-white/10 dark:ring-white/15 dark:backdrop-blur">
                            <div className="grid h-full w-full place-items-center">
                                <span className="block h-2 w-2 rounded-full bg-gray-900 dark:bg-white/85" />
                            </div>
                        </div>
                        <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
                        <p className="mt-1 text-sm text-gray-500 dark:text-neutral-400">Sign in to continue.</p>
                    </div>

                    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-white/5 dark:backdrop-blur-md">
                        {/* Optional error slot (UI only): add/remove the 'hidden' class to show/hide */}
                        <div className="hidden mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-200">Something went wrong.</div>

                        <form noValidate className="space-y-4">
                            <div>
                                <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-neutral-300">Email</label>
                                <input type="email" autoComplete="email" placeholder="you@example.com" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200 dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white/20 dark:focus:bg-black/30 dark:focus-visible:ring-white/10" />
                            </div>

                            <div>
                                <div className="mb-1 flex items-center justify-between">
                                    <label className="block text-sm font-medium text-gray-700 dark:text-neutral-300">Password</label>
                                </div>
                                <div className="relative">
                                    <input type="password" autoComplete="current-password" placeholder="••••••••" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pr-10 text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 focus-visible:ring-2 focus-visible:ring-gray-200 dark:border-white/10 dark:bg-black/40 dark:text-white dark:placeholder:text-neutral-500 dark:focus:border-white/20 dark:focus:bg-black/30 dark:focus-visible:ring-white/10" />
                                </div>
                            </div>

                            <button type="button" className="group relative w-full overflow-hidden rounded-xl bg-gray-900 px-4 py-2.5 text-white transition hover:opacity-95 dark:bg-white dark:text-black">
                                <span className="absolute inset-0 -z-10 hidden bg-gradient-to-r from-white via-neutral-200 to-white opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100 dark:block" />
                                Sign in
                            </button>
                        </form>

                        <p className="mt-6 text-center text-sm text-gray-500 dark:text-neutral-400">
                            No account?{" "}
                            <Link to="/signup" className="font-medium text-blue-600 underline underline-offset-4 hover:underline dark:text-white/90 dark:hover:text-white">
                                Create one
                            </Link>
                        </p>
                    </div>

                    <p className="mt-6 text-center text-xs text-gray-400 dark:text-neutral-500">Protected by session refresh. Cookies must be enabled.</p>
                </div>
            </main>
        </>
    );
};

export default Login;
