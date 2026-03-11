import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { bvClubHero } from "../common/data/heroData";

const clubs = [
    {
        image: "/images/bv.jpg",
        clubName: "Research Club",
        advisorLabel: "Faculty Advisors",
        advisorName: "Aman Dhatarwal",
        link: "#",
    },
    {
        image: "/images/bv.jpg",
        clubName: "Research Club",
        advisorLabel: "Faculty Advisors",
        advisorName: "Aman Dhatarwal",
        link: "#",
    },
];

const BVClub = () => {
    return (
        <StudentCornerLayout heroData={bvClubHero}>
            <div className="p-6 md:p-8">

                {/* Intro text */}
                <p className="text-gray-700 text-sm leading-7 mb-6">
                    The Bramha Valley Foundation campus on the Nashik Trimbak Road is rapidly emerging as one of the most...
                </p>

                {/* Club cards grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {clubs.map((club, i) => (
                        <div
                            key={i}
                            className="border border-gray-200 rounded-lg overflow-hidden bg-white flex items-start gap-0"
                        >
                            {/* Image */}
                            <div className="flex-shrink-0 w-32 h-full">
                                <img
                                    src={club.image}
                                    alt={club.clubName}
                                    className="w-32 h-full object-cover"
                                    style={{ minHeight: "120px" }}
                                />
                            </div>

                            {/* Info */}
                            <div className="p-4 flex flex-col gap-1.5">
                                <div className="bg-[#0d6efd] text-white text-sm font-medium px-3 py-1 rounded-sm inline-block w-fit">
                                    {club.clubName}
                                </div>
                                <p className="text-gray-800 text-sm font-medium mt-1">{club.advisorLabel}</p>
                                <p className="text-gray-800 text-sm font-semibold">{club.advisorName}</p>
                                <a
                                    href={club.link}
                                    className="text-blue-600 text-sm hover:underline mt-1"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </StudentCornerLayout>
    );
};

export default BVClub;