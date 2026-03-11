import React from "react";
import HeroSection from "../common/components/HeroSection";
import { rulesRegulationsHero } from "../common/data/heroData";
import AdmissionSidebar from "./AdmissionSidebar";

const Section = ({ number, title, children }) => (
    <div className="mb-8">
        <p className="font-semibold text-gray-900 mb-3">{number}. {title}</p>
        <div className="pl-4">{children}</div>
    </div>
);

const SubSection = ({ label, children }) => (
    <div className="mb-4">
        <p className="font-medium text-gray-800 mb-2">{label}</p>
        <div className="pl-4">{children}</div>
    </div>
);

const BulletList = ({ items }) => (
    <ul className="list-disc pl-6 space-y-1 mb-3">
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </ul>
);

const NumberedList = ({ items }) => (
    <ol className="list-decimal pl-6 space-y-1 mb-3">
        {items.map((item, i) => <li key={i}>{item}</li>)}
    </ol>
);

const RulesRegulation = () => {
    return (
        <div className="bg-gray-50 min-h-screen">
            <HeroSection {...rulesRegulationsHero} />

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    {/* Main Content */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-gray-700 text-sm md:text-base leading-relaxed">

                            {/* 1. Course Duration */}
                            <Section number="1" title="Course Duration:">
                                <p>B. Pharm (Bachelor of Pharmacy) – 4 years (8 semesters) full-time undergraduate course.</p>
                            </Section>

                            {/* 2. Eligibility */}
                            <Section number="2" title="Eligibility Criteria:">
                                <SubSection label="A. First Year B. Pharm Admission:">
                                    <SubSection label="1. Educational Qualification:">
                                        <p className="mb-1">Passed HSC (12th Science) examination with subjects:</p>
                                        <p className="mb-2">Physics and Chemistry (compulsory) and any one of Mathematics / Biology</p>
                                        <p className="mb-1">Must have obtained a minimum:</p>
                                        <BulletList items={[
                                            "45% marks (Open category)",
                                            "40% marks (Reserved category – SC/ST/OBC/NT/SBC)",
                                        ]} />
                                    </SubSection>
                                    <SubSection label="2. Entrance Examination:">
                                        <p>Must have appeared for MHT-CET (PCB/PCM group) conducted by the State CET Cell, Maharashtra.</p>
                                    </SubSection>
                                </SubSection>

                                <SubSection label="B. Direct Second Year (Lateral Entry):">
                                    <SubSection label="1. Educational Qualification:">
                                        <p className="mb-2">Passed Diploma in Pharmacy from PCI approved institution with minimum 45% marks (Open) / 40% (Reserved).</p>
                                        <p>Admission through Centralized Admission Process (CAP) by CET Cell.</p>
                                    </SubSection>
                                </SubSection>
                            </Section>

                            {/* 3. Admission Procedure */}
                            <Section number="3" title="Admission Procedure:">
                                <SubSection label="1. Centralized Admission Process (CAP): Conducted by State Common Entrance Test Cell, Government of Maharashtra.">
                                    <p className="mb-2">Steps:</p>
                                    <BulletList items={[
                                        "Online Registration on CET Cell website",
                                        "Upload Documents",
                                        "Choice Filling",
                                        "Seat Allotment",
                                        "Reporting to the Allotted Institute",
                                    ]} />
                                </SubSection>
                                <SubSection label="2. Institute Level Quota (ILQ – 20% seats):">
                                    <BulletList items={[
                                        "Students can apply directly to the college under institute quota.",
                                        "Must be MHT-CET appeared.",
                                        "Selection based on merit and availability of seats.",
                                    ]} />
                                </SubSection>
                            </Section>

                            {/* 4. Documents Required */}
                            <Section number="4" title="Documents Required for Admission:">
                                <NumberedList items={[
                                    "10th & 12th Marksheet",
                                    "MHT-CET Score Card",
                                    "School Leaving Certificate",
                                    "Nationality / Domicile Certificate",
                                    "Aadhar Card",
                                    "Passport Size Photos",
                                    "Caste Certificate (if applicable)",
                                    "Caste Validity Certificate",
                                    "Non-Creamy Layer Certificate (for OBC/VJ/NT/SBC)",
                                    "Income Certificate",
                                    "Gap Certificate (if applicable)",
                                    "Migration Certificate (other board students)",
                                ]} />
                            </Section>

                            {/* 5. Attendance */}
                            <Section number="5" title="Attendance Requirements (SPPU Rules):">
                                <p className="mb-2">Minimum 75% attendance in Theory and 80% in Practicals per subject is mandatory.</p>
                                <p>Failing to meet attendance leads to ineligibility for university examination.</p>
                            </Section>

                            {/* 6. Curriculum */}
                            <Section number="6" title="Curriculum:">
                                <p>The curriculum includes both theoretical and practical components, covering areas like pharmaceutical sciences, drug development, pharmacology, and pharmaceutical chemistry.</p>
                            </Section>

                            {/* 7. Credit System */}
                            <Section number="7" title="Credit System:">
                                <p>The program follows a credit-based system, with a minimum of 208 credit points required for graduation. Credits are assigned to theory, tutorials, Practicals, Practice school, and Project work.</p>
                            </Section>

                            {/* 8. Teacher-Student Ratio */}
                            <Section number="8" title="Teacher-Student Ratio:">
                                <p>The PCI has mandated a maximum teacher-to-student ratio of 1:20 for both theory and practical classes.</p>
                            </Section>

                            {/* 9. Approval */}
                            <Section number="9" title="Approval:">
                                <p>Institutions offering the B.Pharm program must be approved by the Pharmacy Council of India.</p>
                            </Section>

                            {/* 10. Examination Rules */}
                            <Section number="10" title="Examination Rules (SPPU Pattern):">
                                <BulletList items={[
                                    "Internal Assessment: Class Tests, Assignments, Tutorials",
                                    "University Semester Examination after every semester",
                                    "Minimum 40% marks required in each subject to pass",
                                ]} />
                            </Section>

                            {/* 11. Fee Structure */}
                            <Section number="11" title="Fee Structure:">
                                <p className="mb-2">As per the Fee Regulatory Authority (FRA), Maharashtra.</p>
                                <p>The institute provides fee details during admission.</p>
                            </Section>

                            {/* 12. Cancellation */}
                            <Section number="12" title="Cancellation of Admission:">
                                <p className="mb-2">As per SPPU University & DTE norms, cancellation of admission and refund rules are applicable.</p>
                                <p>Original documents will be returned within the stipulated time after cancellation.</p>
                            </Section>

                            {/* 13. Code of Conduct */}
                            <Section number="13" title="Code of Conduct:">
                                <p className="mb-2">Students must maintain discipline and follow all academic, ethical, and administrative rules of the college and university.</p>
                                <p>Ragging is strictly prohibited under AICTE/UGC guidelines. Students must submit the Anti-Ragging Undertaking.</p>
                            </Section>

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

export default RulesRegulation;