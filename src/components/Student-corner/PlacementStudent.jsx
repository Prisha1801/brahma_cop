import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { placementStudentHero } from "../common/data/heroData";

const placedStudents = [
    { name: "Srushtri Warungase", company: "Pharmacy", image: "/placed-student/Srushtri Warungase.jpg" },
    { name: "Renuka Ghomkale", company: "Pharmacy", image: "/placed-student/Renuka Ghomkale.jpg" },
    { name: "Vaishnavi Khaire", company: "Pharmacy", image: "/placed-student/Vaishnavi Khaire.jpg" },
    { name: "Abhishek Rajendra Tawate", company: "Abbott Healthcare PVT LTD", image: "/placed-student/Abhishek Rajendra Tawate.jpg" },
    { name: "Supriya Darade", company: "Zyphars Pharmaceutics", image: "/placed-student/Supriya Darade.jpg" },
    { name: "Neha vijay Godse", company: "Piramal Pharma LTD", image: "/placed-student/Neha vijay Godse.jpg" },
    { name: "Shubham Arote", company: "Intas Pharmaceutical LTD", image: "/placed-student/Shubham Arote.jpg" },
    { name: "Namarata Suresh Rever", company: "Neritic industries Pvt Ltd", image: "/placed-student/Namarata Suresh Rever.jpg" },
    { name: "Asutosh Nanjan", company: "Indoco Remedies", image: "/placed-student/Asutosh Nanjan.jpg" },
    { name: "Swaranjali Yugaraj Sandanshiv", company: "Glenmark Pvt Ltd", image: "/placed-student/Swaranjali Yugaraj Sandanshiv.jpg" },
    { name: "Chetan Anand Ghule", company: "WNS GLOBAL LTD", image: "/placed-student/Chetan Anand Ghule.jpg" },
    { name: "Nikhil Shivaji Mali", company: "Glenmark Pvt. Ltd", image: "/placed-student/Nikhil Shivaji Mali.jpg" },
    { name: "Soeiab Pinjari", company: "Flipgap India", image: "/placed-student/Soeiab Pinjari.jpg" },
    { name: "Suarbh anil patil", company: "Sanshiv health tech pvt ltd", image: "/placed-student/Suarbh anil patil.jpg" },
    { name: "Prathmesh Kantilal Bhalke", company: "Meyer Organic LTD", image: "/placed-student/Prathmesh Kantilal Bhalke.jpg" },
    { name: "Raj Narendra Deshmukh", company: "ALKEM LAB LTD", image: "/placed-student/Raj Narendra Deshmukh.jpg" },
    { name: "Kartik Manish Shah", company: "Inventia Healthcare LTD", image: "/placed-student/Kartik Manish Shah.jpg" },
    { name: "Snehal Kadlag", company: "Smiths Detection Pune", image: "/placed-student/Snehal Kadlag.jpg" },
    { name: "Sachin K.Salunhe", company: "Indoco Remedies", image: "/placed-student/Sachin K.Salunhe.jpg" },
    { name: "Akash Yogesh Borse", company: "Macleods Phramaceutical PVT", image: "/placed-student/Akash Yogesh Borse.jpg" },
    { name: "Girish Garud", company: "Maxheal Pharamaceutical", image: "/placed-student/Girish Garud.jpg" },
    { name: "Sakshi Manoj Khairnar", company: "Credence Resource Mangement", image: "/placed-student/Sakshi Manoj Khairnar.jpg" },
    { name: "Umesh Satish Kokate", company: "Credence Resource Mangement", image: "/placed-student/Umesh Satish Kokate.jpg" },
];

const PlacementStudent = () => {
    return (
        <StudentCornerLayout heroData={placementStudentHero}>
            <div className="p-6 md:p-8">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Placed Students</h2>
                    <p className="text-gray-600">Our successful graduates placed in reputed companies</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {placedStudents.map((student, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                            <div className="aspect-square overflow-hidden bg-gray-100">
                                <img
                                    src={student.image}
                                    alt={student.name}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 text-sm mb-1 line-clamp-2">{student.name}</h3>
                                <p className="text-blue-600 text-xs font-medium">{student.company}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </StudentCornerLayout>
    );
};

export default PlacementStudent;