import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { hostelHero } from '../common/data/heroData';

const Hostel = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <HeroSection {...hostelHero} />

            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
                <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-5/12 h-[300px] md:h-auto">
                        <img
                            src="/facilities/hostel.png"
                            alt="Hostel"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Content Section */}
                    <div className="md:w-7/12 p-8 md:p-12">
                        <h2 className="text-3xl font-bold text-[#0d6efd] mb-4">Hostel Facilities</h2>
                        <p className="text-gray-600 font-medium mb-4">Comfortable | Secure | Student-Centric Accommodation</p>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            At Brahma Valley College of Pharmacy, we provide a safe and comfortable hostel environment that allows students to focus on academics while enjoying a healthy, community-based lifestyle.
                        </p>

                        <ul className="space-y-3 text-gray-700">
                            <li><strong>Separate Hostels:</strong> For boys and girls, within or near campus.</li>
                            <li><strong>Spacious Rooms:</strong> 2/3-sharing with beds, study tables, and storage.</li>
                            <li><strong>24/7 Security:</strong> CCTV surveillance and night wardens for safety.</li>
                            <li><strong>Essential Facilities:</strong> RO water, hot water, laundry, Wi-Fi, medical help.</li>
                            <li><strong>Mess Facility:</strong> 3 hygienic vegetarian meals served daily.</li>
                            <li><strong>Cleanliness:</strong> Regular maintenance and cleaning by staff.</li>
                            <li><strong>Hostel Fees:</strong> ₹50,000 – ₹60,000 per year (incl. mess).</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hostel;
