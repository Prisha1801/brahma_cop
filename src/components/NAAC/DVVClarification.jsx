import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { dvvClarificationHero } from '../common/data/heroData';

const DVVClarification = () => {
    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <HeroSection {...dvvClarificationHero} />
            
        </div>
    );
};

export default DVVClarification;
