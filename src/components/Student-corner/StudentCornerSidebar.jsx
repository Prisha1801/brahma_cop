import { Link, useLocation } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const StudentCornerSidebar = () => {
    const location = useLocation();

    const menuItems = [
        { label: "Curricular", path: "/curricular" },
        { label: "Course Structure", path: "/course-structure" },
        { label: "Examination", path: "/examination" },
        { label: "Hostel Overview", path: "/hostel-overview" },
        { label: "Hostel Documentation", path: "/hostel-documentation" },
        { label: "Rules & Regulation", path: "/rules-regulation" },
        { label: "Important Contacts", path: "/important-contacts" },
        { label: "Code Of Conduct", path: "/code-of-conduct" },
        { label: "Placement Student", path: "/placement-student" },
        { label: "BV Club", path: "/bv-club" },
        { label: "Scholarship Section", path: "/scholarship-section" },
        { label: "Student Council Committee", path: "/student-council-committee" },
    ];

    return (
        <div className="bg-white rounded-lg shadow-md border border-gray-100 p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b-2 border-primary">
                Students Corner
            </h3>
            <ul className="space-y-2">
                {menuItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    
                    return (
                        <li key={index}>
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
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default StudentCornerSidebar;
