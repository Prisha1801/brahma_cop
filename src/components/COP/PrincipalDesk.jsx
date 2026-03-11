import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from '../common/components/HeroSection';
import { principalDeskHero } from '../common/data/heroData';

const PrincipalDesk = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-60px" });

    return (
        <>
            <HeroSection {...principalDeskHero} />

            <div className="bg-gray-50 py-10">

                {/* "Principal Desk" plain centered label */}
                <p className="text-center text-gray-600 text-base mb-6">Principal Desk</p>

                {/* Card */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 18 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="max-w-4xl mx-auto px-4"
                >
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                            {/* LEFT — Portrait photo + info */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 }}
                                className="flex flex-col items-center text-center"
                            >
                                <img
                                    src="/faculties/Dr. Vijay D. Wagh.jpeg"
                                    alt="Dr. Vijay D. Wagh"
                                    className="w-52 object-cover object-top rounded-lg shadow-md mb-5"
                                />
                                <h4 className="text-lg font-semibold text-gray-900">
                                    Dr. Vijay D. Wagh
                                </h4>
                                <p className="text-gray-500 text-sm mt-1">Principal</p>
                                <p className="text-gray-500 text-sm mt-0.5">
                                    Brahma Valley College of Pharmacy
                                </p>
                                <p className="text-gray-500 text-sm mt-0.5">
                                    Mob. No. - 9923072990
                                </p>
                            </motion.div>

                            {/* RIGHT — Message */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 }}
                            >
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                                    Welcome to College of Pharmacy
                                </h2>

                                <p className="text-gray-700 text-sm mb-3">"Dear Students,</p>

                                <p className="text-gray-700 text-sm leading-7 text-justify">
                                    It is with great pleasure that I welcome you to our College Brahma valley college of Pharmacy. Our institution is committed to nurturing the next generation of pharmacists, equipping them with the knowledge, skills, and values to excel in this noble profession. We provide a supportive learning environment with state-of-the-art facilities and a dedicated faculty passionate about your success. We encourage you to embrace the opportunities for academic and personal growth, including research, community engagement, and extracurricular activities. Our vision is to empower you to become leaders in the field, making significant contributions to healthcare and society. Together, let's shape a healthier future.
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </>
    );
};

export default PrincipalDesk;