import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { studentCouncilCommitteeHero } from "../common/data/heroData";

const members = [
    { sr: 1, name: "Dr. Laxmikant B. Borse (Principal)", designation: "Chairman" },
];

const StudentConcilCommittee = () => {
    return (
        <StudentCornerLayout heroData={studentCouncilCommitteeHero}>
            <div className="p-6 md:p-8">
                <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                        <thead>
                            <tr style={{ backgroundColor: '#1a8cff' }}>
                                <th className="py-3 px-4 text-white font-semibold text-left border border-blue-400 w-16">
                                    Sr.
                                </th>
                                <th className="py-3 px-4 text-white font-semibold text-left border border-blue-400">
                                    Name Of Schema
                                </th>
                                <th className="py-3 px-4 text-white font-semibold text-left border border-blue-400">
                                    Designations
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700">
                            {members.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-4 border border-gray-200">{row.sr}</td>
                                    <td className="py-3 px-4 border border-gray-200">{row.name}</td>
                                    <td className="py-3 px-4 border border-gray-200">{row.designation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </StudentCornerLayout>
    );
};

export default StudentConcilCommittee;