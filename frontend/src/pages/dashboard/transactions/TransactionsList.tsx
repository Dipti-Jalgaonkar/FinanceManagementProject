// src/pages/TransactionList.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, XCircle, Wallet as WalletIcon, Hash, CalendarClock, User2, ChevronRight } from "lucide-react";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";

const TransactionList: React.FC = () => {
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
                            <div className="hidden text-sm text-gray-500 dark:text-white/60 sm:block">/ Transactions</div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        {/* Header */}
                        <div className="mb-4 flex items-center justify-between">
                            <div>
                                <h1 className="text-lg font-semibold">Transactions</h1>
                                <p className="text-sm text-gray-600 dark:text-white/60">Your recent deposits, transfers, withdrawals, and bills.</p>
                            </div>
                        </div>

                        {/* Table wrapper */}
                        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                            {/* Mobile (card) view */}
                            <ul className="divide-y divide-gray-200 p-2 sm:hidden dark:divide-white/10">
                                {/* Row — duplicate this block for more rows */}
                                <li>
                                    <Link to="/transaction/00000000-0000-0000-0000-000000000001" className="block">
                                        <div className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-white/5">
                                            <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                                <WalletIcon className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-semibold">Deposit</div>
                                                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                                                        <CheckCircle2 className="h-3.5 w-3.5" />
                                                        SUCCESSFUL
                                                    </span>
                                                </div>
                                                <div className="mt-1 text-sm">$120.00</div>
                                                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-600 dark:text-white/60">
                                                    <span className="inline-flex items-center gap-1">
                                                        <Hash className="h-3.5 w-3.5" />
                                                        00000000-0000-0000-0000-000000000001
                                                    </span>
                                                    <span className="inline-flex items-center gap-1">
                                                        <CalendarClock className="h-3.5 w-3.5" />
                                                        2025-09-12 16:05
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronRight className="mt-1 h-4 w-4 text-gray-400 dark:text-white/50" />
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/transaction/00000000-0000-0000-0000-000000000002" className="block">
                                        <div className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-white/5">
                                            <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                                <WalletIcon className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-semibold">Transfer</div>
                                                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                                                        <Clock className="h-3.5 w-3.5" />
                                                        PENDING
                                                    </span>
                                                </div>
                                                <div className="mt-1 text-sm">$45.00</div>
                                                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-600 dark:text-white/60">
                                                    <span className="inline-flex items-center gap-1">
                                                        <Hash className="h-3.5 w-3.5" />
                                                        00000000-0000-0000-0000-000000000002
                                                    </span>
                                                    <span className="inline-flex items-center gap-1">
                                                        <CalendarClock className="h-3.5 w-3.5" />
                                                        2025-09-12 14:10
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronRight className="mt-1 h-4 w-4 text-gray-400 dark:text-white/50" />
                                        </div>
                                    </Link>
                                </li>

                                <li>
                                    <Link to="/transaction/00000000-0000-0000-0000-000000000003" className="block">
                                        <div className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-white/5">
                                            <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                                <WalletIcon className="h-5 w-5" />
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center justify-between">
                                                    <div className="text-sm font-semibold">Withdrawal</div>
                                                    <span className="inline-flex items-center gap-1.5 rounded-xl border border-rose-300 bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200">
                                                        <XCircle className="h-3.5 w-3.5" />
                                                        FAILED
                                                    </span>
                                                </div>
                                                <div className="mt-1 text-sm">$200.00</div>
                                                <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-gray-600 dark:text-white/60">
                                                    <span className="inline-flex items-center gap-1">
                                                        <Hash className="h-3.5 w-3.5" />
                                                        00000000-0000-0000-0000-000000000003
                                                    </span>
                                                    <span className="inline-flex items-center gap-1">
                                                        <CalendarClock className="h-3.5 w-3.5" />
                                                        2025-09-11 09:34
                                                    </span>
                                                </div>
                                            </div>
                                            <ChevronRight className="mt-1 h-4 w-4 text-gray-400 dark:text-white/50" />
                                        </div>
                                    </Link>
                                </li>
                            </ul>

                            {/* Desktop (table) view */}
                            <div className="hidden sm:block">
                                <table className="min-w-full table-fixed border-separate border-spacing-0">
                                    <thead>
                                        <tr className="bg-gray-50 text-left text-xs uppercase tracking-wider text-gray-600 dark:bg-black/40 dark:text-white/60">
                                            <th className="sticky top-0 z-[1] border-b border-gray-200 px-4 py-3 font-semibold dark:border-white/10">Type</th>
                                            <th className="sticky top-0 z-[1] border-b border-gray-200 px-4 py-3 font-semibold dark:border-white/10">Amount</th>
                                            <th className="sticky top-0 z-[1] border-b border-gray-200 px-4 py-3 font-semibold dark:border-white/10">Status</th>
                                            <th className="sticky top-0 z-[1] border-b border-gray-200 px-4 py-3 font-semibold dark:border-white/10">Reference</th>
                                            <th className="sticky top-0 z-[1] border-b border-gray-200 px-4 py-3 font-semibold dark:border-white/10">Timestamp</th>
                                            <th className="sticky top-0 z-[1] border-b border-gray-200 px-4 py-3 font-semibold dark:border-white/10">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-white/10">
                                        {/* Row */}
                                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="grid h-9 w-9 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                                        <WalletIcon className="h-4 w-4" />
                                                    </div>
                                                    <span className="text-sm font-medium">Deposit</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-sm font-semibold">$120.00</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[11px] font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                                    SUCCESSFUL
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="font-mono text-xs">00000000-0000-0000-0000-000000000001</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-sm">2025-09-12 16:05</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <Link to="/transaction/00000000-0000-0000-0000-000000000001" className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white">
                                                    View
                                                    <ChevronRight className="h-3.5 w-3.5" />
                                                </Link>
                                            </td>
                                        </tr>

                                        {/* Row */}
                                        <tr className="hover:bg-gray-50 dark:hover:bg白/5">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="grid h-9 w-9 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                                        <WalletIcon className="h-4 w-4" />
                                                    </div>
                                                    <span className="text-sm font-medium">Transfer</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-sm font-semibold">$45.00</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-semibold text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                                                    <Clock className="h-3.5 w-3.5" />
                                                    PENDING
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="font-mono text-xs">00000000-0000-0000-0000-000000000002</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-sm">2025-09-12 14:10</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <Link to="/transaction/00000000-0000-0000-0000-000000000002" className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white">
                                                    View
                                                    <ChevronRight className="h-3.5 w-3.5" />
                                                </Link>
                                            </td>
                                        </tr>

                                        {/* Row */}
                                        <tr className="hover:bg-gray-50 dark:hover:bg-white/5">
                                            <td className="px-4 py-3">
                                                <div className="flex items-center gap-2">
                                                    <div className="grid h-9 w-9 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                                        <WalletIcon className="h-4 w-4" />
                                                    </div>
                                                    <span className="text-sm font-medium">Withdrawal</span>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-sm font-semibold">$200.00</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="inline-flex items-center gap-1.5 rounded-xl border border-rose-300 bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200">
                                                    <XCircle className="h-3.5 w-3.5" />
                                                    FAILED
                                                </span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="font-mono text-xs">00000000-0000-0000-0000-000000000003</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <span className="text-sm">2025-09-11 09:34</span>
                                            </td>
                                            <td className="px-4 py-3">
                                                <Link to="/transaction/00000000-0000-0000-0000-000000000003" className="inline-flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white">
                                                    View
                                                    <ChevronRight className="h-3.5 w-3.5" />
                                                </Link>
                                            </td>
                                        </tr>

                                        {/* …add more rows as needed */}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Footer note */}
                        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs text-gray-600 dark:border-white/10 dark:bg-black/40 dark:text-white/60">Click a transaction to view full details, copy references, and see ledger status.</div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TransactionList;
