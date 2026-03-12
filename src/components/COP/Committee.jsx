import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import HeroSection from "../common/components/HeroSection";
import { committeeHero } from "../common/data/heroData";

const pdfs = [
  { title: "Anti-Ragging Committee", file: "Anti-Ragging Committee.pdf" },
  { title: "College Development Committee 2025-26", file: "College Development Committee 2025-26.pdf" },
  { title: "Divyang Cell 2025-26", file: "DIVYANG CELL 2025-26.pdf" },
  { title: "Equal Opportunities Cell Committee", file: "Equal Opportunities Cell Committee.pdf" },
  { title: "Governing Body 2025-2026", file: "Governing Body 2025-2026.pdf" },
  { title: "Internal Complaints Committee", file: "Internal Complaints Committee.pdf" },
  { title: "IQAC Committee 2025-26", file: "IQAC Committee 2025-26.pdf" },
  { title: "OBC Cell 2025-26", file: "OBC CELL 2025-26.pdf" },
  { title: "Placement Cell 2025-26", file: "Placement Cell 2025-26.pdf" },
  { title: "SC ST Cell 2025-26", file: "SC ST CELL 2025-26.pdf" },
  { title: "Student Development Committee 2025-2026", file: "Student Development Committee 2025-2026.pdf" },
  { title: "Woman Grievance Committee (Hostel)", file: "Woman Grievance Committee (Hostel).pdf" },
  { title: "Woman Grievance Committee", file: "Woman Grievance Committee.pdf" },
];

const Committee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection {...committeeHero} />

      <section ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 py-14">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-[#0b2c4d] text-center mb-10"
        >
          Committee Documents
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {pdfs.map((pdf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300 flex items-center gap-4 p-4"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-11 h-11 bg-red-50 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-500" />
              </div>

              {/* Title */}
              <p className="flex-1 text-sm font-medium text-gray-800 text-left leading-snug">
                {pdf.title}
              </p>

              {/* Open Button */}
              <a
                href={encodeURI(`/pdf/committee/${pdf.file}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 flex items-center gap-1.5 bg-[#1e4d5c] hover:bg-[#163a46] text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Committee;