import React from 'react';
import { Link } from 'react-router-dom';
import whatsapp from "/social-icons/wp.jpg";
import three from "/social-icons/360.jpg";
import fb from "/social-icons/fb.jpg";
import insta from "/social-icons/ig.jpg";
import linkedin from "/social-icons/id.jpg";
import youtube from "/social-icons/yt.jpg";

const socialIcons = [
    { src: fb, alt: "Facebook", href: "#" },
    { src: insta, alt: "Instagram", href: "#" },
    { src: three, alt: "360", href: "#" },
    { src: linkedin, alt: "LinkedIn", href: "#" },
    { src: whatsapp, alt: "WhatsApp", href: "#" },
    { src: youtube, alt: "YouTube", href: "#" },
];

const TopBar = () => {
    return (
        <div className="w-full bg-white border-b border-gray-200 text-[13px]">

            {/* ── Desktop ── */}
            <div className="hidden md:flex container mx-auto px-4 lg:px-8 py-2 justify-between items-center">

                {/* Left: Nav Links */}
                <ul className="flex items-center gap-6 list-none m-0 p-0">
                    <li>
                        <Link to="/pdf/brocher.pdf" target="_blank"
                            className="text-gray-700 hover:text-green-700 font-medium transition-colors">
                            Download E-Brochures
                        </Link>
                    </li>
                    <li>
                        <Link to="/alumni"
                            className="text-gray-700 hover:text-green-700 font-medium transition-colors">
                            Alumni
                        </Link>
                    </li>
                    <li>
                        <Link to="/faculties"
                            className="text-gray-700 hover:text-green-700 font-medium transition-colors">
                            Faculties
                        </Link>
                    </li>
                </ul>

                {/* Center: DTE & Choice Code */}
                <div className="flex items-center gap-6 font-bold text-sm md:text-base text-red-600">
                    <span>DTE Code: 5202</span>
                    <span>Choice Code: 520282310</span>
                </div>

                {/* Right: Get Connected + Social Icons */}
                <ul className="flex items-center gap-2 list-none m-0 p-0">
                    <li>
                        <span className="font-bold text-gray-700 text-[13px] mr-1">
                            Get Connected
                        </span>
                    </li>
                    {socialIcons.map((item, idx) => (
                        <li key={idx}>
                            <a href={item.href} target="_blank" rel="noopener noreferrer"
                                className="block w-5 h-5 rounded overflow-hidden hover:scale-125 transition-transform">
                                <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* ── Mobile ── */}
            <div className="flex md:hidden items-center justify-between px-3 py-1.5 gap-2">
                {/* Left: links stacked */}
                <div className="flex flex-col gap-0.5 text-[11px] font-medium leading-tight text-gray-700">
                    <Link to="/pdf/brocher.pdf" target="_blank"
                        className="hover:text-green-700 transition-colors whitespace-nowrap">
                        Download E-Brochures
                    </Link>
                    <Link to="/alumni"
                        className="hover:text-green-700 transition-colors">
                        Alumni
                    </Link>
                    <Link to="/faculties"
                        className="hover:text-green-700 transition-colors">
                        Faculties
                    </Link>
                </div>

                {/* Right: Get Connected + icons */}
                <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="font-bold text-gray-700 text-[10px] uppercase tracking-wide whitespace-nowrap">
                        Get Connected
                    </span>
                    {socialIcons.slice(0, 3).map((item, idx) => (
                        <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer"
                            className="block w-5 h-5 rounded overflow-hidden flex-shrink-0">
                            <img src={item.src} alt={item.alt} className="w-full h-full object-cover" />
                        </a>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default TopBar;