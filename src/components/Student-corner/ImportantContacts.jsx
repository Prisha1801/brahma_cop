import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { importantContactsHero } from "../common/data/heroData";

const boysRooms = [
    { sr: 1, room: "B-103", capacity: 4, occupied: 2, vacant: 2 },
    { sr: 2, room: "B-102", capacity: 4, occupied: 0, vacant: 0 },
    { sr: 3, room: "B-101", capacity: 4, occupied: 3, vacant: 1 },
];

const girlsRooms = [
    { sr: 1, room: "G-203", capacity: 3, occupied: 1, vacant: 2 },
    { sr: 2, room: "G-202", capacity: 3, occupied: 2, vacant: 1 },
    { sr: 3, room: "G-201", capacity: 3, occupied: 3, vacant: 0 },
];

const HostelTable = ({ title, rows }) => (
    <div className="mb-6">
        <p className="text-gray-800 text-sm font-medium mb-2">{title}</p>
        <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
                <thead>
                    <tr style={{ backgroundColor: '#1a8cff' }}>
                        {["Sr. No.", "Room No.", "Capacity", "Occupied", "Vacant"].map((h) => (
                            <th key={h} className="py-3 px-4 text-white font-semibold text-left border border-blue-400">
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="text-gray-700 bg-white">
                    {rows.map((row, i) => (
                        <tr key={i} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="py-3 px-4 border border-gray-200">{row.sr}</td>
                            <td className="py-3 px-4 border border-gray-200">{row.room}</td>
                            <td className="py-3 px-4 border border-gray-200">{row.capacity}</td>
                            <td className="py-3 px-4 border border-gray-200">{row.occupied}</td>
                            <td className="py-3 px-4 border border-gray-200">{row.vacant}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

const ImportantContacts = () => {
    return (
        <StudentCornerLayout heroData={importantContactsHero}>
            <div className="p-6 md:p-8">
                <HostelTable title="Boys Hostel" rows={boysRooms} />
                <HostelTable title="Girls Hostel" rows={girlsRooms} />
            </div>
        </StudentCornerLayout>
    );
};

export default ImportantContacts;