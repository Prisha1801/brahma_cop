import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { transportHero } from '../common/data/heroData';

const Transport = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <HeroSection {...transportHero} />
            
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-5/12 h-[300px] md:h-auto">
                        <img 
                            src="/facilities/Transport.webp" 
                            alt="Transport Buses" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content Section */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-[#0d6efd] mb-4">Transport Facility</h2>
                        <p className="text-gray-600 font-medium mb-4">Safe, Convenient & Student-Friendly Commute</p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Brahma Valley College of Pharmacy, we understand the importance of reliable and comfortable transportation for our students and staff. To ensure timely and safe travel, the institute provides a well-organized transport facility covering major areas of Nashik city and surrounding regions.
                        </p>
                        
                        <div className="space-y-3 text-gray-700">
                            <p><strong>Well-Maintained Buses:</strong> Regularly serviced for safety & comfort.</p>
                            <p><strong>Wide Route Coverage:</strong> Nashik, Trimbak Road, Panchavati & nearby villages.</p>
                            <p><strong>Affordable Charges:</strong> Pay annually or semester-wise with reasonable fees.</p>
                            <p><strong>Experienced Drivers & Staff:</strong> Ensuring punctuality & safety.</p>
                            <p><strong>Fixed Timings & Backup Support:</strong> Emergency support always available.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transport;
