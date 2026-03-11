import React, { useState } from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { examinationHero } from "../common/data/heroData";

const tabs = [
    {
        id: "results",
        label: "Results",
        content: (
            <>
                <h5 className="font-semibold text-gray-800 mb-3">Results</h5>
                <p className="text-gray-500 text-sm">
                    Your result content will go here. You can display result PDFs or dynamic tables.
                </p>
            </>
        ),
    },
    {
        id: "analysis",
        label: "Result Analysis",
        content: (
            <>
                <h5 className="font-semibold text-gray-800 mb-3">Result Analysis</h5>
                <p className="text-gray-500 text-sm">
                    Charts or analytics based on student performance may appear here.
                </p>
            </>
        ),
    },
    {
        id: "grievance",
        label: "Examination Grievance",
        content: (
            <>
                <h5 className="font-semibold text-gray-800 mb-3">Examination Grievance</h5>
                <p className="text-gray-500 text-sm">
                    Students can submit exam-related grievances in this section.
                </p>
            </>
        ),
    },
];

const Examination = () => {
    const [active, setActive] = useState("results");

    return (
        <StudentCornerLayout heroData={examinationHero}>
            <div className="p-6 md:p-8">

                {/* Tab Bar */}
                <div className="flex items-end border-b border-gray-300 mb-6 gap-1">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActive(tab.id)}
                            className={`px-5 py-2 text-sm font-medium rounded-t transition-colors
                                ${active === tab.id
                                    ? "bg-[#0d6efd] text-white"
                                    : "text-gray-600 hover:text-blue-600 bg-transparent"
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

export default Examination;