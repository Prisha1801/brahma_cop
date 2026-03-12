/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import HeroSection from '../common/components/HeroSection';
import { naacDocumentHero } from '../common/data/heroData';
import { naacTableData, naacDocuments } from './naacData';

const COLUMNS = [
  { key: 'extended', label: 'Extended Profile' },
  { key: 'c1',       label: 'Criteria 1',       linkKey: 'c1_link' },
  { key: 'c2',       label: 'Criteria 2',       linkKey: 'c2_link' },
  { key: 'c3',       label: 'Criteria 3',       linkKey: 'c3_link' },
  { key: 'c4',       label: 'Criteria 4',       linkKey: 'c4_link' },
  { key: 'c5',       label: 'Criteria 5',       linkKey: 'c5_link' },
  { key: 'c6',       label: 'Criteria 6',       linkKey: 'c6_link' },
  { key: 'c7',       label: 'Criteria 7',       linkKey: 'c7_link' },
];

const NAACTable = () => (
  <div className="max-w-[1200px] mx-auto px-4 py-12">
    <h2 className="text-center text-gray-700 font-semibold text-base mb-8 tracking-wide uppercase">
      NAAC CYCLE-I SUPPORTED DOCUMENTS
    </h2>

    <div className="overflow-x-auto rounded-sm border border-gray-200">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {COLUMNS.map((col) => (
              <th
                key={col.key}
                className="bg-[#1a6fd4] text-white font-semibold text-sm px-4 py-3 text-center border border-blue-400"
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {naacTableData.map((row, rowIdx) => (
            <tr key={rowIdx} className="border-b border-gray-200">
              {COLUMNS.map((col) => {
                const value = row[col.key] || '';
                const linkHref = col.linkKey ? row[col.linkKey] : null;

                return (
                  <td
                    key={col.key}
                    className="px-4 py-3 text-center text-sm border border-gray-200 bg-white"
                  >
                    {value && linkHref ? (
                      <Link
                        to={linkHref}
                        className="text-[#1a6fd4] hover:underline font-medium"
                      >
                        {value}
                      </Link>
                    ) : value && col.key === 'extended' ? (
                      <Link
                        to={`/naac-document/${value}`}
                        className="text-[#1a6fd4] hover:underline font-medium"
                      >
                        {value}
                      </Link>
                    ) : (
                      <span className="text-gray-300">{value}</span>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const DocumentsList = ({ criteria }) => {
  const docs = naacDocuments[criteria] || [];
  return (
    <div className="max-w-[800px] mx-auto px-4 py-12">
      <Link to="/naac-document" className="text-[#1a6fd4] hover:underline mb-4 inline-block">
        ← Back to all criteria
      </Link>
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Documents for {criteria}
      </h2>
      {docs.length > 0 ? (
        <ul className="list-disc ml-6 space-y-2 text-[#1a6fd4]">
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
        <NAACTable />
      )}
    </div>
  );
};

export default NAACDocument;