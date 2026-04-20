import { useState } from "react";

const ProjectCard = ({ proyek }) => {
    const [index, setIndex] = useState(0);

    const nextImage = () => {
        setIndex((prev) =>
            prev === proyek.gambar.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setIndex((prev) =>
            prev === 0 ? proyek.gambar.length - 1 : prev - 1
        );
    };

    return (
        <div
            className="p-4 bg-[#01498c] rounded-md"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay={proyek.dad}
            key={proyek.id}
        >
            <div className="relative">
                <img
                    src={proyek.gambar[index]}
                    className="rounded-md w-full h-48 object-cover"
                    alt="Proyek Image"
                    loading="lazy"
                    alt="project"
                />

                <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 px-2 rounded">
                    ◀
                </button>

                <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 px-2 rounded">
                    ▶
                </button>
            </div>

            <h1 className="text-xl text-black font-bold mt-4">
                {proyek.nama}
            </h1>
            <div>
                <ul className="list-disc pl-5 space-y-2 text-white mb-4">
                    {proyek.desk.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <span className="inline-block mb-3 text-xs text-white bg-white/20 px-3 py-1 rounded-full capitalize">
                    {proyek.category}
                </span>

                <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                        <p
                            className="py-1 px-3 border border-zinc-700 bg-black text-white rounded-md font-semibold"
                            key={index}
                        >
                            {tool}
                        </p>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProjectCard;