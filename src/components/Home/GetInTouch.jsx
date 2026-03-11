import React, { useState, useEffect } from 'react';

// Target date for countdown — set to ~149 days from now
const TARGET_DATE = new Date(Date.now() + 149 * 24 * 60 * 60 * 1000);

const getTimeLeft = () => {
    const diff = TARGET_DATE - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, mins: 0, secs: 0 };
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
    };
};

const GetInTouch = () => {
    const [time, setTime] = useState(getTimeLeft());
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

    useEffect(() => {
        const timer = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
    };

    const countItems = [
        { value: time.days, label: 'Days' },
        { value: time.hours, label: 'Hours' },
        { value: time.mins, label: 'Mins' },
        { value: time.secs, label: 'Secs' },
    ];

    return (
        <section className="bg-[#0d1f3c] py-16 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* ── Left ── */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
                        Get in Touch
                    </h2>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed text-justify mb-10 max-w-lg">
                        Choosing the right college is a big decision, and we're here to make that easier for you. Whether you're curious about our pharmacy courses, need help with the application process, or simply want to understand what life is like at our campus, feel free to reach out. We're just a message away and happy to help
                    </p>

                    {/* Countdown */}
                    <div className="grid grid-cols-4 gap-3">
                        {countItems.map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-start justify-center bg-[#1e3152] rounded-lg px-4 py-5"
                            >
                                <div className="text-white leading-none">
                                    <span className="text-3xl font-bold">{String(item.value).padStart(2, '0')}</span>
                                    <span className="text-sm font-normal ml-1">{item.label}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Right: Form ── */}
                <div className="bg-white rounded-lg p-8 shadow-xl">
                    <p className="text-center text-gray-700 text-base mb-6">
                        It is high time for learning
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full border-0 border-b border-gray-300 pb-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email Address"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full border-0 border-b border-gray-300 pb-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="Your Subject"
                            value={form.subject}
                            onChange={handleChange}
                            required
                            className="w-full border-0 border-b border-gray-300 pb-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500"
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full border border-gray-300 rounded p-2 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-400 resize-y"
                        />
                        <button
                            type="submit"
                            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold uppercase text-sm py-3 rounded transition-colors duration-200"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default GetInTouch;