import React from "react";
import HeroSection from '../common/components/HeroSection';
import { programmeDetailsHero } from "../common/data/heroData";
import AdmissionSidebar from "./AdmissionSidebar";

const ProgrammeDetails = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...programmeDetailsHero} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse">
                                    <thead>
                                        <tr className="bg-[#0d6efd] text-white">
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Sr.No</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Programme Name</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Choice Code</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">DTE Code</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 border border-gray-200">1</td>
                                            <td className="py-4 px-6 border border-gray-200">B. Pharmacy</td>
                                            <td className="py-4 px-6 border border-gray-200">520282310</td>
                                            <td className="py-4 px-6 border border-gray-200">5202</td>
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

export default ProgrammeDetails;
