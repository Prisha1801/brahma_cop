import React from "react";
import { Link } from "react-router-dom";

const quickLinksCol1 = [
    { label: "Home",            to: "/" },
    { label: "COP",             to: "/board-members" },
    { label: "Admission",       to: "/admission/admission-details" },
    { label: "Academics",       to: "/admission/academics-overview" },
    { label: "Code of Conduct", to: "/code-of-conduct" },
];

const quickLinksCol2 = [
    { label: "Incubation",        to: "/incubation" },
    { label: "Scholarship",       to: "/scholarship-section" },
    { label: "Library",           to: "/library" },
    { label: "Startup",           to: "/startup" },
    { label: "Important Contact", to: "/important-contacts" },
];

const usefulLinks = [
    { label: "NAAC",               to: "/naac-document" },
    { label: "IQAC",               to: "/iiqa" },
    { label: "I-IPR",              to: "/i-ipr" },
    { label: "IRDC",               to: "/irdc" },
    { label: "Rules & Regulations",to: "/rules-regulation" },
];

const socialIcons = [
    { file: "fb.jpg",  href: "#", alt: "Facebook" },
    { file: "ig.jpg",  href: "#", alt: "Instagram" },
    { file: "360.jpg", href: "#", alt: "360" },
    { file: "id.jpg",  href: "#", alt: "ID" },
    { file: "wp.jpg",  href: "#", alt: "WhatsApp" },
    { file: "yt.jpg",  href: "#", alt: "YouTube" },
];

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#0d1f3c' }} className="text-white pt-12 pb-6">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-16">

                {/* Top Grid: Quick Links | Useful Links | Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Quick Links — 2 sub-columns */}
                    <div>
                        <h3 className="text-base font-bold mb-5 text-white">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-x-6 gap-y-3">
                            {quickLinksCol1.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className="text-[#8fa8c8] text-sm hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            {quickLinksCol2.map((link) => (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className="text-[#8fa8c8] text-sm hover:text-white transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-base font-bold mb-5 text-white">Useful Links</h3>
                        <ul className="space-y-3">
                            {usefulLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.to}
                                        className="text-[#8fa8c8] text-sm hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-base font-bold mb-5 text-white">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="text-[#8fa8c8] text-sm">brahmavalleycop@gmail.com</li>
                            <li className="text-[#8fa8c8] text-sm">+91 9923072990</li>
                            <li className="text-[#8fa8c8] text-sm">+91 7972999409</li>
                            <li className="text-[#8fa8c8] text-sm">www.brahmavalley.com</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom: Copyright + Follow Us + social icons */}
                <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[#8fa8c8] text-sm">
                        Copyright © 2026 Brahma Valley University. All Rights Reserved.
                    </p>

                    <div className="flex items-center gap-3">
                        <span className="text-[#8fa8c8] text-sm font-medium">Follow Us</span>
                        {socialIcons.map((icon) => (
                            <a key={icon.alt} href={icon.href} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`/social-icons/${icon.file}`}
                                    alt={icon.alt}
                                    className="w-7 h-7 rounded object-cover"
                                />
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;