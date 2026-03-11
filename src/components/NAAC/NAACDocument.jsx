/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeroSection from '../common/components/HeroSection';
import { naacDocumentHero } from '../common/data/heroData';
import TableTemplate from '../Innovation/TableTemplate';
import { naacTableData, naacDocuments } from './naacData';

const DocumentsList = ({ criteria }) => {
    const docs = naacDocuments[criteria] || [];
    return (
        <div className="max-w-[800px] mx-auto px-4 py-12">
            <Link to="/naac-document" className="text-[#0d6efd] hover:underline mb-4 inline-block">
                ← Back to all criteria
            </Link>
            <h2 className="text-xl font-bold text-gray-800 mb-6">
                Documents for {criteria}
            </h2>
            {docs.length > 0 ? (
                <ul className="list-disc ml-6 space-y-2 text-[#0d6efd]">
                    {docs.map((doc, idx) => (
                        <li key={doc.link || idx}>
                            <a
                                href={doc.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                {doc.label}
                            </a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No documents available for this criteria.</p>
            )}
        </div>
    );
};

const NAACDocument = () => {
    const { criteria } = useParams();

    return (
        <div className="bg-gray-50 min-h-screen pb-16">
            <HeroSection {...naacDocumentHero} />

            {criteria ? (
                <DocumentsList criteria={criteria} />
            ) : (
                <TableTemplate
                    title="NAAC CYCLE-I SUPPORTED DOCUMENTS"
                    data={naacTableData}
                />
            )}
        </div>
    );
};

export default NAACDocument;
