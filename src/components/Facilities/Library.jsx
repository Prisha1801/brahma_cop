import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { libraryHero } from '../common/data/heroData';

const Library = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <HeroSection {...libraryHero} />
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-5/12 h-[300px] md:h-auto">
                        <img 
                            src="/facilities/Library.webp" 
                            alt="Library" 
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content Section */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-[#0d6efd] mb-4">Library Facilities</h2>
                        <p className="text-gray-600 font-medium mb-4">Empowering Academic & Personal Excellence</p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            At BVCOP, we strive to provide a nurturing and resource-rich environment that enhances both academic and personal growth. Our facilities are designed to meet the modern standards of pharmacy education.
                        </p>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Library & Digital Learning</h3>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                            <li>2000+ books, journals, and periodicals</li>
                            <li>Access to e-journals and digital resources</li>
                            <li>Online databases and pharma content</li>
                            <li>Comfortable reading space for study</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;
