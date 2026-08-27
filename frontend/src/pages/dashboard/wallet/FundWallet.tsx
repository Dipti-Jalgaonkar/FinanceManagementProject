import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Wallet, CreditCard, Calendar, Hash, UserRound, Info } from "lucide-react";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";

const FundWallet: React.FC = () => {
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
                            <div className="hidden text-sm text-gray-500 dark:text-white/60 sm:block">/ Wallet / Fund</div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                            {/* Left: context/tips */}
                            <aside className="lg:col-span-4">
                                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                            <Wallet className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">Fund your wallet</div>
                                            <div className="text-xs text-gray-600 dark:text-white/60">Top up instantly with your card.</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-3 text-xs text-gray-600 dark:border-white/10 dark:text-white/60">
                                        <ul className="list-inside list-disc space-y-1">
                                            <li>Enter the amount you want to add.</li>
                                            <li>Use a valid card number, expiry, and CVV (dummy for now).</li>
                                            <li>We’ll show fees during checkout (when wired).</li>
                                        </ul>
                                    </div>
                                </div>
                            </aside>

                            {/* Right: form */}
                            <section className="lg:col-span-8">
                                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="mb-5">
                                        <h1 className="text-lg font-semibold">Fund Wallet</h1>
                                        <p className="text-sm text-gray-600 dark:text-white/60">Add money to your wallet securely. Card fields are placeholders.</p>
                                    </div>

                                    <form className="space-y-6" noValidate>
                                        {/* Amount */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Amount</label>
                                            <div className="relative">
                                                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500 dark:text-white/60">$</span>
                                                <input type="number" placeholder="0.00" min="0" step="0.01" className="w-full rounded-xl border border-gray-300 bg-white px-7 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                        </div>

                                        {/* Cardholder name */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Cardholder name</label>
                                            <div className="relative">
                                                <UserRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input type="text" placeholder="Jane Doe" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                            </div>
                                        </div>

                                        {/* Card number */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Card number</label>
                                            <div className="relative">
                                                <CreditCard className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input inputMode="numeric" placeholder="4242 4242 4242 4242" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm tracking-wider text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                        </div>

                                        {/* Expiry + CVV */}
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Expiry (MM/YY)</label>
                                                <div className="relative">
                                                    <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                    <input inputMode="numeric" placeholder="12/28" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">CVV</label>
                                                <div className="relative">
                                                    <Hash className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                    <input inputMode="numeric" placeholder="123" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                                            <div className="text-xs text-gray-600 dark:text-white/60">You’ll complete payment in a secure checkout when integrated.</div>
                                            <div className="flex gap-2">
                                                <Link to="/dashboard" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                                    Cancel
                                                </Link>
                                                <button type="button" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black">
                                                    Fund Wallet
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* Tip */}
                                <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs text-gray-600 dark:border-white/10 dark:bg-black/40 dark:text-white/60">Card data here is non-functional. Swap these inputs for your Stripe Elements/Checkout to go live.</div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default FundWallet;
