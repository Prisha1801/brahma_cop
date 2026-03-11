import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { scholarshipSectionHero } from "../common/data/heroData";

const scholarships = [
    {
        sr: 1,
        name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna. (EBC)",
        link: "#",
    },
];

const ScholarshipSection = () => {
    return (
        <StudentCornerLayout heroData={scholarshipSectionHero}>
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
                                <th className="py-3 px-4 text-white font-semibold text-left border border-blue-400 w-20">
                                    Docs
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white text-gray-700">
                            {scholarships.map((row, i) => (
                                <tr key={i} className="hover:bg-gray-50 transition-colors">
                                    <td className="py-3 px-4 border border-gray-200">{row.sr}</td>
                                    <td className="py-3 px-4 border border-gray-200">{row.name}</td>
                                    <td className="py-3 px-4 border border-gray-200">
                                        <a
                                            href={row.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-700 hover:text-blue-600 transition-colors"
                                        >
                                            view
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </StudentCornerLayout>
    );
};

export default ScholarshipSection;