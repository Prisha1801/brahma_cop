import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { curricularHero } from "../common/data/heroData";

const sections = [
    {
        title: "General Notices",
        items: [
            { label: "Notice For Scholarship 13-03-23", link: "#" },
            { label: "Notice For Scholarship Attendance 21-02-2023", link: "#" },
            { label: "Notice Right To Give Up 10-01-2024", link: "#" },
            { label: "Notice Scholarship Form 12-10-2023", link: "#" },
        ],
    },
    {
        title: "Exam Notices",
        items: [
            { label: "SPPU Practical Exam Timetable T.Y. & Final Y.B. Pharm. Date-13.12.23", link: "#" },
            { label: "SPPU Theory EXAM Non-University Subject Timetable Date 22.12.23", link: "#" },
            { label: "SPPU Theory Exam Timetable - F.Y. B. Pharmacy 2019 Pattern Date-02.01.24", link: "#" },
        ],
    },
    {
        title: "University Circular",
        fullWidth: true,
        items: [
            { label: "Regarding Appointment of S.S and Squad Oct Nov 2023 - 06/11/2023", link: "#" },
            { label: "Begin Applying 2018 Pattern for F.Y.B. Pharm & M.Pharm under Pharmacy Branch", link: "#" },
            { label: "Begin Applying 2019 Pattern for F.Y.B. Pharm & M.Pharm under Pharmacy Branch", link: "#" },
            { label: "Requirement of Exam Stationary for Nov-Dec 2023 Exam", link: "#" },
            { label: "S.S. Appointment October and November 2023 - 19/10/2023", link: "#" },
        ],
    },
];

const Circular = () => {
    return (
        <StudentCornerLayout heroData={curricularHero}>
            <div className="p-6 md:p-8">
                {/* Top two columns */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {sections.filter(s => !s.fullWidth).map((section) => (
                        <div key={section.title}>
                            <div className="bg-[#0d6efd] px-4 py-3 rounded-sm mb-3">
                                <h3 className="text-white font-medium text-sm">{section.title}</h3>
                            </div>
                            <ul className="space-y-2">
                                {section.items.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.link}
                                            className="text-gray-700 text-sm hover:text-blue-600 transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Full-width University Circular */}
                {sections.filter(s => s.fullWidth).map((section) => (
                    <div key={section.title}>
                        <div className="bg-[#0d6efd] px-4 py-3 rounded-sm mb-3">
                            <h3 className="text-white font-medium text-sm">{section.title}</h3>
                        </div>
                        <ul className="space-y-2">
                            {section.items.map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={item.link}
                                        className="text-gray-700 text-sm hover:text-blue-600 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </StudentCornerLayout>
    );
};

export default Circular;