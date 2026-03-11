import React from "react";
import HeroSection from "../common/components/HeroSection";
import { requiredDocumentsHero } from "../common/data/heroData";
import AdmissionSidebar from "./AdmissionSidebar";

const documents = [
    { sr: 1, doc: "Copy of the transfer order of Parent", remarks: "If applicable" },
    { sr: 2, doc: "Income Certificate issued by Tahasildar", remarks: "If applicable" },
    { sr: 3, doc: "Undertaking regarding attendance", remarks: "On a stamp paper of Rs. 100/-" },
    { sr: 4, doc: "Undertaking regarding fees payment", remarks: "On a stamp paper of Rs. 100/-" },
    { sr: 5, doc: "Undertaking regarding ragging", remarks: "On a stamp paper of Rs. 100/-" },
    { sr: 6, doc: "Migrant certificate (For J&K quota admission)", remarks: "Proforma (J), (K), (L)" },
    { sr: 7, doc: "Physically handicapped certificate", remarks: "If applicable" },
    { sr: 8, doc: "Ex-servicemen certificate (Def-1/2/3)", remarks: "If applicable" },
    { sr: 9, doc: "Domicile certificate", remarks: "All candidates" },
    { sr: 10, doc: "Nationality certificate", remarks: "All candidates" },
    { sr: 11, doc: "Educational GAP affidavit", remarks: "If passed Std XII/Diploma before current year" },
    { sr: 12, doc: "Migration Certificate", remarks: "If passed Std XII other than Maharashtra State Board" },
    { sr: 13, doc: "Non Creamy layer (Issued after 1st April of current year)", remarks: "For V.J./N.T.-1/N.T.-2/N.T.-3/O.B.C./S.B.C. Categories" },
    { sr: 14, doc: "Caste Validity Certificate", remarks: "For S.C./S.T./V.J./N.T.-1/N.T.-2/N.T.-3/O.B.C./S.B.C. categories" },
    { sr: 15, doc: "Caste Certificate", remarks: "For S.C./S.T./V.J./N.T.-1/N.T.-2/N.T.-3/O.B.C./S.B.C. categories" },
    { sr: 16, doc: "Admission seat allotment letter from competent authority", remarks: "All candidates" },
    { sr: 17, doc: "MT-CET score card / NEET", remarks: "All candidates" },
    { sr: 18, doc: "School leaving certificate after passing H.S.C. (Std. XII) / Diploma", remarks: "All candidates" },
    { sr: 19, doc: "H.S.C. (STD. XII) mark sheet", remarks: "All candidates" },
    { sr: 20, doc: "S.S.C (Std. X) mark-sheet", remarks: "All candidates" },
];

const RequiredDocuments = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...requiredDocumentsHero} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-8">

                            <div className="px-6 pt-6 md:px-8 md:pt-8 pb-4">
                                <h2 className="text-sm font-medium text-gray-800 mb-4 pb-4 border-b border-gray-200">
                                    List of Documents Required at the Time of Admission
                                </h2>
                                <p className="font-bold text-gray-900 text-sm mb-4">
                                    Submission of original documents along with two attested photocopies of the followings:
                                </p>
                            </div>

                            <div className="overflow-x-auto px-4 md:px-8 pb-8">
                                <table className="w-full text-left border-collapse text-sm">
                                    <thead>
                                        <tr className="bg-[#0d6efd] text-white">
                                            <th className="py-4 px-6 font-semibold border border-blue-400 w-16">Sr. No.</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Documents</th>
                                            <th className="py-4 px-6 font-semibold border border-blue-400">Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        {documents.map((row, i) => (
                                            <tr
                                                key={row.sr}
                                                className={`hover:bg-gray-50 transition-colors ${i % 2 === 1 ? 'bg-gray-50' : ''}`}
                                            >
                                                <td className="py-3 px-6 border border-gray-200">{row.sr}</td>
                                                <td className="py-3 px-6 border border-gray-200">{row.doc}</td>
                                                <td className="py-3 px-6 border border-gray-200">{row.remarks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <AdmissionSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequiredDocuments;