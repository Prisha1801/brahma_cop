import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { startupHero } from '../common/data/heroData';
import TableTemplate from './TableTemplate';
import { startupData } from './data';

const Startup = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            <HeroSection {...startupHero} />
            <TableTemplate title="NAAC CYCLE-I SUPPORTED DOCUMENTS" data={startupData} />
        </div>
    );
};

export default Startup;
