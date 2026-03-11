import React from 'react';

const InfoBar = () => {
    return (
        <div className="w-full bg-[#4B8E3F] text-white py-6">
            <div className="container mx-auto px-4 text-center">

                {/* Line 1: Mandal name */}
                <p className="text-sm md:text-base font-medium tracking-widest uppercase mb-1">
                    Nashik Gramin Shikshan Prasarak Mandal's
                </p>

                {/* Line 2: College name — large white bold */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide uppercase mb-3">
                    College of Pharmacy
                </h1>

                {/* Lines 3-6: Approval info */}
                <div className="text-sm md:text-base space-y-1 leading-relaxed">
                    <p>
                        Approved by <strong>Pharmacy Council Of India</strong>, New Delhi
                    </p>
                    <p>
                        Affiliated to <strong>Savitribai Phule Pune University</strong>
                    </p>
                    <p>
                        Approved by <strong>AICTE</strong>, New Delhi &amp; <strong>DTE</strong>, Govt. of Maharashtra
                    </p>
                    <p>
                        Recognized by <strong>MSBTE</strong>, Mumbai
                    </p>
                </div>

            </div>
        </div>
    );
};

export default InfoBar;