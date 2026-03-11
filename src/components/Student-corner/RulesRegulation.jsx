import React, { useState } from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { rulesRegulationStudentHero } from "../common/data/heroData";

const yearData = [
    {
        year: "First Year (FY)",
        content: "Orientation on 10th July, Engineering Graphics from 15th July, Internal Test from 5th September.",
    },
    {
        year: "Second Year (SY)",
        content: "Project selection begins in August, Industrial Visit planned in October.",
    },
];

const RulesRegulation = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

    return (
        <StudentCornerLayout heroData={rulesRegulationStudentHero}>
            <div className="p-6 md:p-8">
                <div className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm divide-y divide-gray-200">
                    {yearData.map((item, i) => (
                        <div key={i}>
                            {/* Clickable heading row */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between px-5 py-3 hover:bg-gray-50 transition-colors text-left"
                            >
                                <span className="text-blue-600 font-medium text-sm">{item.year}</span>
                                <svg
                                    className={`w-4 h-4 text-blue-500 flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : "rotate-0"}`}
                                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Collapsible content */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                            >
                                <div className="px-5 py-4 text-gray-700 text-sm leading-relaxed border-t border-gray-100 bg-gray-50">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </StudentCornerLayout>
    );
};

export default RulesRegulation;