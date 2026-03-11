import React from 'react';

const TableTemplate = ({ title, data }) => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-xl font-bold text-gray-800 mb-6 text-center uppercase tracking-wide">
                {title || "NAAC CYCLE-I SUPPORTED DOCUMENTS"}
            </h2>
            <div className="overflow-x-auto shadow-sm rounded-lg border border-gray-200">
                <table className="w-full text-center border-collapse text-sm">
                    <thead>
                        <tr className="bg-[#1877f2] text-white">
                            <th className="py-3 px-4 font-semibold border border-blue-400 whitespace-nowrap">Extended Criteria</th>
                            <th className="py-3 px-4 font-semibold border border-blue-400 whitespace-nowrap">Criteria 1</th>
                            <th className="py-3 px-4 font-semibold border border-blue-400 whitespace-nowrap">Criteria 2</th>
                            <th className="py-3 px-4 font-semibold border border-blue-400 whitespace-nowrap">Criteria 3</th>
                            <th className="py-3 px-4 font-semibold border border-blue-400 whitespace-nowrap">Criteria 4</th>
                            <th className="py-3 px-4 font-semibold border border-blue-400 whitespace-nowrap">Criteria 5</th>
                            <th className="py-3 px-4 font-semibold border border-blue-400 whitespace-nowrap">Criteria 6</th>
                            <th className="py-3 px-4 font-semibold border border-blue-400 whitespace-nowrap">Criteria 7</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data && data.length > 0 ? (
                            data.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                                    <td className="py-3 px-4 border border-gray-200">
                                        {row.extended}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200">
                                        {row.c1 && <a href={row.c1_link || '#'} className="text-[#0d6efd] hover:underline" target="_blank" rel="noopener noreferrer">{row.c1}</a>}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200">
                                        {row.c2 && <a href={row.c2_link || '#'} className="text-[#0d6efd] hover:underline" target="_blank" rel="noopener noreferrer">{row.c2}</a>}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200">
                                        {row.c3 && <a href={row.c3_link || '#'} className="text-[#0d6efd] hover:underline" target="_blank" rel="noopener noreferrer">{row.c3}</a>}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200">
                                        {row.c4 && <a href={row.c4_link || '#'} className="text-[#0d6efd] hover:underline" target="_blank" rel="noopener noreferrer">{row.c4}</a>}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200">
                                        {row.c5 && <a href={row.c5_link || '#'} className="text-[#0d6efd] hover:underline" target="_blank" rel="noopener noreferrer">{row.c5}</a>}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200">
                                        {row.c6 && <a href={row.c6_link || '#'} className="text-[#0d6efd] hover:underline" target="_blank" rel="noopener noreferrer">{row.c6}</a>}
                                    </td>
                                    <td className="py-3 px-4 border border-gray-200">
                                        {row.c7 && <a href={row.c7_link || '#'} className="text-[#0d6efd] hover:underline" target="_blank" rel="noopener noreferrer">{row.c7}</a>}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="py-6 text-center text-gray-500 border border-gray-200">
                                    No documents available at the moment.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TableTemplate;
