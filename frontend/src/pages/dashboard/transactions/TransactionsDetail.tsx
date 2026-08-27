// src/pages/TransactionDetail.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Clock, XCircle, Wallet as WalletIcon, User2, Hash, Link as LinkIcon, CalendarClock, Shield, Copy } from "lucide-react";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";

const TransactionDetail: React.FC = () => {
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
                            <Link to="/transactions" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white">
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </Link>
                            <div className="hidden text-sm text-gray-500 dark:text-white/60 sm:block">/ Transactions / Detail</div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                            {/* Left: Summary card */}
                            <section className="lg:col-span-8">
                                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="grid h-12 w-12 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                                <WalletIcon className="h-6 w-6" />
                                            </div>
                                            <div>
                                                <h1 className="text-lg font-semibold">Deposit</h1>
                                                <div className="mt-0.5 text-sm text-gray-600 dark:text-white/60">
                                                    Reference: <span className="font-mono">00000000-0000-0000-0000-000000000000</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            {/* Type pill */}
                                            <span className="inline-flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-2.5 py-1 text-xs font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80">
                                                <Shield className="h-3.5 w-3.5" />
                                                Deposit
                                            </span>

                                            {/* Status badge (pick one) */}
                                            <span className="inline-flex items-center gap-1.5 rounded-xl border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-800 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-200">
                                                <CheckCircle2 className="h-3.5 w-3.5" />
                                                SUCCESSFUL
                                            </span>
                                            {/* Examples:
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-amber-300 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
                        <Clock className="h-3.5 w-3.5" /> PENDING
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-xl border border-rose-300 bg-rose-50 px-2.5 py-1 text-xs font-semibold text-rose-800 dark:border-rose-500/30 dark:bg-rose-500/10 dark:text-rose-200">
                        <XCircle className="h-3.5 w-3.5" /> FAILED
                      </span>
                      */}
                                        </div>
                                    </div>

                                    {/* Amount row */}
                                    <div className="mb-6 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 dark:border-white/10 dark:bg-black/40">
                                        <div className="text-xs text-gray-600 dark:text-white/60">Amount</div>
                                        <div className="text-2xl font-semibold tracking-tight">$120.00</div>
                                    </div>

                                    {/* Details list */}
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-12 sm:gap-3">
                                            <div className="sm:col-span-4 flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-white/60">
                                                <Hash className="h-4 w-4" />
                                                <span>Reference</span>
                                            </div>
                                            <div className="sm:col-span-8 flex items-center justify-between gap-3">
                                                <div className="font-mono text-sm">00000000-0000-0000-0000-000000000000</div>
                                                <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white" title="Copy to clipboard">
                                                    <Copy className="h-3.5 w-3.5" />
                                                    Copy
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-12 sm:gap-3">
                                            <div className="sm:col-span-4 flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-white/60">
                                                <LinkIcon className="h-4 w-4" />
                                                <span>External Reference</span>
                                            </div>
                                            <div className="sm:col-span-8 flex items-center justify-between gap-3">
                                                <div className="font-mono text-sm">pi_3Qxyz123ABC</div>
                                                <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white" title="Copy to clipboard">
                                                    <Copy className="h-3.5 w-3.5" />
                                                    Copy
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-12 sm:gap-3">
                                            <div className="sm:col-span-4 flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-white/60">
                                                <WalletIcon className="h-4 w-4" />
                                                <span>Wallet ID</span>
                                            </div>
                                            <div className="sm:col-span-8 flex items-center justify-between gap-3">
                                                <div className="font-mono text-sm">8842031169</div>
                                                <button type="button" className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white" title="Copy to clipboard">
                                                    <Copy className="h-3.5 w-3.5" />
                                                    Copy
                                                </button>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-12 sm:gap-3">
                                            <div className="sm:col-span-4 flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-white/60">
                                                <User2 className="h-4 w-4" />
                                                <span>Sender</span>
                                            </div>
                                            <div className="sm:col-span-8 text-sm">—</div>
                                        </div>

                                        <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-12 sm:gap-3">
                                            <div className="sm:col-span-4 flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-white/60">
                                                <User2 className="h-4 w-4" />
                                                <span>Receiver</span>
                                            </div>
                                            <div className="sm:col-span-8 text-sm">desphixs</div>
                                        </div>

                                        <div className="grid grid-cols-1 items-start gap-2 sm:grid-cols-12 sm:gap-3">
                                            <div className="sm:col-span-4 flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-white/60">
                                                <CalendarClock className="h-4 w-4" />
                                                <span>Timestamp</span>
                                            </div>
                                            <div className="sm:col-span-8 font-mono text-sm">2025-09-12 16:04</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Info note */}
                                <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs text-gray-600 dark:border-white/10 dark:bg-black/40 dark:text-white/60">
                                    Keep your reference IDs safe. If you contact support, share the <span className="font-mono">reference</span> and <span className="font-mono">external_reference</span>.
                                </div>
                            </section>

                            {/* Right: Quick actions / meta */}
                            <aside className="lg:col-span-4">
                                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                            <Shield className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Payment Integrity</div>
                                            <div className="text-xs text-gray-600 dark:text-white/60">Status and references shown are verified from the ledger.</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 space-y-2">
                                        <button type="button" className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white">
                                            Copy Reference
                                        </button>
                                        <button type="button" className="w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white">
                                            Copy External Ref
                                        </button>
                                        <Link to="/transactions" className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black">
                                            Back to Transactions
                                        </Link>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TransactionDetail;
