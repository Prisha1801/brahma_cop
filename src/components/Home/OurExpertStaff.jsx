import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '../common/components/HeroSection';
import { facultiesHero } from '../common/data/heroData';

const teachingFaculty = [
    { name: "Gokul S. Talele", designation: "Principal", image: "/faculties/Gokul S. Talele.jpg" },
    { name: "Prof. Ishi Harshada Shamrao", designation: "Assistant Professor", image: "/faculties/Prof. Ishi Harshada Shamrao.jpg" },
    { name: "Prof. Bhandare Saurbh Dilip", designation: "Assistant Professor", image: "/faculties/Prof. Bhandare Saurbh Dilip.jpg" },
    { name: "Prof. Kute Vijaya Arjun", designation: "Assistant Professor", image: "/faculties/Prof. Kute Vijaya Arjun.jpg" },
    { name: "Prof. Narde Sachin Bapurao", designation: "Assistant Professor", image: "/faculties/Prof. Narde Sachin Bapurao.jpg" },
    { name: "Prof. Datir Shital Kashinath", designation: "Assistant Professor", image: "/faculties/Prof. Datir Shital Kashinath.jpg" },
    { name: "Miss. Patil Divyata Sunil", designation: "Asst. Prof", image: null },
    { name: "Dr. Pankaj N. Shirsath", designation: "Assistant Professor", image: "/faculties/Dr. Pankaj N. Shirsath.jpg" },
    { name: "Prof. Saikh Ashmmena Faruk", designation: "Assistant Professor", image: "/faculties/Prof. Saikh Ashmmena Faruk.jpg" },
    { name: "Prof. Kadale Sakshi Vijay", designation: "Assistant Professor", image: "/faculties/Prof. Kadale Sakshi Vijay.jpeg" },
    { name: "Miss. Shinde Vidya Sudhakar", designation: "Asst. Prof", image: null },
    { name: "Prof. More Swati Kashinath", designation: "Assistant Professor", image: "/faculties/Prof. More Swati Kashinath.jpeg" },
    { name: "Miss. Radhika Eknathsingh Jamadar", designation: "Asst. Prof", image: null },
    { name: "Prof. Bavisakr Vashali P.", designation: "Assistant Professor", image: "/faculties/Prof. Bavisakr Vashali P.jpeg" },
    { name: "Prof. Khairnar Ashiwini Vijay", designation: "Assistant Professor", image: "/faculties/Prof. Khairnar Ashiwini Vijay.jpg" },
];

// Blue silhouette SVG placeholder
const PersonPlaceholder = () => (
    <div className="w-full h-full flex items-center justify-center bg-blue-50">
        <svg viewBox="0 0 100 100" className="w-3/4 h-3/4" fill="none">
            <circle cx="50" cy="35" r="18" fill="#5b9bd5" />
            <ellipse cx="50" cy="80" rx="28" ry="20" fill="#5b9bd5" />
        </svg>
    </div>
);

const FacultyCard = ({ member, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col items-center"
        >
            {/* Inner photo box — rounded corners, light bg */}
            <div className="w-full rounded-xl overflow-hidden  mb-4" style={{ aspectRatio: '4/3' }}>
                {member.image ? (
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-contain object-top"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }}
                    />
                ) : null}
                {!member.image && <PersonPlaceholder />}
            </div>

            {/* Name — bold, centered */}
            <h3 className="text-sm md:text-base font-bold text-gray-900 text-center leading-snug mb-1">
                {member.name}
            </h3>

            {/* Designation — italic gray, centered */}
            <p className="text-xs md:text-sm text-gray-400 italic text-center">
                {member.designation}
            </p>
        </motion.div>
    );
};

const SectionHeading = ({ title }) => (
    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 pb-3 border-b-2 border-gray-200">
        {title}
    </h2>
);

const Faculties = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <HeroSection {...facultiesHero} />

            <div className="max-w-4xl mx-auto px-6 py-14">

                {/* Teaching Faculty */}
                <section className="mb-16">
                    <SectionHeading title="Teaching Faculty" />
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                        {teachingFaculty.map((member, i) => (
                            <FacultyCard key={i} member={member} index={i} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Faculties;