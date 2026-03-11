import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { objectiveFunctionHero } from '../common/data/heroData';
import TableTemplate from './TableTemplate';
import { objectiveFunctionData } from './data';

const ObjectiveFunction = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            <HeroSection {...objectiveFunctionHero} />
            <TableTemplate title="IQAC OBJECTIVE & FUNCTION DOCUMENTS" data={objectiveFunctionData} />
        </div>
    );
};

export default ObjectiveFunction;