// src/pages/dashboard/SavingsGoalNew.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, PiggyBank, Calendar, Target, Coins, Info } from "lucide-react";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";

const SavingsGoalNew: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-[#0a0a0a] dark:text-white">
            <div className="flex">
                {/* Desktop sidebar */}
                <DesktopSidebar />

                {/* Mobile off-canvas */}
                <MobileSidebar />

                <main className="min-h-screen flex-1">
                    <DashboardHeader />

                    {/* Breadcrumb */}
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2">
                            <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white">
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </Link>
                            <div className="hidden text-sm text-gray-500 dark:text-white/60 sm:block">/ Savings / New Goal</div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                            {/* Left panel: tips */}
                            <aside className="lg:col-span-4">
                                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                            <PiggyBank className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Saving Goals</div>
                                            <div className="text-xs text-gray-600 dark:text-white/60">Plan and track your savings.</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-3 text-xs text-gray-600 dark:border-white/10 dark:text-white/60">
                                        <p>Create a goal by setting a target amount and date. Add funds manually or automate deposits.</p>
                                        <ul className="mt-2 list-inside list-disc space-y-1">
                                            <li>Pick a descriptive name (e.g. “Vacation 2025”).</li>
                                            <li>Target amount should be realistic.</li>
                                            <li>You can start with a current balance or 0.</li>
                                            <li>Set a target date to keep yourself accountable.</li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700 dark:border-white/10 dark:bg-black/40 dark:text-white/80">
                                        <div className="flex items-start gap-2">
                                            <Info className="mt-0.5 h-4 w-4" />
                                            <p>Your goal will appear on your dashboard where you can track progress and deposit anytime.</p>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Right panel: form */}
                            <section className="lg:col-span-8">
                                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="mb-5">
                                        <h1 className="text-lg font-semibold">Create a new Saving Goal</h1>
                                        <p className="text-sm text-gray-600 dark:text-white/60">Set your goal and start tracking progress.</p>
                                    </div>

                                    <form className="space-y-5" noValidate>
                                        {/* Name */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Goal name</label>
                                            <div className="relative">
                                                <Target className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input type="text" placeholder="e.g. Emergency Fund" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                            </div>
                                        </div>

                                        {/* Target amount */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Target amount</label>
                                            <div className="relative">
                                                <Coins className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input type="number" placeholder="1000" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                        </div>

                                        {/* Current amount */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Current amount</label>
                                            <div className="relative">
                                                <Coins className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input type="number" placeholder="0" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                        </div>

                                        {/* Target date */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Target date</label>
                                            <div className="relative">
                                                <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input type="date" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                                            <div className="text-xs text-gray-600 dark:text-white/60">You can always update or deposit later.</div>
                                            <div className="flex gap-2">
                                                <Link to="/dashboard/savings" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                                    Cancel
                                                </Link>
                                                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black">
                                                    Create Goal
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default SavingsGoalNew;
