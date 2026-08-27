// src/pages/marketing/BankLanding.tsx
import Header from "@/layout/Header";
import React from "react";

const Index: React.FC = () => {
    return (
        <>
            <Header />
            <main className="bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
                {/* ===== Hero ===== */}
                <section className="relative overflow-hidden">
                    {/* subtle grid / glow */}
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
                        <div className="absolute bottom-0 left-1/4 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/15" />
                        <div className="absolute -bottom-24 right-1/4 h-64 w-64 translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl dark:bg-fuchsia-500/15" />
                    </div>

                    <div className="mx-auto max-w-8xl px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24 lg:pb-16">
                        <div className="mx-auto max-w-5xl text-center">
                            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white/80">Banking • Wallets • Analytics</span>
                            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                                Manage your <span className="underline decoration-4 underline-offset-8 decoration-black/20 dark:decoration-white/20">Money</span> like a PRO.
                            </h1>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-white/60">One modern dashboard for funding wallets, transfers, savings, deposits/withdrawals, and real-time expense tracking.</p>

                            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                                <a href="#get-started" className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 dark:bg-white dark:text-black">
                                    Get Started — It’s Free
                                </a>
                                <a href="#features" className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                    Explore Features
                                </a>
                            </div>

                            {/* trust row */}
                            <div className="mt-10 grid grid-cols-2 items-center gap-4 opacity-80 sm:grid-cols-4">
                                {["PCI-DSS", "99.99% Uptime", "Bank-grade KYC", "Real-time Alerts"].map((t) => (
                                    <div key={t} className="text-center text-xs text-gray-600 dark:text-white/50">
                                        {t}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* mock card / hero media */}
                        <div className="mx-auto mt-14 max-w-5xl">
                            <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-2xl dark:border-white/10 dark:bg-white/5 backdrop-blur">
                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                    {/* balance */}
                                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-black/40">
                                        <p className="text-sm text-gray-600 dark:text-white/60">Total Balance</p>
                                        <p className="mt-2 text-3xl font-semibold">$82,450.13</p>
                                        <p className="mt-3 inline-flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400">
                                            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" /> +3.1% this month
                                        </p>
                                    </div>

                                    {/* savings */}
                                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-black/40">
                                        <p className="text-sm text-gray-600 dark:text-white/60">Savings Vault</p>
                                        <p className="mt-2 text-3xl font-semibold">$24,000</p>
                                        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-white/10">
                                            <div className="h-full w-2/3 rounded-full bg-gray-900 dark:bg-white" />
                                        </div>
                                        <p className="mt-2 text-xs text-gray-600 dark:text-white/60">Goal: $36,000</p>
                                    </div>

                                    {/* recent activity */}
                                    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-white/10 dark:bg-black/40">
                                        <p className="text-sm text-gray-600 dark:text-white/60">Recent Activity</p>
                                        <ul className="mt-2 space-y-2 text-sm">
                                            <li className="flex items-center justify-between">
                                                <span className="text-gray-700 dark:text-white/80">Transfer to Maya</span>
                                                <span className="rounded-full bg-gray-900/90 px-2 py-0.5 text-[11px] text-white dark:bg-white/90 dark:text-black">-$120</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span className="text-gray-700 dark:text-white/80">Wallet Top-Up</span>
                                                <span className="rounded-full bg-emerald-500/90 px-2 py-0.5 text-[11px] text-white">+$500</span>
                                            </li>
                                            <li className="flex items-center justify-between">
                                                <span className="text-gray-700 dark:text-white/80">ATM Withdrawal</span>
                                                <span className="rounded-full bg-rose-500/90 px-2 py-0.5 text-[11px] text-white">-$60</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Features ===== */}
                <section id="features" className="relative border-t border-gray-200 py-16 dark:border-white/10 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Everything your money needs.</h2>
                            <p className="mt-3 text-gray-600 dark:text-white/60">Fast. Secure. Minimal. Built for how you move.</p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Wallet Funding", desc: "Top-up instantly via cards, bank transfer, or cash agents.", icon: WalletIcon },
                                { title: "Online Transfers", desc: "Send money globally with bank-grade security.", icon: SendIcon },
                                { title: "Savings Vaults", desc: "Automated rules, round-ups, and goals with APY boosts.", icon: SafeIcon },
                                { title: "Deposit & Withdraw", desc: "Instant deposits, cardless withdrawals, ATM access.", icon: CashIcon },
                                { title: "Expense Tracker", desc: "Categorize, budget, and get real-time insights.", icon: ChartIcon },
                                { title: "Cards & Controls", desc: "Virtual/physical cards with smart spend limits.", icon: CardIcon },
                            ].map(({ title, desc, icon: Icon }) => (
                                <div key={title} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-white/10 dark:bg-white/5">
                                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 shadow-sm dark:border-white/10 dark:bg-black/40">
                                        <Icon />
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-white/60">{desc}</p>
                                    <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-white/10" />
                                    <button className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gray-900 underline-offset-4 hover:underline dark:text-white">
                                        Learn more
                                        <ArrowIcon />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== Stats strip ===== */}
                <section className="border-t border-gray-200 bg-gray-50 py-12 dark:border-white/10 dark:bg-black/40">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
                            {[
                                ["$2.4B+", "Processed"],
                                ["180+", "Countries"],
                                ["<250ms", "Avg Transfer"],
                                ["99.99%", "Uptime"],
                            ].map(([kpi, label]) => (
                                <div key={label} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                                    <div className="text-2xl font-semibold">{kpi}</div>
                                    <div className="mt-1 text-xs text-gray-600 dark:text-white/60">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== How it works ===== */}
                <section className="border-t border-gray-200 py-16 dark:border-white/10 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">3 steps to get moving</h2>
                            <p className="mt-3 text-gray-600 dark:text-white/60">Create. Fund. Use. That’s it.</p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
                            {[
                                ["Create Account", "Sign up in under a minute with email + KYC."],
                                ["Fund Wallet", "Top-up via cards, bank transfers, or cash agents."],
                                ["Spend & Save", "Pay anywhere, set goals, and track every expense."],
                            ].map(([title, desc], i) => (
                                <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-white dark:bg-white dark:text-black">{i + 1}</div>
                                    <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-white/60">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== Showcase / screenshot mock ===== */}
                <section className="relative border-t border-gray-200 py-16 dark:border-white/10 sm:py-20">
                    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-4 shadow-2xl dark:border-white/10 dark:bg-black/40">
                            <div className="aspect-[16/9] w-full rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-100 to-white dark:border-white/10 dark:from-black/40 dark:to-black/20" />
                        </div>
                        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-gray-600 dark:text-white/60">Live balance, vaults, and transfers in a single clean view. No clutter, no noise.</p>
                    </div>
                </section>

                {/* ===== Testimonials ===== */}
                <section className="border-t border-gray-200 py-16 dark:border-white/10 sm:py-20">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Loved by modern teams</h2>
                            <p className="mt-3 text-gray-600 dark:text-white/60">Creators, startups, and remote operators everywhere.</p>
                        </div>

                        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                ["“Instant transfers, zero friction.”", "Sasha — Product Lead"],
                                ["“The savings rules are stupidly good.”", "Kyle — Indie Dev"],
                                ["“Expense tracking that doesn’t suck.”", "Imani — Ops Manager"],
                            ].map(([quote, by]) => (
                                <figure key={by} className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/5">
                                    <blockquote className="text-sm leading-relaxed text-gray-800 dark:text-white/90">{quote}</blockquote>
                                    <figcaption className="mt-3 text-xs text-gray-600 dark:text-white/60">{by}</figcaption>
                                </figure>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== FAQ ===== */}
                <section className="border-t border-gray-200 py-16 dark:border-white/10 sm:py-20">
                    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
                        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">Questions, answered.</h2>
                        <div className="mt-8 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-white/5">
                            {[
                                ["Is my money safe?", "We’re PCI-DSS aware, partner with licensed institutions, and ship security first."],
                                ["Do you charge fees?", "Most features are free. We take small fees on certain transfers and FX conversions."],
                                ["What about cards?", "Spin up virtual cards instantly; order physical cards with spend controls."],
                                ["Do you support teams?", "Yes — shared wallets, approvals, and role controls are built in."],
                            ].map(([q, a]) => (
                                <details key={q} className="group p-5">
                                    <summary className="cursor-pointer list-none text-sm font-medium text-gray-900 transition group-open:text-gray-700 dark:text-white dark:group-open:text-white/80">{q}</summary>
                                    <p className="mt-2 text-sm text-gray-600 dark:text-white/60">{a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ===== Final CTA ===== */}
                <section id="get-started" className="relative border-t border-gray-200 py-16 dark:border-white/10 sm:py-20">
                    <div aria-hidden className="pointer-events-none absolute inset-0">
                        <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-black/5 blur-3xl dark:bg-white/5" />
                    </div>
                    <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
                        <h3 className="text-3xl font-semibold tracking-tight sm:text-4xl">Banking that feels effortless.</h3>
                        <p className="mx-auto mt-3 max-w-2xl text-gray-600 dark:text-white/60">Open a free account in minutes. Fund instantly. Spend and save smarter.</p>
                        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                            <a href="/signup" className="inline-flex items-center justify-center rounded-2xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 dark:bg-white dark:text-black">
                                Create Account
                            </a>
                            <a href="/login" className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                Sign In
                            </a>
                        </div>
                        <p className="mt-4 text-xs text-gray-500 dark:text-white/50">No monthly fees. Cancel anytime.</p>
                    </div>
                </section>
            </main>
        </>
    );
};

/* ===== Inline icons (no external libs) ===== */
const WalletIcon = () => (
    <svg className="h-5 w-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M17 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const SendIcon = () => (
    <svg className="h-5 w-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

const SafeIcon = () => (
    <svg className="h-5 w-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const CashIcon = () => (
    <svg className="h-5 w-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none">
        <path d="M4 8h16v8H4z" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="12" r="1" fill="currentColor" />
        <circle cx="16" cy="12" r="1" fill="currentColor" />
    </svg>
);

const ChartIcon = () => (
    <svg className="h-5 w-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none">
        <path d="M4 19V5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 19V9" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 19v-6" stroke="currentColor" strokeWidth="1.5" />
        <path d="M19 19v-10" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const CardIcon = () => (
    <svg className="h-5 w-5 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.5" />
    </svg>
);

const ArrowIcon = () => (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
        <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
);

export default Index;
