import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { committeeHero } from "../common/data/heroData";

const members = [
    { sr: 1, name: "Hon. Mr. Rajaram D. Pangavhane (Patil)", designation: "Founder President" },
    { sr: 2, name: "Mr. Gaurav R. Pangavhane (Patil)", designation: "General Secretary" },
    { sr: 3, name: "Dr. Dhanisha G. Pangavhane (Patil)", designation: "Vice President" },
    { sr: 4, name: "Mrs. Ashwini A. Bhosale", designation: "Vice President" },
    { sr: 5, name: "Mrs. Prabhadevi R. Pangavhane (Patil)", designation: "Joint Secretary" },
    { sr: 6, name: "Mrs. Shital Y. Mule", designation: "Member" },
    { sr: 7, name: "Mrs. Rohini A. Bhosle", designation: "Member" },
];

const Committee = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...committeeHero} />

            <section ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead>
                                <tr style={{ backgroundColor: '#3a3f4b' }}>
                                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-white border border-gray-600 w-20 text-center">
                                        Sr. No.
                                    </th>
                                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-white border border-gray-600">
                                        Committee Member Name
                                    </th>
                                    <th className="py-4 px-6 font-semibold uppercase tracking-wider text-white border border-gray-600">
                                        designation
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {members.map((row, i) => (
                                    <motion.tr
                                        key={row.sr}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.35, delay: 0.1 + i * 0.06 }}
                                        className={`hover:bg-blue-50 transition-colors ${i % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}
                                    >
                                        <td className="py-3 px-6 border border-gray-200 text-center font-medium">
                                            {row.sr}
                                        </td>
                                        <td className="py-3 px-6 border border-gray-200 font-medium">
                                            {row.name}
                                        </td>
                                        <td className="py-3 px-6 border border-gray-200 text-gray-600">
                                            {row.designation}
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Committee;