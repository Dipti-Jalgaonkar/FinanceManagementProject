import { Link } from "react-router-dom";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";
import { UserPlus, Trash2, User2, Mail, Hash, ShieldCheck, X, Plus } from "lucide-react";

const Beneficiaries = () => {
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
                            <div>
                                <h1 className="text-lg font-semibold">Beneficiaries</h1>
                                <p className="text-sm text-gray-600 dark:text-white/60">People you can transfer to quickly.</p>
                            </div>

                            {/* Add modal toggle */}
                            <input id="add-beneficiary" type="checkbox" className="peer/add hidden" />
                            <label htmlFor="add-beneficiary" className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-95 dark:bg-white dark:text-black">
                                <UserPlus className="h-4 w-4" />
                                Add Beneficiary
                            </label>

                            {/* Add Modal */}
                            <div
                                className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center bg-black/0 p-4 opacity-0 transition
                           peer-checked/add:pointer-events-auto peer-checked/add:bg-black/40 peer-checked/add:opacity-100"
                                aria-hidden={false}
                            >
                                <label htmlFor="add-beneficiary" className="absolute inset-0" aria-hidden="true" />
                                <div
                                    className="relative w-full max-w-md -translate-y-62 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl transition
                             dark:border-white/10 dark:bg-[#101113]
                             peer-checked/add:translate-y-0"
                                    role="dialog"
                                    aria-modal="true"
                                    aria-labelledby="add-title"
                                >
                                    {/* Close */}
                                    <label htmlFor="add-beneficiary" className="absolute right-3 top-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white" aria-label="Close modal">
                                        <X className="h-4 w-4" />
                                    </label>

                                    <div className="mb-4 flex items-center gap-2">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                            <UserPlus className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 id="add-title" className="text-base font-semibold">
                                                Add a new beneficiary
                                            </h3>
                                            <p className="text-xs text-gray-600 dark:text-white/60">Add by email or account/wallet ID.</p>
                                        </div>
                                    </div>

                                    <form className="space-y-4" noValidate>
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Account / Wallet ID</label>
                                            <div className="relative">
                                                <Hash className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input placeholder="3141592653" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                        </div>

                                        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700 dark:border-white/10 dark:bg-black/40 dark:text-white/80">
                                            <div className="flex items-center gap-2">
                                                <ShieldCheck className="h-4 w-4" />
                                                <p>We’ll verify the account is valid before saving.</p>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="mt-2 flex items-center justify-end gap-2">
                                            <label htmlFor="add-beneficiary" className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                                Cancel
                                            </label>
                                            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black">
                                                <Plus className="h-4 w-4" />
                                                Save Beneficiary
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Grid of beneficiary cards */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="grid h-12 w-12 place-items-center rounded-2xl border border-gray-200 bg-gray-50 font-semibold dark:border-white/10 dark:bg-black/40">
                                                <span className="text-sm">MJ</span>
                                            </div>
                                            <div>
                                                <div className="font-medium">Maya Johnson</div>
                                                <div className="text-xs text-gray-600 dark:text-white/60">maya@example.com</div>
                                                <div className="mt-1 inline-flex items-center gap-1.5 text-xs text-gray-600 dark:text-white/60">
                                                    <Hash className="h-3.5 w-3.5" /> 3141592653
                                                </div>
                                            </div>
                                        </div>

                                        {/* Delete modal toggle (unique per card) */}
                                        <input id={`del-${i}`} type="checkbox" className="peer/del hidden" />
                                        <label htmlFor={`del-${i}`} className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                            <Trash2 className="h-3.5 w-3.5" />
                                            Delete
                                        </label>

                                        {/* Delete confirm modal */}
                                        <div
                                            className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center bg-black/0 p-4 opacity-0 transition
                                 peer-checked/del:pointer-events-auto peer-checked/del:bg-black/40 peer-checked/del:opacity-100"
                                        >
                                            <label htmlFor={`del-${i}`} className="absolute inset-0" aria-hidden="true" />
                                            <div
                                                className="relative w-full max-w-sm -translate-y-72 rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl transition
                                   dark:border-white/10 dark:bg-[#101113]
                                   peer-checked/del:translate-y-0"
                                                role="dialog"
                                                aria-modal="true"
                                            >
                                                <label htmlFor={`del-${i}`} className="absolute right-3 top-3 inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white" aria-label="Close modal">
                                                    <X className="h-4 w-4" />
                                                </label>

                                                <div className="mb-3 text-base font-semibold">Delete beneficiary?</div>
                                                <p className="text-sm text-gray-600 dark:text-white/60">
                                                    This will remove <span className="font-medium">Maya Johnson</span> from your beneficiaries list.
                                                </p>

                                                <div className="mt-5 flex items-center justify-end gap-2">
                                                    <label htmlFor={`del-${i}`} className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                                        Cancel
                                                    </label>
                                                    <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95">
                                                        <Trash2 className="h-4 w-4" />
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer actions */}
                                    <div className="mt-4 flex items-center justify-between">
                                        <Link to="/dashboard/transfers/new" className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-3 py-1.5 text-xs font-semibold text-white hover:opacity-95 dark:bg-white dark:text-black">
                                            Send money
                                        </Link>
                                        <span className="text-xs text-gray-600 dark:text-white/60">Added: 2025-09-01</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom helper */}
                        <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs text-gray-700 dark:border-white/10 dark:bg-black/40 dark:text-white/80">Tip: You can add beneficiaries via email or account/wallet ID. We’ll validate before saving.</div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Beneficiaries;
