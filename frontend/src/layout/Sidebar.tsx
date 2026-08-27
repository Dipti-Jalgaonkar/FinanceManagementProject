// src/layout/Sidebar.tsx
import React from "react";
import { Link } from "react-router-dom";
import { X, Menu, ChartBarBig, Send, Shield, Users, Bell, Settings } from "lucide-react";

const walletId = "3141592653";

export type NavItem = { label: string; to: string; icon: React.ReactNode };

const nav: NavItem[] = [
    { label: "Overview", to: "/dashboard", icon: <ChartBarBig className="h-4 w-4" /> },
    { label: "Transfers", to: "/dashboard/transfers", icon: <Send className="h-4 w-4" /> },
    { label: "Savings", to: "/dashboard/savings", icon: <Shield className="h-4 w-4" /> },
    { label: "Beneficiaries", to: "/dashboard/beneficiaries", icon: <Users className="h-4 w-4" /> },
    { label: "Notifications", to: "/dashboard/notifications", icon: <Bell className="h-4 w-4" /> },
    { label: "Settings", to: "/dashboard/kyc", icon: <Settings className="h-4 w-4" /> },
];

/** ----------------------------------------------------------------
 *  Event-based triggers so pages don't manage local state
 *  ---------------------------------------------------------------- */
const OPEN_EVT = "sidebar:open";
const CLOSE_EVT = "sidebar:close";
const TOGGLE_EVT = "sidebar:toggle";

function onOpen() {
    document.dispatchEvent(new CustomEvent(OPEN_EVT));
}
function onClose() {
    document.dispatchEvent(new CustomEvent(CLOSE_EVT));
}
function onToggle() {
    document.dispatchEvent(new CustomEvent(TOGGLE_EVT));
}

/** Use this anywhere (e.g., header) to open/toggle the drawer without state */
export function SidebarTrigger({ variant = "toggle", className = "", children, "aria-label": ariaLabel }: { variant?: "open" | "toggle"; className?: string; children?: React.ReactNode; "aria-label"?: string }) {
    return (
        <button onClick={variant === "open" ? onOpen : onToggle} aria-label={ariaLabel ?? (variant === "open" ? "Open menu" : "Toggle menu")} className={className || "inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-[#101113] dark:text-white dark:hover:bg-[#131416] md:hidden"}>
            {children ?? <Menu className="h-4 w-4" />}
        </button>
    );
}

function BrandDot() {
    return (
        <div className="grid h-9 w-9 place-items-center rounded-xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
            <span className="block h-1.5 w-1.5 rounded-full bg-gray-900 dark:bg-white" />
        </div>
    );
}

function SidebarNav() {
    return (
        <nav className="mt-2 px-2">
            {nav.map(({ label, icon, to }) => (
                <Link
                    key={label}
                    to={to}
                    className="group mt-1 flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-neutral-300 dark:hover:bg-white/5 dark:hover:text-white"
                    onClick={onClose} // close drawer on navigate (mobile)
                >
                    <span className="inline-grid h-9 w-9 place-items-center rounded-xl border border-gray-200 bg-white shadow-sm transition group-hover:shadow-md dark:border-white/10 dark:bg-black/40">{icon}</span>
                    <span>{label}</span>
                </Link>
            ))}
        </nav>
    );
}

function SidebarFooter() {
    return (
        <div className="mt-auto p-3">
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-3 text-xs dark:border-white/10 dark:bg-black/40">
                <div className="text-gray-600 dark:text-white/60">Wallet ID</div>
                <div className="mt-1 font-mono text-sm">{walletId}</div>
            </div>
            <div className="mt-3">
                <Link to="/dashboard/transfers/new" className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-95 dark:bg-white dark:text-black" onClick={onClose}>
                    New Transfer
                </Link>
            </div>
        </div>
    );
}

/** Desktop static sidebar */
export function DesktopSidebar() {
    return (
        <aside className="relative hidden w-72 border-r border-gray-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-[#0b0b0c]/80 md:block">
            <div className="flex h-full flex-col">
                <Link to="/" className="flex h-16 items-center gap-2 px-4">
                    <BrandDot />
                    <span className="text-sm font-semibold tracking-tight">FinanceOS</span>
                </Link>
                <SidebarNav />
                <SidebarFooter />
            </div>
        </aside>
    );
}

/** Mobile off-canvas sidebar (internal state + event listeners) */
export function MobileSidebar() {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
        const openH = () => setOpen(true);
        const closeH = () => setOpen(false);
        const toggleH = () => setOpen((v) => !v);

        document.addEventListener(OPEN_EVT, openH);
        document.addEventListener(CLOSE_EVT, closeH);
        document.addEventListener(TOGGLE_EVT, toggleH);

        return () => {
            document.removeEventListener(OPEN_EVT, openH);
            document.removeEventListener(CLOSE_EVT, closeH);
            document.removeEventListener(TOGGLE_EVT, toggleH);
        };
    }, []);

    return (
        <>
            {/* Backdrop */}
            <div className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`} onClick={onClose} aria-hidden />
            {/* Drawer */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 -translate-x-full transform border-r border-gray-200 bg-white/95 backdrop-blur transition-transform duration-300 dark:border-white/10 dark:bg-[#0b0b0c]/90 md:hidden ${open ? "translate-x-0" : ""}`}>
                <div className="flex h-16 items-center justify-between px-4">
                    <BrandDot />
                    <button onClick={onClose} className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white" aria-label="Close menu">
                        <X className="h-4 w-4" />
                    </button>
                </div>
                <SidebarNav />
                <SidebarFooter />
            </aside>
        </>
    );

    function onClose() {
        setOpen(false);
    }
}
