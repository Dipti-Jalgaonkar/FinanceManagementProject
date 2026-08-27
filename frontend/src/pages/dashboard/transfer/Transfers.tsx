import React from "react";
import { Link } from "react-router-dom";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";
import { ArrowLeft, Send, Filter, Search, Calendar, BadgeCheck, XCircle, Clock, ExternalLink } from "lucide-react";

type Tx = {
    id: string;
    transaction_type: "DEPOSIT" | "TRANSFER" | "WITHDRAWAL" | "SAVINGS" | "BILL";
    amount: number;
    status: "PENDING" | "SUCCESSFUL" | "FAILED";
    reference: string;
    external_reference?: string | null;
    sender?: string | null; // email/username (for display)
    receiver?: string | null; // email/username (for display)
    timestamp: string; // ISO or display string
};

const rows: Tx[] = [
    {
        id: "1",
        transaction_type: "TRANSFER",
        amount: 120.0,
        status: "SUCCESSFUL",
        reference: "4a1f3b4e-2b8e-4d77-a2fa-99871234abcd",
        external_reference: "PAY_2W9V7",
        sender: "you@example.com",
        receiver: "maya@example.com",
        timestamp: "2025-09-07 12:20",
    },
    {
        id: "2",
        transaction_type: "TRANSFER",
        amount: 430.5,
        status: "PENDING",
        reference: "b2a7a0e9-3f3e-41b2-9f5d-55c4e6dc9a22",
        external_reference: null,
        sender: "you@example.com",
        receiver: "daniel@example.com",
        timestamp: "2025-09-07 10:04",
    },
    {
        id: "3",
        transaction_type: "TRANSFER",
        amount: 75.25,
        status: "FAILED",
        reference: "c77a1b55-8f4e-4e2c-95c4-2f3bb9dca7fd",
        external_reference: "PAY_FAIL_9JK",
        sender: "you@example.com",
        receiver: "vault@savings",
        timestamp: "2025-09-06 18:11",
    },
    {
        id: "4",
        transaction_type: "TRANSFER",
        amount: 999.99,
        status: "SUCCESSFUL",
        reference: "a0be0011-ff10-4a6a-9c1f-abc77a0b1100",
        external_reference: "PSK_7YYZQ",
        sender: "you@example.com",
        receiver: "tomiwa@example.com",
        timestamp: "2025-09-05 08:40",
    },
];

const Transfers: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-[#0a0a0a] dark:text-white">
            <div className="flex">
                {/* Desktop sidebar */}
                <DesktopSidebar />
                {/* Mobile off-canvas */}
                <MobileSidebar />

                {/* Main */}
                <div className="flex min-h-screen flex-1 flex-col">
                    <DashboardHeader />

                    <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
                        {/* Top bar / breadcrumb + actions */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white">
                                    <ArrowLeft className="h-4 w-4" />
                                    Back
                                </Link>
                                <div className="hidden text-sm text-gray-500 dark:text-white/60 sm:block">/ Transfers / All</div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Link to="/dashboard/transfers/new" className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black">
                                    <Send className="mr-2 h-4 w-4" />
                                    New Transfer
                                </Link>
                            </div>
                        </div>

                        {/* Filters row (UI only) */}
                        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                            <div className="relative sm:col-span-2">
                                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                <input placeholder="Search reference, receiver, amount…" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                            </div>
                            <div className="relative">
                                <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                <input type="date" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                            </div>
                        </div>

                        {/* Table */}
                        <div className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-sm">
                                    <thead className="border-b border-gray-200 text-left text-xs uppercase tracking-wide text-gray-500 dark:border-white/10 dark:text-white/60">
                                        <tr>
                                            <th className="px-4 py-3">Type</th>
                                            <th className="px-4 py-3">From</th>
                                            <th className="px-4 py-3">To</th>
                                            <th className="px-4 py-3">Amount</th>
                                            <th className="px-4 py-3">Status</th>
                                            <th className="px-4 py-3">Reference</th>
                                            <th className="px-4 py-3">Ext. Ref</th>
                                            <th className="px-4 py-3">Time</th>
                                            <th className="px-4 py-3 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((t) => (
                                            <tr key={t.id} className="border-t border-gray-100 dark:border-white/10">
                                                <td className="px-4 py-3">
                                                    <span className="inline-flex items-center gap-2">
                                                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500/90" />
                                                        {t.transaction_type}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3">{t.sender ?? "—"}</td>
                                                <td className="px-4 py-3">{t.receiver ?? "—"}</td>
                                                <td className="px-4 py-3 font-medium">-${t.amount.toLocaleString()}</td>
                                                <td className="px-4 py-3">{t.status}</td>
                                                <td className="px-4 py-3">
                                                    <span className="font-mono">{t.reference.slice(0, 8)}…</span>
                                                </td>
                                                <td className="px-4 py-3">{t.external_reference ?? "—"}</td>
                                                <td className="px-4 py-3 text-gray-600 dark:text-white/60">{t.timestamp}</td>
                                                <td className="px-4 py-3 text-right">
                                                    <Link to={`/dashboard/transactions/${t.id}`} className="inline-flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                                        View
                                                        <ExternalLink className="h-3.5 w-3.5" />
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination (UI only) */}
                            <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3 text-sm dark:border-white/10">
                                <div className="text-gray-600 dark:text-white/60">Showing 1–{rows.length} of 1,248</div>
                                <div className="flex items-center gap-2">
                                    <button className="rounded-xl border border-gray-300 bg-white px-3 py-1.5 hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">Previous</button>
                                    <button className="rounded-xl border border-gray-300 bg-white px-3 py-1.5 hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">Next</button>
                                </div>
                            </div>
                        </div>

                        {/* Secondary CTA */}
                        <div className="mt-6 flex items-center justify-between">
                            <p className="text-sm text-gray-600 dark:text-white/60">Filter by date or search reference to find a specific transfer.</p>
                            <Link to="/dashboard/transfers/new" className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black">
                                <Send className="mr-2 h-4 w-4" />
                                Make a Transfer
                            </Link>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Transfers;
