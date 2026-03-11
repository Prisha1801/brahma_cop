import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { iiqaHero } from '../common/data/heroData';

const IIQA = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <HeroSection {...iiqaHero} />
    
        </div>
    );
};

export default IIQA;
