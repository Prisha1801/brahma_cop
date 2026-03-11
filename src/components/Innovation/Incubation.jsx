import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { incubationHero } from '../common/data/heroData';
import TableTemplate from './TableTemplate';
import { incubationData } from './data';

const Incubation = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            <HeroSection {...incubationHero} />
            <TableTemplate title="NAAC CYCLE-I SUPPORTED DOCUMENTS" data={incubationData} />
        </div>
    );
};

export default Incubation;
