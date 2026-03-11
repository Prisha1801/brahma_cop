import React, { useState } from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { codeOfConductHero } from "../common/data/heroData";

const tabs = [
    {
        id: "boys",
        label: "CODE OF CONDUCT OF BOYS HOSTEL",
        content: (
            <div className="border border-gray-200 rounded-b rounded-tr p-6 bg-white">
                <h5 className="font-semibold text-gray-800 mb-3">Results</h5>
                <p className="text-gray-500 text-sm">
                    Your result content will go here. You can display result PDFs or dynamic tables.
                </p>
            </div>
        ),
    },
    {
        id: "girls",
        label: "CODE OF CONDUCT OF GIRLS HOSTEL",
        content: (
            <div className="border border-gray-200 rounded-b rounded-tr p-6 bg-white">
                <h5 className="font-semibold text-gray-800 mb-3">Result Analysis</h5>
                <p className="text-gray-500 text-sm">
                    Charts or analytics based on student performance may appear here.
                </p>
            </div>
        ),
    },
];

const CodeOfConduct = () => {
    const [active, setActive] = useState("boys");

    return (
        <StudentCornerLayout heroData={codeOfConductHero}>
            <div className="p-6 md:p-8">

                {/* Tab Bar */}
                <div className="flex items-end border-b border-gray-300 gap-0">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className={`px-5 py-2.5 text-xs font-bold tracking-wide transition-colors
                                ${active === tab.id
                                    ? "bg-[#0d6efd] text-white border border-b-0 border-blue-600 rounded-t"
                                    : "text-gray-500 hover:text-blue-600 bg-transparent"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div>
                    {tabs.find(t => t.id === active)?.content}
                </div>

            </div>
        </StudentCornerLayout>
    );
};

export default CodeOfConduct;