import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { hostelDocumentationHero } from "../common/data/heroData";

const docs = [
    { label: "Course Structure B.Pharm 2022-25", link: "#" },
];

const HostelDocumentation = () => {
    return (
        <StudentCornerLayout heroData={hostelDocumentationHero}>
            <div className="p-6 md:p-8">
                <ul className="space-y-3">
                    {docs.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 text-sm hover:underline"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </StudentCornerLayout>
    );
};

export default HostelDocumentation;