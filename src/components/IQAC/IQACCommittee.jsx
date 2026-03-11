import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { iqacCommitteeHero } from '../common/data/heroData';
import TableTemplate from './TableTemplate';
import { iqacCommitteeData } from './data';

const IQACCommittee = () => {
    return (
        <div className="bg-white min-h-screen pb-16">
            <HeroSection {...iqacCommitteeHero} />
            <TableTemplate title="IQAC COMMITTEE DOCUMENTS" data={iqacCommitteeData} />
        </div>
    );
};

export default IQACCommittee;