import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoardMembers from "./components/COP/BoardMembers";
import ChairmanDesk from "./components/COP/ChairmanDesk";
import PrincipalDesk from "./components/COP/PrincipalDesk";
import MissionVision from "./components/COP/MissionVision";
import ProgrammeDetails from "./components/Admission/ProgrammeDetails";
import Eligibility from "./components/Admission/Eligibility";
import AcademicOverview from "./components/Admission/AcademicOverview";
import AdmissionDetails from "./components/Admission/AdmissionDetails";
import FeesStructure from "./components/Admission/FeesStructure";
import RulesRegulation from "./components/Admission/RulesRegulation";
import RequiredDocuments from "./components/Admission/RequiredDocuments";
import Committee from "./components/COP/Committee";
import Library from "./components/Facilities/Library";
import Hostel from "./components/Facilities/Hostel";
import Cafeteria from "./components/Facilities/Cafeteria";
import Transport from "./components/Facilities/Transport";
import Sport from "./components/Facilities/Sport";
import Startup from "./components/Innovation/Startup";
import Incubation from "./components/Innovation/Incubation";
import IIPR from "./components/Innovation/IIPR";
import EcoSystem from "./components/Innovation/EcoSystem";
import IRDC from "./components/Innovation/IRDC";
// Student Corner Components
import Circular from "./components/Student-corner/Circular";
import CourseStructure from "./components/Student-corner/CourseStructure";
import Examination from "./components/Student-corner/Examination";
import HostelOverview from "./components/Student-corner/HostelOverview";
import HostelDocumentation from "./components/Student-corner/HostelDocumentation";
import ImportantContacts from "./components/Student-corner/ImportantContacts";
import PlacementStudent from "./components/Student-corner/PlacementStudent";
import RulesRegulationStudent from "./components/Student-corner/RulesRegulation";
import ScholarshipSection from "./components/Student-corner/ScholarshipSection";
import StudentConcilCommittee from "./components/Student-corner/StudentConcilCommittee";
import CodeOfConduct from "./components/Student-corner/CodeOfConduct";
import BVClub from "./components/Student-corner/BVClub";
import DVVClarification from "./components/NAAC/DVVClarification";
import NAACDocument from "./components/NAAC/NAACDocument";
import IIQA from "./components/NAAC/IIQA";
import IQACCommittee from "./components/IQAC/IQACCommittee";
import ObjectiveFunction from "./components/IQAC/ObjectiveFunction";
import Contact from "./pages/Contact";
import Faculty from "./pages/Faculty";
import Alumni from "./pages/Alumni";
import LMC from "./components/COP/LMC";

function App() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board-members" element={<BoardMembers />} />
          <Route path="/chairman-desk" element={<ChairmanDesk />} />
          <Route path="/principal-desk" element={<PrincipalDesk />} />
          <Route path="/vision-mission" element={<MissionVision />} />
          <Route path="/lmc" element={<LMC />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/admission/programme-details" element={<ProgrammeDetails />} />
          <Route path="/admission/eligibility" element={<Eligibility />} />
          <Route path="/admission/academics-overview" element={<AcademicOverview />} />
          <Route path="/admission/admission-details" element={<AdmissionDetails />} />
          <Route path="/admission/fee-structure" element={<FeesStructure />} />
          <Route path="/admission/rules-regulations" element={<RulesRegulation />} />
          <Route path="/admission/required-documents" element={<RequiredDocuments />} />
          <Route path="/library" element={<Library />} />
          <Route path="/hostel" element={<Hostel />} />
          <Route path="/cafeteria" element={<Cafeteria />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/sports" element={<Sport />} />
          <Route path="/startup" element={<Startup />} />
          <Route path="/incubation" element={<Incubation />} />
          <Route path="/i-ipr" element={<IIPR />} />
          <Route path="/eco-system" element={<EcoSystem />} />
          <Route path="/irdc" element={<IRDC />} />
          {/* Student Corner Routes */}
          <Route path="/curricular" element={<Circular />} />
          <Route path="/course-structure" element={<CourseStructure />} />
          <Route path="/examination" element={<Examination />} />
          <Route path="/hostel-overview" element={<HostelOverview />} />
          <Route path="/hostel-documentation" element={<HostelDocumentation />} />
          <Route path="/important-contacts" element={<ImportantContacts />} />
          <Route path="/placement-student" element={<PlacementStudent />} />
          <Route path="/rules-regulation" element={<RulesRegulationStudent />} />
          <Route path="/scholarship-section" element={<ScholarshipSection />} />
          <Route path="/bv-club" element={<BVClub />} />
          <Route path="/student-council-committee" element={<StudentConcilCommittee />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/dvv-clarification" element={<DVVClarification />} />
          <Route path="/naac-document" element={<NAACDocument />} />
          {/* allow deep linking to a specific criteria code (1.1, 2.1 etc) */}
          <Route path="/naac-document/:criteria" element={<NAACDocument />} />
          <Route path="/iiqa" element={<IIQA />} />
          <Route path="/iqac-committee" element={<IQACCommittee />} />
          <Route path="/objective-function" element={<ObjectiveFunction />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faculties" element={<Faculty />} />
          <Route path="/alumni" element={<Alumni />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
