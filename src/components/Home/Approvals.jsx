import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const approvals = [
    { src: "/approvals/aicte.png", alt: "AICTE" },
    { src: "/approvals/PCI.png", alt: "Pharmacy Council of India" },
    { src: "/approvals/Dte.png", alt: "DTE Maharashtra" },
    { src: "/approvals/nirf-img1.png", alt: "NIRF" },
    { src: "/approvals/SPPU-LOGO.png", alt: "Savitribai Phule Pune University" },
];

const Approvals = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="bg-gray-50 py-14 px-4">

            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-3">
                    Approvals &amp; Accreditations
                </h2>
                <div className="flex items-center justify-center gap-3">
                    <span className="block w-12 h-px bg-yellow-500" />
                    <span className="text-yellow-500 text-lg">★</span>
                    <span className="block w-12 h-px bg-yellow-500" />
                </div>
            </div>

            {/* Logos */}
            <div
                ref={ref}
                className="flex flex-wrap items-center justify-center gap-8 md:gap-12 max-w-5xl mx-auto"
            >
                {approvals.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="relative w-40 h-40 rounded-full hover:shadow-lg transition-shadow duration-300"
                    >
                        {/* Image fills the circle */}
                        <img
                            src={item.src}
                            alt={item.alt}
                            className="w-full h-full p-2 object-contain rounded-full bg-white"
                        />
                        {/* Border overlaid on top of image */}
                        <div className="absolute inset-0 rounded-full border-4 border-yellow-400 pointer-events-none" />
                    </motion.div>
                ))}
            </div>

        </section>
    );
};

export default Approvals;