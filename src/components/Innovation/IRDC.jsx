import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { irdcHero } from '../common/data/heroData';
import TableTemplate from './TableTemplate';
import { irdcData } from './data';

const IRDC = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            <HeroSection {...irdcHero} />
            <TableTemplate title="NAAC CYCLE-I SUPPORTED DOCUMENTS" data={irdcData} />
        </div>
    );
};

export default IRDC;
