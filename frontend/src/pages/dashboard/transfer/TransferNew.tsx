import React from "react";
import { Link } from "react-router-dom";
import { Search, CheckCircle2, User2, Wallet, Send, Shield, ArrowLeft } from "lucide-react";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";

const TransferNew: React.FC = () => {
    // purely presentational placeholders
    const beneficiaries = [
        { id: "b1", name: "Maya Johnson", wallet: "8842031169" },
        { id: "b2", name: "David Lee", wallet: "7710042231" },
        { id: "b3", name: "Aisha Khan", wallet: "9900314567" },
        { id: "b4", name: "Carlos Diaz", wallet: "5519024888" },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-[#0a0a0a] dark:text-white">
            <div className="flex">
                {/* Desktop sidebar */}
                <DesktopSidebar />

                {/* Mobile off-canvas */}
                <MobileSidebar />

                <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
                    <DashboardHeader />

                    {/* Header row (breadcrumbs/back) */}
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2">
                            <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white">
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </Link>
                            <div className="hidden text-sm text-gray-500 dark:text-white/60 sm:block">/ Transfers / New</div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                            {/* ===== Left: Beneficiaries ===== */}
                            <aside className="lg:col-span-4">
                                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="mb-3 flex items-center justify-between">
                                        <h2 className="text-sm font-semibold">Beneficiaries</h2>
                                        <Link to="/dashboard/beneficiaries" className="text-xs text-gray-700 underline-offset-4 hover:underline dark:text-white/80">
                                            Manage
                                        </Link>
                                    </div>

                                    {/* search input */}
                                    <div className="mb-3">
                                        <label className="sr-only">Search</label>
                                        <div className="relative">
                                            <input type="text" placeholder="Search beneficiary" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 pl-9 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                        </div>
                                    </div>

                                    <ul className="divide-y divide-gray-200 dark:divide-white/10">
                                        {beneficiaries.map((b) => (
                                            <li key={b.id} className="py-3">
                                                <button type="button" className="group flex w-full items-center gap-3 rounded-xl px-2 py-1.5 text-left hover:bg-gray-50 dark:hover:bg-white/5">
                                                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                                        <User2 className="h-5 w-5 text-gray-700 dark:text-white/80" />
                                                    </span>
                                                    <span className="flex-1">
                                                        <span className="block text-sm font-medium">{b.name}</span>
                                                        <span className="block text-xs text-gray-600 dark:text-white/60">{b.wallet}</span>
                                                    </span>
                                                    <span className="hidden rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-gray-700 shadow-sm group-hover:inline-block dark:border-white/10 dark:bg-transparent dark:text-white">Use</span>
                                                </button>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-3 text-xs text-gray-600 dark:border-white/10 dark:text-white/60">Tip: pick a beneficiary to auto-fill the wallet ID on the right.</div>
                                </div>
                            </aside>

                            {/* ===== Right: Transfer form ===== */}
                            <section className="lg:col-span-8">
                                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="mb-5 flex items-center justify-between">
                                        <div>
                                            <h1 className="text-lg font-semibold">Send Funds</h1>
                                            <p className="text-sm text-gray-600 dark:text-white/60">Transfer to any wallet in seconds. Fees are shown before you confirm.</p>
                                        </div>
                                        <div className="hidden items-center gap-2 sm:flex">
                                            <span className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-transparent dark:text-white">
                                                <Shield className="mr-1.5 h-3.5 w-3.5" /> Secure
                                            </span>
                                            <span className="inline-flex items-center rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 dark:border-white/10 dark:bg-transparent dark:text-white">
                                                <Wallet className="mr-1.5 h-3.5 w-3.5" /> Balance-friendly
                                            </span>
                                        </div>
                                    </div>

                                    {/* Wallet ID + Verify */}
                                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                        <div className="sm:col-span-2">
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Recipient Wallet ID</label>
                                            <input type="text" placeholder="e.g. 8842031169" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                        </div>
                                        <div className="flex items-end">
                                            <button type="button" className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-white dark:text-black sm:w-auto">
                                                <CheckCircle2 className="h-4 w-4" />
                                                Verify
                                            </button>
                                        </div>
                                    </div>

                                    {/* Verified preview (placeholder) */}
                                    <div className="mt-3 hidden rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 dark:border-white/10 dark:bg-black/40 dark:text-white/80">
                                        <span className="font-medium">Recipient:</span> John Appleseed · Wallet 8842031169
                                    </div>

                                    {/* Amount + PIN */}
                                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Amount</label>
                                            <div className="relative">
                                                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-white/60">$</span>
                                                <input type="number" placeholder="0.00" className="w-full rounded-xl border border-gray-300 bg-white px-7 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Transaction PIN</label>
                                            <input type="password" placeholder="••••" maxLength={4} className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm tracking-widest text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                        </div>
                                    </div>

                                    {/* Note (optional) */}
                                    <div className="mt-3">
                                        <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Note (optional)</label>
                                        <textarea rows={3} placeholder="Say something nice…" className="w-full resize-none rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                    </div>

                                    {/* Fee + Buttons */}
                                    <div className="mt-5 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                                        <div className="text-xs text-gray-600 dark:text-white/60">
                                            Estimated fee: <span className="font-medium">$0.00</span> · Arrival: instant
                                        </div>
                                        <div className="flex gap-2">
                                            <Link to="/dashboard" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                                Cancel
                                            </Link>
                                            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black">
                                                <Send className="h-4 w-4" />
                                                Send Funds
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Helpful tips / info */}
                                <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs text-gray-600 dark:border-white/10 dark:bg-black/40 dark:text-white/60">Transfers to non-beneficiaries may require additional checks. Ensure the wallet ID is correct. Funds sent are final.</div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TransferNew;
