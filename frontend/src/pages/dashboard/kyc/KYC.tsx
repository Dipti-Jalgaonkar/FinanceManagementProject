import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User2, Calendar, IdCard, UploadCloud, ShieldCheck, Info } from "lucide-react";
import { DesktopSidebar, MobileSidebar } from "@/layout/Sidebar";
import DashboardHeader from "@/layout/DashboardHeader";

const KYC: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-gray-900 antialiased dark:bg-[#0a0a0a] dark:text-white">
            <div className="flex">
                {/* Desktop sidebar */}
                <DesktopSidebar />

                {/* Mobile off-canvas */}
                <MobileSidebar />

                <main className="min-h-screen bg-white text-gray-900 dark:bg-[#0a0a0a] dark:text-white">
                    <DashboardHeader />

                    {/* Top bar / breadcrumb */}
                    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-6 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-2">
                            <Link to="/dashboard" className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-white/5 dark:text-white">
                                <ArrowLeft className="h-4 w-4" />
                                Back
                            </Link>
                            <div className="hidden text-sm text-gray-500 dark:text-white/60 sm:block">/ Settings / KYC</div>
                        </div>
                    </div>

                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                            {/* Left: guidance / status */}
                            <aside className="lg:col-span-4">
                                {/* Status card */}
                                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="grid h-10 w-10 place-items-center rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-black/40">
                                            <ShieldCheck className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold">KYC Verification</div>
                                            <div className="text-xs text-gray-600 dark:text-white/60">
                                                Status: <span className="font-medium text-amber-600 dark:text-amber-400">Unverified</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 rounded-xl border border-dashed border-gray-300 p-3 text-xs text-gray-600 dark:border-white/10 dark:text-white/60">
                                        <p>Submit your legal name, date of birth, ID type, and a photo/scan of your ID.</p>
                                        <ul className="mt-2 list-inside list-disc space-y-1">
                                            <li>Name must match your government ID.</li>
                                            <li>Date of birth must be in the past.</li>
                                            <li>Accepted IDs: National ID, Driver&apos;s License, Passport.</li>
                                            <li>Image should be clear, full document, no glare.</li>
                                        </ul>
                                    </div>

                                    <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 p-3 text-xs text-gray-700 dark:border-white/10 dark:bg-black/40 dark:text-white/80">
                                        <div className="flex items-start gap-2">
                                            <Info className="mt-0.5 h-4 w-4" />
                                            <p>
                                                By submitting, you consent to verification and secure storage of KYC metadata. Your verification status will show as <strong>Pending Review</strong> until approved.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </aside>

                            {/* Right: form (UI only — no logic) */}
                            <section className="lg:col-span-8">
                                <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5">
                                    <div className="mb-5">
                                        <h1 className="text-lg font-semibold">Submit your KYC</h1>
                                        <p className="text-sm text-gray-600 dark:text-white/60">This helps us keep your account safe and compliant.</p>
                                    </div>

                                    <form className="space-y-5" noValidate>
                                        {/* Full name */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Full name</label>
                                            <div className="relative">
                                                <User2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input type="text" placeholder="As shown on your ID" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                            </div>
                                        </div>

                                        {/* Date of birth */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Date of birth</label>
                                            <div className="relative">
                                                <Calendar className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <input type="date" className="w-full rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" />
                                            </div>
                                        </div>

                                        {/* ID type */}
                                        <div>
                                            <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">ID type</label>
                                            <div className="relative">
                                                <IdCard className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-white/50" />
                                                <select className="w-full appearance-none rounded-xl border border-gray-300 bg-white px-9 py-2 text-sm text-gray-900 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white" defaultValue="NATIONAL_ID">
                                                    <option value="NATIONAL_ID">National ID Card</option>
                                                    <option value="DRIVERS_LICENSE">Driver&apos;s License</option>
                                                    <option value="PASSPORT">International Passport</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* ID image (URL + upload control w/o logic) */}
                                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                            <div>
                                                <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">ID image URL</label>
                                                <input type="url" placeholder="https://…" className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none ring-0 transition focus:border-gray-400 dark:border-white/10 dark:bg-transparent dark:text-white dark:placeholder:text-white/50" />
                                                <p className="mt-1 text-[11px] text-gray-500 dark:text-white/60">Your model expects a string. Upload to your storage and paste the public URL here.</p>
                                            </div>

                                            <div>
                                                <label className="mb-1 block text-xs font-medium text-gray-700 dark:text-white/70">Or upload to preview (UI-only)</label>
                                                <div className="flex items-center gap-3">
                                                    <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                                        <UploadCloud className="h-4 w-4" />
                                                        <span>Choose file</span>
                                                        <input type="file" accept="image/*" className="hidden" />
                                                    </label>
                                                    <span className="text-xs text-gray-600 dark:text-white/60">PNG/JPG up to ~5MB</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Preview card (static placeholder) */}
                                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 dark:border-white/10 dark:bg-black/40">
                                                <div className="text-xs text-gray-600 dark:text-white/60">Live preview</div>
                                                <div className="mt-2 overflow-hidden rounded-xl border border-gray-200 dark:border-white/10">
                                                    <div className="grid h-48 place-items-center text-xs text-gray-500 dark:text-white/50">No image selected</div>
                                                </div>
                                            </div>

                                            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-sm dark:border-white/10 dark:bg-black/40">
                                                <div className="text-xs text-gray-600 dark:text-white/60">What we’ll store</div>
                                                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700 dark:text-white/80">
                                                    <li>
                                                        <span className="font-medium">full_name</span> — —
                                                    </li>
                                                    <li>
                                                        <span className="font-medium">date_of_birth</span> — —
                                                    </li>
                                                    <li>
                                                        <span className="font-medium">id_type</span> — —
                                                    </li>
                                                    <li>
                                                        <span className="font-medium">id_image</span> — —
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                                            <div className="text-xs text-gray-600 dark:text-white/60">Submissions are reviewed within 24–72 hours.</div>
                                            <div className="flex gap-2">
                                                <Link to="/dashboard" className="inline-flex items-center justify-center rounded-xl border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 dark:border-white/10 dark:bg-transparent dark:text-white dark:hover:bg-white/5">
                                                    Cancel
                                                </Link>
                                                <button type="button" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 dark:bg-white dark:text-black">
                                                    Submit KYC
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                {/* Footer tip */}
                                <div className="mt-6 rounded-2xl border border-gray-200 bg-gray-50 p-4 text-xs text-gray-600 dark:border-white/10 dark:bg-black/40 dark:text-white/60">If you already submitted KYC and need corrections, please contact support. Duplicate submissions aren’t allowed.</div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default KYC;
