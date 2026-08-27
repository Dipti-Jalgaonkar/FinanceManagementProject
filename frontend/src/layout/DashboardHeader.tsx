import ThemeToggleButton from "@/components/ThemeToggleButton";
import { SidebarTrigger } from "./Sidebar";
import { Link } from "react-router-dom";
import { Send, Shield, WalletIcon } from "lucide-react";

const DashboardHeader = () => {
    return (
        <div>
            <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#0b0b0c]/80">
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <ThemeToggleButton />
                        <SidebarTrigger />
                        <div className="hidden text-sm text-gray-500 dark:text-white/60 md:block">Good to see you 👋</div>
                    </div>

                    <div className="flex items-center gap-2">
                        <Link to="/dashboard/transfers/new" className="hidden items-center justify-center rounded-2xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 md:inline-flex dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                            <Send className="mr-2 h-4 w-4" />
                            Transfer
                        </Link>
                        <Link to="/dashboard/savings/new" className="hidden items-center justify-center rounded-2xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 md:inline-flex dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                            <Shield className="mr-2 h-4 w-4" />
                            New Goal
                        </Link>
                        <Link to="/dashboard/fund" className="hidden items-center justify-center rounded-2xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 md:inline-flex dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                            <WalletIcon className="mr-2 h-4 w-4" />
                            Fund Wallet
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default DashboardHeader;
