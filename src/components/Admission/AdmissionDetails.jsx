import React from "react";
import HeroSection from "../common/components/HeroSection";
import { admissionDetailsHero } from "../common/data/heroData";
import AdmissionSidebar from "./AdmissionSidebar";

const AdmissionDetails = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...admissionDetailsHero} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full text-center border-collapse">
                                    <thead>
                                        <tr className="bg-[#0d6efd] text-white">
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Sr. No.</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Courses</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Students Intake</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Students Admitted</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="py-4 px-6 border border-gray-200">1</td>
                                            <td className="py-4 px-6 border border-gray-200 font-medium">B. Pharmacy</td>
                                            <td className="py-4 px-6 border border-gray-200">60</td>
                                            <td className="py-4 px-6 border border-gray-200">60</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="text-gray-800 font-medium text-lg">
                            Contact To : Gokul S. Talele (9822779611)
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

export default AdmissionDetails;
