import React from "react";
import HeroSection from '../common/components/HeroSection';
import { eligibilityHero } from "../common/data/heroData";
import AdmissionSidebar from "./AdmissionSidebar";

const Eligibility = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...eligibilityHero} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-[#0d6efd] text-white">
                                            <th className="py-4 px-4 font-semibold border border-blue-400">Sr.No</th>
                                            <th className="py-4 px-4 font-semibold border border-blue-400">Course</th>
                                            <th className="py-4 px-4 font-semibold border border-blue-400">Duration</th>
                                            <th className="py-4 px-4 font-semibold border border-blue-400">Intake</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Eligibility Criteria</th>
                                            <th className="py-4 px-4 font-semibold border border-blue-400">Recognized/Approved</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-6 px-4 border border-gray-200 align-top">1</td>
                                            <td className="py-6 px-4 border border-gray-200 align-top font-medium whitespace-nowrap">B. Pharm</td>
                                            <td className="py-6 px-4 border border-gray-200 align-top whitespace-nowrap">4 year</td>
                                            <td className="py-6 px-4 border border-gray-200 align-top">60</td>
                                            <td className="py-6 px-6 border border-gray-200 text-left leading-relaxed">
                                                XIIth pass with 45% marks either in PCB or PCM (for open category ) and 40% for ( Reserved category and person with disability) and should have non-zero score in MHT-CET 2025
                                            </td>
                                            <td className="py-6 px-4 border border-gray-200 align-top leading-relaxed">
                                                PCI, AICTE, DTE & Savitribai Phule Pune University, Pune
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-6 px-4 border border-gray-200 align-top">2</td>
                                            <td className="py-6 px-4 border border-gray-200 align-top font-medium whitespace-nowrap">B. Pharm<br /><span className="text-xs text-gray-500 font-normal">(Second Year)</span></td>
                                            <td className="py-6 px-4 border border-gray-200 align-top whitespace-nowrap">3 year</td>
                                            <td className="py-6 px-4 border border-gray-200 align-top">As per vacancy</td>
                                            <td className="py-6 px-6 border border-gray-200 text-left leading-relaxed">
                                                D. Pharm passed with 45% marks ( for open category) and 40% marks ( for reserved category)
                                            </td>
                                            <td className="py-6 px-4 border border-gray-200 align-top leading-relaxed">
                                                Savitribai Phule Pune University, Pune
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <AdmissionSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Eligibility;