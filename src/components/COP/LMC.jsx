/* eslint-disable react/prop-types */
import React from 'react';
import HeroSection from '../common/components/HeroSection';
import { lmcHero } from '../common/data/heroData';

const lmcData = [
  { srNo: 1, name: "Mr. Rajaram Pangavhane (Patil)",    designation: "Founder President"  },
  { srNo: 2, name: "Dr.Dhanisha G. Pangavhane (Patil)", designation: "Vice President"      },
  { srNo: 3, name: "Mr. Gaurav R. Pangavhane",          designation: "General Secretary"   },
];

const LMC = () => {
  return (
    <div className="bg-white min-h-screen pb-16">
      <HeroSection {...lmcHero} />
      {/* Title */}
      <div className="text-center pt-12 pb-6">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
          Local Managing Committee
        </h1>
        <p className="text-gray-500 italic text-base">Committee</p>
      </div>

      {/* Table */}
      <div className="max-w-[900px] mx-auto px-4 mt-6">
        <div className="overflow-hidden rounded-sm border border-gray-200">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="bg-[#2196f3] text-white font-semibold text-sm px-6 py-4 text-center w-28 border-r border-blue-400">
                  Sr No.
                </th>
                <th className="bg-[#2196f3] text-white font-semibold text-sm px-6 py-4 text-center border-r border-blue-400">
                  Name
                </th>
                <th className="bg-[#2196f3] text-white font-semibold text-sm px-6 py-4 text-center">
                  Designation
                </th>
              </tr>
            </thead>
            <tbody>
              {lmcData.map((row, idx) => (
                <tr
                  key={row.srNo}
                  className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="px-6 py-4 text-center text-sm text-gray-700 border-t border-r border-gray-200">
                    {row.srNo}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-700 border-t border-r border-gray-200">
                    {row.name}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-700 border-t border-gray-200">
                    {row.designation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LMC;