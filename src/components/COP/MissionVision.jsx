import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroSection from "../common/components/HeroSection";
import { missionHero } from "../common/data/heroData";
import { Eye, Flag } from "lucide-react";

const IconCircle = ({ children }) => (
  <div className="mx-auto mb-4 w-14 h-14 rounded-full flex items-center justify-center"
    style={{ background: "linear-gradient(135deg, #6b5be6 0%, #4f46e5 50%, #3730a3 100%)" }}>
    {children}
  </div>
);

const MissionVision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <>
      <HeroSection {...missionHero} />

      <section ref={ref} className="bg-gray-100 py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-8">

          {/* VISION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm p-10 text-center"
          >
            <IconCircle>
              <Eye className="text-white" size={24} />
            </IconCircle>

            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-6">
              Our Vision
            </h3>

            <p className="text-gray-700 leading-8 text-justify">
              Our college will be recognised in the field of technical education by holistically developing future Pharmacist, Scientist achievers having knowledge, Skills and attitudes towards profession and life.
            </p>
          </motion.div>

          {/* MISSION CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-10 text-center"
          >
            <IconCircle>
              <Flag className="text-white" size={24} />
            </IconCircle>

            <h3 className="text-sm font-bold tracking-widest uppercase text-gray-800 mb-6">
              Our Mission
            </h3>

            <div className="text-gray-700 leading-8 text-justify space-y-4">
              <p>
                M1 : To impart education to students to become the best professional minds and entrepreneurs of today who will lead their activity successfully.
              </p>
              <p>
                M2 : To provide an environment which fastens continuous improvement and innovation with desired support and facilities to enhance students in learning and faculty effectiveness.
              </p>
              <p>
                M3 : To provide facilities for personality grooming, physical fitness and strong sense of social and environment responsibility.
              </p>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default MissionVision;