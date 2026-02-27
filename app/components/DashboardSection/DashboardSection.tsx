"use client";

import { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

export default function DashboardSection() {
    const [isDark, setIsDark] = useState(false);

    const handleToggle = () => {
        setIsDark(!isDark);
    };

    return (
        <section className="w-full bg-slate-950 mt-8 pt-16 pb-8 flex flex-col items-center justify-center px-4">
            {/* Dashboard Image Container */}
            <div className="w-full max-w-5xl flex items-center justify-center">
                {/* Desktop Image */}
                <div className="hidden md:block w-full">
                    <div className="relative w-full">
                        <img
                            src={
                                isDark
                                    ? "/images/dashboard-dark.png"
                                    : "/images/dashboard-light.png"
                            }
                            alt="Dashboard"
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                    </div>
                </div>

                {/* Mobile Image */}
                <div className="md:hidden w-full px-4">
                    <div className="relative w-full aspect-[9/16]">
                        <img
                            src={
                                isDark
                                    ? "/images/dashboardmobile-dark.png"
                                    : "/images/dashboardmobile-light.png"
                            }
                            alt="Dashboard Mobile"
                            className="w-full h-full object-cover transition-all duration-500"
                        />
                    </div>
                </div>
            </div>

            {/* Toggle Switch */}
            <div className="flex items-center justify-center">
                <button
                    onClick={handleToggle}
                    className={`relative inline-flex items-center h-10 w-20 rounded-full transition-all duration-500 ${
                        isDark
                            ? "bg-indigo-600 shadow-lg shadow-indigo-500/30"
                            : "bg-amber-400 shadow-lg shadow-amber-500/30"
                    } hover:shadow-xl border border-indigo-500/30`}
                >
                    {/* Sliding Circle */}
                    <div
                        className={`absolute h-8 w-8 rounded-full bg-white shadow-md transition-all duration-500 flex items-center justify-center ${
                            isDark ? "translate-x-10" : "translate-x-1"
                        }`}
                    >
                        {isDark ? (
                            <FiMoon className="w-5 h-5 text-indigo-600" />
                        ) : (
                            <FiSun className="w-5 h-5 text-amber-500" />
                        )}
                    </div>
                </button>
            </div>
        </section>
    );
}
