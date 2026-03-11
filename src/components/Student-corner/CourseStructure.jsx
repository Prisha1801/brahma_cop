import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { courseStructureHero } from "../common/data/heroData";

const courseFiles = [
    { label: "Course Structure B.Pharm 2022-23", link: "#" },
    { label: "Course Structure B.Pharm 2020-21", link: "#" },
    { label: "Course Structure B.Pharm 2019-20", link: "#" },
    { label: "Course Structure B.Pharm 2015-16", link: "#" },
    { label: "Course Structure B.Pharm 2013-14", link: "#" },
];

const CourseStructure = () => {
    return (
        <StudentCornerLayout heroData={courseStructureHero}>
            <div className="p-6 md:p-8">
                <ul className="space-y-3">
                    {courseFiles.map((item, i) => (
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

export default CourseStructure;