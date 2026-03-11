import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { sportsHero } from '../common/data/heroData';

const Sport = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <HeroSection {...sportsHero} />
            
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-5/12 h-[300px] md:h-auto">
                        <img 
                            src="/facilities/Sports.jpg" 
                            alt="Sports Facilities" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content Section */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-[#0d6efd] mb-4">Sports Facilities</h2>
                        <p className="text-gray-600 font-medium mb-4">Active Body, Active Mind | Comprehensive Sports Infrastructure</p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Brahma Valley College of Pharmacy, we believe in holistic development. Our sports facilities provide students with ample opportunities to engage in physical activities, fostering teamwork, discipline, and a healthy lifestyle alongside their academic pursuits.
                        </p>
                        
                        <div className="space-y-3 text-gray-700">
                            <p><strong>Indoor & Outdoor Sports:</strong> Facilities for a wide range of athletic interests.</p>
                            <p><strong>Dedicated Playgrounds:</strong> Well-maintained courts and grounds for cricket, volleyball, football, and more.</p>
                            <p><strong>Quality Equipment:</strong> High-quality sports gear provided for student use.</p>
                            <p><strong>Annual Tournaments:</strong> Regular sports competitions and athletic events to showcase talent.</p>
                            <p><strong>Recreational Space:</strong> Spaces for students to unwind and refresh after academic sessions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sport;
