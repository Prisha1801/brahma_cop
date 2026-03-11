import React from "react";
import HeroSection from "../common/components/HeroSection";
import StudentCornerSidebar from "./StudentCornerSidebar";

const StudentCornerLayout = ({ children, heroData }) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <HeroSection {...heroData} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                            {children}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <StudentCornerSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentCornerLayout;
