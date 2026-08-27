import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";
import { Bell, CheckCircle2, Clock, XCircle, ArrowRight, Check } from "lucide-react";

const Notifications = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-[#0a0a0a] dark:text-white">
            <div className="flex">
                {/* Sidebar */}
                <DesktopSidebar />
                <MobileSidebar />

                {/* Main */}
                <div className="flex min-h-screen flex-1 flex-col">
                    <DashboardHeader />

                    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
                        {/* Header row */}
                        <div className="mb-6 flex items-center justify-between">
                            <div>
                                <h1 className="text-lg font-semibold">Notifications</h1>
                                <p className="text-sm text-gray-600 dark:text-white/60">Latest updates on your transactions and activity.</p>
                            </div>

                            {/* Mark all as read (UI only) */}
                            <button type="button" className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5" title="Mark all as read">
                                <Check className="h-4 w-4" />
                                Mark all as read
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Success example */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                                <div className="flex items-start gap-3">
                                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                        <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium">Deposit Successful</h3>
                                            <span className="text-xs text-gray-500 dark:text-white/60">2h ago</span>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-white/70">$500 has been credited to your wallet.</p>
                                        <div className="mt-2 flex items-center gap-3">
                                            <button className="inline-flex items-center gap-1 text-xs font-medium text-gray-900 underline-offset-4 hover:underline dark:text-white">
                                                View transaction <ArrowRight className="h-3 w-3" />
                                            </button>
                                            {/* Per-card mark as read (UI only) */}
                                            <button className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white">
                                                <Check className="h-3 w-3" />
                                                Mark as read
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Failure example */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                                <div className="flex items-start gap-3">
                                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                        <XCircle className="h-5 w-5 text-rose-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium">Transfer Failed</h3>
                                            <span className="text-xs text-gray-500 dark:text-white/60">Yesterday</span>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-white/70">Your $120 transfer to Maya was declined. Please retry.</p>
                                        <div className="mt-2 flex items-center gap-3">
                                            <button className="inline-flex items-center gap-1 text-xs font-medium text-gray-900 underline-offset-4 hover:underline dark:text-white">
                                                Retry transfer <ArrowRight className="h-3 w-3" />
                                            </button>
                                            <button className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white">
                                                <Check className="h-3 w-3" />
                                                Mark as read
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Pending example */}
                            <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5">
                                <div className="flex items-start gap-3">
                                    <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                        <Clock className="h-5 w-5 text-amber-500" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium">Savings Pending</h3>
                                            <span className="text-xs text-gray-500 dark:text-white/60">3d ago</span>
                                        </div>
                                        <p className="mt-1 text-sm text-gray-600 dark:text-white/70">$200 scheduled to “Vacation 2025” goal is awaiting confirmation.</p>
                                        <div className="mt-2 flex items-center gap-3">
                                            <button className="inline-flex items-center gap-1 text-xs font-medium text-gray-900 underline-offset-4 hover:underline dark:text-white">
                                                View goal <ArrowRight className="h-3 w-3" />
                                            </button>
                                            <button className="inline-flex items-center gap-1 text-xs font-medium text-gray-600 hover:text-gray-900 dark:text-white/70 dark:hover:text-white">
                                                <Check className="h-3 w-3" />
                                                Mark as read
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Footer note */}
                        <div className="mt-6 text-center text-xs text-gray-500 dark:text-white/60">You’re all caught up 🎉</div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Notifications;
