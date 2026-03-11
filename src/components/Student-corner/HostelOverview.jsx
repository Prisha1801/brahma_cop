import React from "react";
import StudentCornerLayout from "./StudentCornerLayout";
import { hostelOverviewHero } from "../common/data/heroData";

const HostelOverview = () => {
    return (
        <StudentCornerLayout heroData={hostelOverviewHero}>
            <div className="p-6 md:p-8">
                <p className="text-gray-700 text-sm leading-8 text-justify">
                    The Bramha Valley Foundation campus on the Nashik Trimbak Road is rapidly emerging as one of the most sought educational campus in the Maharshtra. In view of this the Institute has large number of students coming from various parts of the country. The hostel facilities at the campus are built tastefully to satisfy the personal aspiration of the residents. The hostel is an optional facility offered by Bramha Valley Foundation . Shared rooms in boys' and girls' blocks are available to the students. All the rooms in the Hostel have internet connectivity. Dedicated mess facilities and basic medical and entertainment facilities are also available. Only academic and co-curricular activities are permitted in the Hostel. The entire Hostel and mess facilities are under the general supervision of the Admin Office. A brief description of all the facilities and corresponding hostel rules &amp; regulations are given in the following sections.
                </p>
            </div>
        </StudentCornerLayout>
    );
};

export default HostelOverview;