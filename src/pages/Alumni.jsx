import React from "react";
import { motion } from "framer-motion";
import HeroSection from "/src/components/common/components/HeroSection";
import { alumniHero } from "/src/components/common/data/heroData";

const Alumni = () => {

    const images = [
        "/images/alumni.jpeg",
        "/images/alumni.jpeg",
        "/images/alumni.jpeg",
        "/images/alumni.jpeg",
    ];

    return (
        <div className="bg-white min-h-screen">
            <HeroSection {...alumniHero} />

            {/* Alumni Section */}
            <section className="py-16 px-6 bg-gray-100">
                <div className="max-w-7xl mx-auto">

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-semibold text-blue-700">
                            Explore Our Moments
                        </h2>
                    </motion.div>

                    {/* Grid Gallery */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {images.map((img, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                className="overflow-hidden rounded-lg shadow-md"
                            >
                                <img
                                    src={img}
                                    alt="Alumni"
                                    className="w-full h-[220px] object-cover"
                                    onError={(e) => {
                                        e.target.src = "/images/person.png";
                                    }}
                                />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Alumni;