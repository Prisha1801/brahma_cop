import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutUs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section className="bg-gray-50 py-14 px-4">
            <div className="max-w-6xl mx-auto">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">
                    About Us
                </h2>

                {/* Two-column layout */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left: Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <img
                            src="/banners/b1.png"
                            alt="About Brahma Valley College of Pharmacy"
                            className="w-full h-auto object-cover rounded"
                        />
                    </motion.div>

                    {/* Right: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-5 leading-snug">
                            Welcome to Nashik Gramin Shikshan Prasarak Mandal College of Pharmacy
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
                            Brahma Valley educational campus spans across approximately 45 acres of land situated at the base of Anjaneri, along Trimbak road. Anjaneri holds significance as the birthplace of Lord Hanumanji and is in close proximity to the Trimbakeshwar temple, enhancing the campus with a sacred and serene ambiance. Our Founder President, Shri Rajaramji Pangavhane (Patil), hailing from an agricultural background and actively involved in Politics, Envisions establishing multiple educational institutions within the campus to provide education to underprivileged students, particularly those from rural areas. While NGSPM'S campus, initiated in 2000, currently hosts a variety of educational institutions, there are plans and aspirations to introduce additional colleges specializing in technical and other disciplines in the near future. The students are anticipated to greatly appreciate the top-notch facilities and pleasant surroundings offered by the campus.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;