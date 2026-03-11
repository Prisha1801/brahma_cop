import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { ecoSystemHero } from '../common/data/heroData';
import TableTemplate from './TableTemplate';
import { ecoSystemData } from './data';

const EcoSystem = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            <HeroSection {...ecoSystemHero} />
            <TableTemplate title="NAAC CYCLE-I SUPPORTED DOCUMENTS" data={ecoSystemData} />
        </div>
    );
};

export default EcoSystem;
