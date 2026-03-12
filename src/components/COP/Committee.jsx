import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LayoutList } from "lucide-react";
import HeroSection from "../common/components/HeroSection";
import { committeeHero } from "../common/data/heroData";

const pdfs = [
  { title: "Anti-Ragging Committee",                  file: "Anti-Ragging Committee.pdf" },
  { title: "College Development Committee 2025-26",   file: "College Development Committee 2025-26.pdf" },
  { title: "Divyang Cell 2025-26",                    file: "DIVYANG CELL 2025-26.pdf" },
  { title: "Equal Opportunities Cell Committee",      file: "Equal Opportunities Cell Committee.pdf" },
  { title: "Governing Body 2025-2026",                file: "Governing Body 2025-2026.pdf" },
  { title: "Internal Complaints Committee",           file: "Internal Complaints Committee.pdf" },
  { title: "IQAC Committee 2025-26",                  file: "IQAC Committee 2025-26.pdf" },
  { title: "OBC Cell 2025-26",                        file: "OBC CELL 2025-26.pdf" },
  { title: "Placement Cell 2025-26",                  file: "Placement Cell 2025-26.pdf" },
  { title: "SC ST Cell 2025-26",                      file: "SC ST CELL 2025-26.pdf" },
  { title: "Student Development Committee 2025-2026", file: "Student Development Committee 2025-2026.pdf" },
  { title: "Woman Grievance Committee (Hostel)",      file: "Woman Grievance Committee (Hostel).pdf" },
  { title: "Woman Grievance Committee",               file: "Woman Grievance Committee.pdf" },
];

const Committee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="bg-gray-50 min-h-screen">
      <HeroSection {...committeeHero} />

      <section ref={ref} className="max-w-4xl mx-auto px-4 sm:px-6 py-14">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <LayoutList className="w-7 h-7 text-blue-500" />
          <h2 className="text-3xl font-bold text-blue-500">
            College Committees
          </h2>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-lg overflow-hidden border border-gray-200 shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-[80px_1fr] bg-[#2b2f3a]">
            <div className="py-4 px-5 text-white font-semibold text-sm text-center border-r border-gray-600">
              Sr. No.
            </div>
            <div className="py-4 px-5 text-white font-semibold text-sm">
              Committee Name
            </div>
          </div>

          {/* Rows */}
          {pdfs.map((pdf, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.05 }}
              className={`grid grid-cols-[80px_1fr] border-t border-gray-200 hover:bg-blue-50 transition-colors duration-200 ${
                i % 2 === 0 ? "bg-gray-50" : "bg-white"
              }`}
            >
              {/* Sr No */}
              <div className="py-4 px-5 text-gray-500 text-sm text-center border-r border-gray-200 flex items-center justify-center">
                {i + 1}
              </div>

              {/* Clickable title */}
              <div className="py-4 px-5 flex items-center">
                <a
                  href={encodeURI(`/pdf/committee/${pdf.file}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 hover:underline font-medium text-sm transition-colors cursor-pointer"
                >
                  {pdf.title}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </section>
    </div>
  );
};

export default Committee;