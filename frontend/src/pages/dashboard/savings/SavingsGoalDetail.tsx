import { Link } from "react-router-dom";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";
import { ArrowLeft, PiggyBank, PlusCircle, X, Wallet, DollarSign, Lock } from "lucide-react";

const SavingsGoalDetail = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-[#0a0a0a] dark:text-white">
            <div className="flex">
                {/* Sidebar */}
                <DesktopSidebar />
                <MobileSidebar />

                {/* Main */}
                <div className="flex min-h-screen flex-1 flex-col">
                    <DashboardHeader />

                    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
                        {/* Top bar */}
                        <div className="mb-6 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Link to="/dashboard/savings" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back
                                </Link>
                            </div>

                            {/* Modal toggle (checkbox) */}
                            <input id="deposit-modal" type="checkbox" className="peer/deposit hidden" />

                            {/* Deposit trigger */}
                            <label htmlFor="deposit-modal" className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95 dark:bg-white dark:text-black">
                                <PlusCircle className="h-4 w-4" /> Deposit
                            </label>

                            {/* Modal (pure CSS / no JS) */}
                            <div
                                className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center bg-black/0 p-4 opacity-0 transition
                           peer-checked/deposit:pointer-events-auto peer-checked/deposit:bg-black/40 peer-checked/deposit:opacity-100"
                            >
                                <label htmlFor="deposit-modal" className="absolute inset-0" aria-hidden="true" />

                                <div
                                    className="relative w-full max-w-md -translate-y-62 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl transition
                             dark:border-white/10 dark:bg-[#101113]
                             peer-checked/deposit:translate-y-0"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="deposit-title"
                                >
                                    {/* Close */}
                                    <label htmlFor="deposit-modal" className="absolute right-3 top-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white" aria-label="Close modal">
                                        <X className="h-4 w-4" />
                                    </label>

                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                            <PiggyBank className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 id="deposit-title" className="text-base font-semibold">
                                                Deposit into “Vacation Fund”
                                            </h3>
                                            <p className="text-xs text-gray-600 dark:text-white/60">Move money from your wallet to this goal.</p>
                                        </div>
                                    </div>

                                    {/* Wallet balance */}
                                    <div className="mb-4 rounded-2xl border border-gray-200 bg-gray-50 p-3 text-sm dark:border-white/10 dark:bg-black/40">
                                        <div className="flex items-center gap-2 text-gray-700 dark:text-white/80">
                                            <Wallet className="h-4 w-4" />
                                            <span>Wallet balance:</span>
                                            <span className="font-semibold">$82,450.13</span>
                                        </div>
                                    </div>

                                    {/* Form fields (UI only) */}
                                    <div className="space-y-4">
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Amount</label>
                                            <div className="relative">
                                                <DollarSign className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input placeholder="0.00" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Transaction PIN</label>
                                            <div className="relative">
                                                <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input type="password" placeholder="••••" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                            <p className="mt-1 text-[11px] text-gray-500 dark:text-white/60">4–6 digits recommended.</p>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-5 flex items-center justify-end gap-2">
                                        <label htmlFor="deposit-modal" className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                            Cancel
                                        </label>
                                        <button type="button" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 dark:bg-white dark:text-black">
                                            Deposit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Goal summary card */}
                        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/5">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-lg font-semibold">Vacation Fund</h1>
                                    <p className="mt-1 text-sm text-gray-600 dark:text-white/60">Target: $5,000 • Saved: $3,250</p>
                                </div>
                                <div className="grid h-12 w-12 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                    <PiggyBank className="h-6 w-6" />
                                </div>
                            </div>

                            {/* Progress bar */}
                            <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
                                <div className="h-full rounded-full bg-indigo-600 dark:bg-white" style={{ width: "65%" }} />
                            </div>
                            <div className="mt-2 text-sm text-gray-600 dark:text-white/60">65% completed • Target date: 2025-12-31</div>
                        </div>

                        {/* Transactions list (static UI) */}
                        <section className="mt-8">
                            <h2 className="mb-3 text-lg font-semibold">Goal Transactions</h2>
                            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
                                <table className="min-w-full text-sm">
                                    <thead className="border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-500 dark:border-white/10 dark:text-white/60">
                                        <tr>
                                            <th className="px-4 py-3">Date</th>
                                            <th className="px-4 py-3">Type</th>
                                            <th className="px-4 py-3">Amount</th>
                                            <th className="px-4 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-gray-100 dark:border-white/10">
                                            <td className="px-4 py-3">2025-09-07</td>
                                            <td className="px-4 py-3">Deposit</td>
                                            <td className="px-4 py-3 font-medium text-emerald-600 dark:text-emerald-400">+ $500</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">Successful</span>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-100 dark:border-white/10">
                                            <td className="px-4 py-3">2025-09-03</td>
                                            <td className="px-4 py-3">Deposit</td>
                                            <td className="px-4 py-3 font-medium text-emerald-600 dark:text-emerald-400">+ $200</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-700 dark:text-emerald-400">Successful</span>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-gray-100 dark:border-white/10">
                                            <td className="px-4 py-3">2025-08-29</td>
                                            <td className="px-4 py-3">Withdrawal</td>
                                            <td className="px-4 py-3 font-medium text-rose-600 dark:text-rose-400">- $50</td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex rounded-full bg-rose-500/15 px-2 py-0.5 text-xs font-medium text-rose-700 dark:text-rose-400">Failed</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default SavingsGoalDetail;
