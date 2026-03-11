import { useState, useEffect, useRef } from "react";

const IMAGE_BASE_PATH = "/placed-student/";

const students = [
    { name: "Srushtri Warungase", file: "Srushtri Warungase.jpg", sector: "Pharmacy" },
    { name: "Renuka Ghomkale", file: "Renuka Ghomkale.jpg", sector: "Pharmacy" },
    { name: "Vaishnavi Khaire", file: "Vaishnavi Khaire.jpg", sector: "Pharmacy" },
    { name: "Abhishek Rajendra Tawate", file: "Abhishek Rajendra Tawate.jpg", sector: "Abbott Healthcare PVT LTD" },
    { name: "Supriya Darade", file: "Supriya Darade.jpg", sector: "Zyphars Pharmaceutics" },
    { name: "Neha vijay Godse", file: "Neha vijay Godse.jpg", sector: "Piramal Pharma LTD" },
    { name: "Shubham Arote", file: "Shubham Arote.jpg", sector: "Intas Pharmaceutical LTD" },
    { name: "Namarata Suresh Rever", file: "Namarata Suresh Rever.jpg", sector: "Neritic industries Pvt Ltd" },
    { name: "Asutosh Nanjan", file: "Asutosh Nanjan.jpg", sector: "Indoco Remedies" },
    { name: "Swaranjali Yugaraj Sandanshiv", file: "Swaranjali Yugaraj Sandanshiv.jpg", sector: "Glenmark Pvt Ltd" },
    { name: "Chetan Anand Ghule", file: "Chetan Anand Ghule.jpg", sector: "WNS GLOBAL LTD" },
    { name: "Nikhil Shivaji Mali", file: "Nikhil Shivaji Mali.jpg", sector: "Glenmark Pvt. Ltd" },
    { name: "Soeiab Pinjari", file: "Soeiab Pinjari.jpg", sector: "Flipgap India" },
    { name: "Suarbh anil patil", file: "Suarbh anil patil.jpg", sector: "Sanshiv health tech pvt ltd" },
    { name: "Prathmesh Kantilal Bhalke", file: "Prathmesh Kantilal Bhalke.jpg", sector: "Meyer Organic LTD" },
    { name: "Raj Narendra Deshmukh", file: "Raj Narendra Deshmukh.jpg", sector: "ALKEM LAB LTD" },
    { name: "Kartik Manish Shah", file: "Kartik Manish Shah.jpg", sector: "Inventia Healthcare LTD" },
    { name: "Snehal Kadlag", file: "Snehal Kadlag.jpg", sector: "Smiths Detection Pune" },
    { name: "Sachin K.Salunhe", file: "Sachin K.Salunhe.jpg", sector: "Indoco Remedies" },
    { name: "Akash Yogesh Borse", file: "Akash Yogesh Borse.jpg", sector: "Macleods Phramaceutical PVT" },
    { name: "Girish Garud", file: "Girish Garud.jpg", sector: "Maxheal Pharamaceutical" },
    { name: "Sakshi Manoj Khairnar", file: "Sakshi Manoj Khairnar.jpg", sector: "Credence Resource Mangement" },
    { name: "Umesh Satish Kokate", file: "Umesh Satish Kokate.jpg", sector: "Credence Resource Mangement" },
];

const doubled = [...students, ...students];

function StudentCard({ name, file, size = 80 }) {
    const [imgError, setImgError] = useState(false);
    const initials = name.slice(0, 2).toUpperCase();

    return (
        <div
            className="flex items-center justify-center overflow-hidden flex-shrink-0 bg-white border border-green-100 shadow-sm"
            style={{ width: size, height: size * 1.2, borderRadius: size * 0.12 }}
        >
            {!imgError ? (
                <img
                    src={`${IMAGE_BASE_PATH}${file}`}
                    alt={name}
                    onError={() => setImgError(true)}
                    style={{ width: '100%', height: '100%', objectFit: "cover", objectPosition: "top" }}
                />
            ) : (
                <span
                    className="font-extrabold text-green-800 tracking-wide"
                    style={{ fontSize: size * 0.28 }}
                >
                    {initials}
                </span>
            )}
        </div>
    );
}

function PlacementStudent() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

                .ps-font { font-family: 'Poppins', sans-serif; }

                .ps-dotgrid::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: radial-gradient(circle, #b2dfdb 1px, transparent 1px);
                    background-size: 30px 30px;
                    opacity: 0.35;
                    pointer-events: none;
                }

                .ps-bar {
                    background: linear-gradient(90deg, #1a7a3c 0%, #43a047 40%, #aed581 60%, #43a047 80%, #1a7a3c 100%);
                    background-size: 300% 100%;
                    animation: psBarShimmer 4s linear infinite;
                }
                @keyframes psBarShimmer {
                    from { background-position: 0 0; }
                    to   { background-position: 300% 0; }
                }

                .ps-blink { animation: psBlink 2s ease-in-out infinite; }
                @keyframes psBlink { 0%,100%{opacity:1} 50%{opacity:0.2} }

                .ps-underline::after {
                    content: '';
                    position: absolute;
                    bottom: -3px; left: 0; right: 0;
                    height: 3px;
                    background: linear-gradient(90deg, #1a7a3c, #66bb6a);
                    border-radius: 2px;
                    transform: scaleX(0);
                    transform-origin: left;
                    transition: transform 0.6s ease 0.9s;
                }
                .ps-underline.show::after { transform: scaleX(1); }

                .ps-marquee-track {
                    display: flex;
                    gap: 16px;
                    width: max-content;
                    padding: 12px 0;
                    animation: psScrollLeft 40s linear infinite;
                }
                .ps-marquee-track:hover { animation-play-state: paused; }
                @keyframes psScrollLeft {
                    from { transform: translateX(0); }
                    to   { transform: translateX(-50%); }
                }

                .ps-fade { opacity: 0; transform: translateY(14px); transition: opacity 0.6s ease, transform 0.6s ease; }
                .ps-fade.show { opacity: 1; transform: translateY(0); }
                .ps-fade-d1 { transition-delay: 0.1s; }
                .ps-fade-d2 { transition-delay: 0.2s; }
                .ps-fade-d4 { transition-delay: 0.4s; }
            `}</style>

            <section
                ref={sectionRef}
                className="ps-font ps-dotgrid relative bg-[#f7fdf9] py-16 overflow-hidden"
            >
                {/* Accent Bar */}
                <div className="ps-bar absolute top-0 left-0 right-0 h-[5px] z-10" />

                <div className="relative z-10 max-w-6xl mx-auto px-8">
                    <div className="text-center mb-12">

                        {/* Eyebrow */}
                        <div className={`ps-fade ps-fade-d1 ${visible ? "show" : ""} inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-5 py-1.5 text-[11px] font-bold tracking-[0.18em] uppercase text-green-800 mb-5`}>
                            <span className="ps-blink w-[7px] h-[7px] bg-green-500 rounded-full inline-block" />
                            Our Alumni
                        </div>

                        {/* Title */}
                        <h2 className={`ps-fade ps-fade-d2 ${visible ? "show" : ""} text-4xl font-extrabold text-gray-900 leading-tight mb-3`}>
                            Placement{" "}
                            <span className={`ps-underline ${visible ? "show" : ""} text-green-800 relative inline-block`}>
                                Students
                            </span>
                        </h2>

                        {/* Description */}
                        <p className={`ps-fade ps-fade-d4 ${visible ? "show" : ""} text-sm text-gray-500 max-w-xl mx-auto leading-relaxed`}>
                            Our placed student.
                        </p>

                    </div>
                </div>

                {/* Marquee */}
                <div className="relative overflow-hidden mt-2
                    before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-0 before:w-24 before:bg-gradient-to-r before:from-[#f7fdf9] before:to-transparent before:z-10 before:pointer-events-none
                    after:content-[''] after:absolute after:top-0 after:bottom-0 after:right-0 after:w-24 after:bg-gradient-to-l after:from-[#f7fdf9] after:to-transparent after:z-10 after:pointer-events-none">
                    <div className="ps-marquee-track">
                        {doubled.map((s, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-2.5 bg-white border border-green-100 rounded-2xl px-4 py-5 w-40 flex-shrink-0 cursor-pointer shadow-sm
                                    hover:border-green-500 hover:shadow-lg hover:-translate-y-1.5 hover:scale-[1.03] transition-all duration-300"
                            >
                                <StudentCard name={s.name} file={s.file} size={80} />
                                <span className="text-[13px] font-semibold text-gray-800 text-center leading-snug">{s.name}</span>
                                <span className="text-[10px] font-semibold text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full text-center">{s.sector}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}

export default PlacementStudent;