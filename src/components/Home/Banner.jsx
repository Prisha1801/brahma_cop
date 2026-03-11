import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { MdOutlineSchool, MdOutlineTableChart, MdOutlineCode, MdOutlinePeople } from 'react-icons/md';

const images = [
  "/banners/b1.png",
  "/banners/b2.jpeg",
];

const infoCards = [
  { icon: <MdOutlineSchool size={30} />, label: "Programme Name", value: "B. Pharmacy", number: null },
  { icon: <MdOutlineTableChart size={30} />, label: "Choice Code", value: "520282310", number: "123" },
  { icon: <MdOutlineCode size={30} />, label: "DTE Code", value: "5202", number: null },
  { icon: <MdOutlinePeople size={30} />, label: "Intake", value: "60", number: null },
];

const Banner = () => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % images.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
  };

  return (
    <div className="relative w-full">

      {/* ── Carousel ── */}
      <div className="relative w-full overflow-hidden" style={{ height: '520px' }}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            alt={`Banner ${current + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        {/* Prev Arrow */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-1 transition-colors"
          aria-label="Previous"
        >
          <MdChevronLeft size={36} />
        </button>

        {/* Next Arrow */}
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/40 text-white rounded-full p-1 transition-colors"
          aria-label="Next"
        >
          <MdChevronRight size={36} />
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? 'bg-white' : 'bg-white/40'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Floating Cards — overlap bottom of image ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6" style={{ marginTop: '-90px' }}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {infoCards.map((card, i) => (
            <div
              key={i}
              className="bg-[#4B8E3F] text-white flex flex-col items-center justify-center text-center py-6 px-4 rounded-sm shadow-lg"
            >
              <div className="mb-2 opacity-90">{card.icon}</div>
              {card.number && (
                <p className="text-xs font-medium opacity-80 mb-0.5">{card.number}</p>
              )}
              <h3 className="text-base font-bold mb-1">{card.label}</h3>
              <p className="text-sm opacity-90">{card.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Spacer so page content doesn't sit behind cards */}
      <div className="pb-10" />
    </div>
  );
};

export default Banner;