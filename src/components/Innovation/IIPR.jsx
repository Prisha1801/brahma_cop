import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { iiprHero } from '../common/data/heroData';
import TableTemplate from './TableTemplate';
import { iiprData } from './data';

const IIPR = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            <HeroSection {...iiprHero} />
            <TableTemplate title="NAAC CYCLE-I SUPPORTED DOCUMENTS" data={iiprData} />
        </div>
    );
};

export default IIPR;
