import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { cafeteriaHero } from '../common/data/heroData';

const Cafeteria = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <HeroSection {...cafeteriaHero} />
            
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-5/12 h-[300px] md:h-auto">
                        <img 
                            src="/facilities/Cafeteria.png" 
                            alt="Cafeteria" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content Section */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-[#0d6efd] mb-4">Cafeteria</h2>
                        <p className="text-gray-600 font-medium mb-4">Hygienic | Nutritious | Student-Friendly</p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            At Brahma Valley College of Pharmacy, we understand the importance of providing healthy and hygienic food to support students' academic and practical activities. Our on-campus cafeteria is a welcoming space for students and staff to relax, eat, and interact.
                        </p>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 mb-8 text-gray-700">
                            <div>
                                <p className="mb-2"><strong>Clean & Hygienic:</strong> Maintained with high standards.</p>
                                <p className="mb-2"><strong>Nutritious & Tasty:</strong> Daily veg meals, snacks & beverages.</p>
                                <p><strong>Affordable:</strong> Priced to suit student budgets.</p>
                            </div>
                            <div>
                                <p className="mb-2"><strong>Spacious Seating:</strong> Relaxed dining during breaks.</p>
                                <p className="mb-2"><strong>Filtered Water:</strong> Purified water available on-site.</p>
                                <p><strong>Quick Service:</strong> Fast, efficient during peak hours.</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Timing</h3>
                        <ul className="text-gray-700 space-y-2">
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2 mt-1 -rotate-45 block transform">♦</span>
                                <span><strong>Open:</strong> 8:30 AM to 5:00 PM (Monday to Saturday)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-500 mr-2 mt-1 -rotate-45 block transform">♦</span>
                                <span><strong>Break Hours:</strong> Aligned with class and lab schedules</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cafeteria;
