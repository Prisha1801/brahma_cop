import React from "react";
import HeroSection from "../common/components/HeroSection";
import { academicOverviewHero } from "../common/data/heroData";
import AdmissionSidebar from "./AdmissionSidebar";

const AcademicOverview = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...academicOverviewHero} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-8">
                            
                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 block w-full text-left">
                                Academics
                            </h2>
                            <ul className="list-disc pl-6 mb-8 text-gray-600 space-y-2">
                                <li>Smooth conduction of Practical and Lecture Sessions.</li>
                                <li>Completion of syllabus</li>
                                <li>Receiving and solving student's academic problems.</li>
                                <li>Inform the parents regarding students progress</li>
                                <li>Attendance</li>
                                <li>Performance in periodically tests</li>
                                <li>Students Mentoring system</li>
                            </ul>

                            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200 block w-full text-left">
                                Descipline Department
                            </h2>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>To maintain overall discipline in the campus</li>
                                <li>Deal with student grievances</li>
                                <li>Acts of indiscipline if any</li>
                            </ul>

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

export default AcademicOverview;
