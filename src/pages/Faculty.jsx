import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '/src/components/common/components/HeroSection';
import { facultiesHero } from '/src/components/common/data/heroData';

const teachingFaculty = [
    { name: "Gokul S. Talele", designation: "Principal", qualification: "M. Pharm. PhD", image: "/faculties/Gokul S. Talele.jpg" },
    { name: "Prof. Ishi Harshada Shamrao", designation: "Assistant Professor", qualification: "M.PHARM", image: "/faculties/Prof. Ishi Harshada Shamrao.jpg" },
    { name: "Prof. Bhandare Saurbh Dilip", designation: "Assistant Professor", qualification: "M.PHARM", image: "/faculties/Prof. Bhandare Saurbh Dilip.jpg" },
    { name: "Prof. Kute Vijaya Arjun", designation: "Assistant Professor", qualification: "M.PHARM", image: "/faculties/Prof. Kute Vijaya Arjun.jpg" },
    { name: "Prof. Narde Sachin Bapurao", designation: "Assistant Professor", qualification: "M. PHARM", image: "/faculties/Prof. Narde Sachin Bapurao.jpg" },
    { name: "Prof. Datir Shital Kashinath", designation: "Assistant Professor", qualification: "M. PHARM", image: "/faculties/Prof. Datir Shital Kashinath.jpg" },
    { name: "Miss. Patil Divyata Sunil", designation: "Asst. Prof", qualification: "M. PHARM", image: null },
    { name: "Dr. Pankaj N. Shirsath", designation: "Assistant Professor", qualification: "M. PHARM", image: "/faculties/Dr. Pankaj N. Shirsath.jpg" },
    { name: "Prof. Saikh Ashmmena Faruk", designation: "Assistant Professor", qualification: "M. PHARM", image: "/faculties/Prof. Saikh Ashmmena Faruk.jpg" },
    { name: "Prof. Kadale Sakshi Vijay", designation: "Assistant Professor", qualification: "M. PHARM", image: "/faculties/Prof. Kadale Sakshi Vijay.jpeg" },
    { name: "Miss. Shinde Vidya Sudhakar", designation: "Asst. Prof", qualification: "M. PHARM", image: null },
    { name: "Prof. More Swati Kashinath", designation: "Assistant Professor", qualification: "M. PHARM", image: "/faculties/Prof. More Swati Kashinath.jpeg" },
    { name: "Miss. Radhika Eknathsingh Jamadar", designation: "Asst. Prof", qualification: "M. PHARM", image: null },
    { name: "Prof. Bavisakr Vashali P.", designation: "Assistant Professor", qualification: "M. PHARM", image: "/faculties/Prof. Bavisakr Vashali P.jpeg" },
    { name: "Prof. Khairnar Ashiwini Vijay", designation: "Assistant Professor", qualification: "M. PHARM", image: "/faculties/Prof. Khairnar Ashiwini Vijay.jpg" },
];

const nonTeachingStaff = [
    { name: "Mr. Sunil Motiram Ambepure", designation: "Clerk", qualification: "B.Com", image: "/faculties/Sunil Motiram Ambepure.jpg" },
    { name: "Miss. Sunita Pandurang Gavit", designation: "Librarian", qualification: "Mlib.ISC.", image: "/faculties/Sunita Pandurang Gavit.jpg" },
    { name: "Mrs. Rajani D. Shinde", designation: "Rector", qualification: "10th Pass", image: null },
    { name: "Mr. Vilas S. Sonawane", designation: "Peon", qualification: "HSC B.ed", image: "/faculties/Vilas S. Sonawane.jpeg" },
    { name: "Miss. Nikita Rajaram Gangurde", designation: "Com. Aptt.", qualification: "S.Y.B.com", image: "/faculties/Nikita Rajaram Gangurde.jpg" },
    { name: "Mrs. Anjana V. Gangode", designation: "Sweeper", qualification: "10th Pass", image: "/faculties/Anjana V. Gangode.jpg" },
    { name: "Mrs. Kalubai T. Lande", designation: "Sweeper", qualification: "4th Pass", image: "/faculties/Kalubai T. Lande.jpg" },
    { name: "Mr. Sahebrao Bhika Bodke", designation: "Peon", qualification: "12th Pass", image: "/faculties/Sahebrao Bhika Bodke.jpg" },
    { name: "Mrs. Hira H. Ambepure", designation: "Hostel Sweeper", qualification: "4th Pass", image: null },
];

const FacultyCard = ({ member, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        >
            {/* Photo */}
            <div className="w-full" style={{ aspectRatio: '4/3' }}>
                <img
                    src={member.image || "/faculties/person.png"}
                    alt={member.name}
                    className="w-full h-full object-contain object-top"
                    onError={(e) => { e.target.src = "/faculties/person.png"; }}
                />
            </div>

            {/* Info */}
            <div className="px-5 py-4 space-y-1">
                <p className="text-sm text-gray-800">
                    <span className="font-bold">Name:</span> {member.name}
                </p>
                <p className="text-sm text-gray-800">
                    <span className="font-bold">Designation:</span> {member.designation}
                </p>
                <p className="text-sm text-gray-800">
                    <span className="font-bold">Qualification:</span> {member.qualification}
                </p>
            </div>
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

            <div className="max-w-6xl mx-auto px-6 py-14">

                {/* Teaching Faculty */}
                <section className="mb-16">
                    <SectionHeading title="Teaching Faculty" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teachingFaculty.map((member, i) => (
                            <FacultyCard key={i} member={member} index={i} />
                        ))}
                    </div>
                </section>

                {/* Non-Teaching Staff */}
                <section>
                    <SectionHeading title="Non-Teaching Staff" />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nonTeachingStaff.map((member, i) => (
                            <FacultyCard key={i} member={member} index={i} />
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Faculties;