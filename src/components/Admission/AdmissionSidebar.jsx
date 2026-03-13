import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const AdmissionSidebar = () => {
    const location = useLocation();

    const menuItems = [
        { label: "Admission", link: "https://ph2025.mahacet.org/StaticPages/HomePage", external: true },
        { label: "Programme Details", path: "/admission/programme-details" },
        { label: "Eligibility", path: "/admission/eligibility" },
        { label: "Academics Overview", path: "/admission/academics-overview" },
        { label: "Admission Details", path: "/admission/admission-details" },
        { label: "Fee Structure", path: "/admission/fee-structure" },
        { label: "Information Brochure", path: "/admission/information-brochure" },
        { label: "Rules & Regulations", path: "/admission/rules-regulations" },
        { label: "Admission Form", path: "/admission/admission-form" },
        { label: "Required Documents", path: "/admission/required-documents" },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary">
                Admission
            </h3>
            <ul className="space-y-2">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path || 
                                    (item.path === "/admission" && location.pathname === "/admission");
                    
                    return (
                        <li key={index}>
                            {item.external ? (
                                <button
                                    type="button"
                                    onClick={() => window.open(item.link, "_blank", "noopener")}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-[#0d6efd] text-white"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-[#0d6efd]"
                                    }`}
                                >
                                    <FaChevronRight className={`text-[10px] ${isActive ? "text-white" : "text-gray-400"}`} />
                                    {item.label}
                                </button>
                            ) : (
                                <Link
                                    to={item.path}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${
                                        isActive
                                            ? "bg-[#0d6efd] text-white"
                                            : "text-gray-700 hover:bg-gray-50 hover:text-[#0d6efd]"
                                    }`}
                                >
                                    <FaChevronRight className={`text-[10px] ${isActive ? "text-white" : "text-gray-400"}`} />
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default AdmissionSidebar;
