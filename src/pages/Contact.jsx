import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import HeroSection from '/src/components/common/components/HeroSection';
import { contactHero } from '/src/components/common/data/heroData';

const Contact = () => {
    const contentRef = useRef(null);
    const isInView = useInView(contentRef, { once: true, margin: "-100px" });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <div className="bg-white min-h-screen">
            <HeroSection {...contactHero} />

            {/* Centered Google Map */}
            <div className="max-w-4xl mx-auto px-6 py-10">
                <div className="w-full h-[370px] overflow-hidden">
                    <iframe
                        title="Brahma Valley Location"
                        src="https://www.google.com/maps?q=brahma+valley+college+of+pharmacy+nashik&output=embed"
                        className="w-full h-full border-0"
                        allowFullScreen=""
                        loading="lazy"
                    />
                </div>
            </div>

            {/* Contact + Form Section */}
            <section ref={contentRef} className="max-w-6xl mx-auto px-6 pb-14">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

                    {/* LEFT — Address / Phone / Email */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        {/* Address */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75V21H3V9.75z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 21V12h6v9" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-extrabold text-gray-900 text-sm leading-6">
                                    BRAHMA VALLEY EDUCATIONAL CAMPUS,<br />
                                    NASHIK-422213
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19c0 1.657-1.343 3-3 3S3 20.657 3 19v-4a9 9 0 0118 0v4c0 1.657-1.343 3-3 3s-3-1.343-3-3" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-extrabold text-gray-900 text-sm">+91919923072990</p>
                                <p className="text-gray-500 text-sm mt-0.5">Mon to Fri 9am to 6 pm</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="mt-1 flex-shrink-0 text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 7.5-9.75-7.5" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-extrabold text-gray-900 text-sm">brahmavalleycop@gmail.com</p>
                                <p className="text-gray-500 text-sm mt-0.5">Send us your query anytime!</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CENTER — Name / Email / Subject inputs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Enter Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400"
                        />
                    </motion.div>

                    {/* RIGHT — Message textarea + Send button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        <textarea
                            name="message"
                            placeholder="Enter Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full border border-gray-300 rounded px-4 py-2.5 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-blue-400 resize-none"
                        />
                        <div className="flex justify-end">
                            <button
                                onClick={handleSubmit}
                                className="bg-[#0d6efd] hover:bg-blue-700 text-white font-semibold px-8 py-2.5 rounded text-sm transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    );
};

export default Contact;