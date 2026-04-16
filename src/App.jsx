import DataImage from "./data"
import { listProyek, skillsData } from "./data"
import { useState } from "react";


function App() {

  // ✅ PINDAHKAN KE SINI (BUKAN DI Project)
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(listProyek.map((p) => p.category)),
  ];

  return (
    <>

      {/* Hero */}
      <div className="hero grid grid-cols-1 md:grid-cols-2 pt-10 items-center gap-6 lg:gap-10">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-5xl/tight text-[#0759a6] font-bold mb-6">Hi, I am Agenda Bima</h1>
          <p className="text-base/loose mb-6 text-justify opacity-50">I am a student at the Sepuluh Nopember Institute of Technology with a strong interest in construction engineering, particularly in water resources infrastructure. I have mastered the basics of engineering drawing, cost planning calculations, and project implementation in the field. With my systematic analytical and problem-solving skills, I am able to work in a structured manner and make effective contributions. I am known as a disciplined, adaptable, and highly motivated individual who strives for continuous development.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="/Web-Portofolio-Bima/CV_Agenda Bima Prabowo Putra.pdf"
              download
              className="bg-zinc-800 p-4 rounded-2xl hover:bg-zinc-700 text-white"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-[#0759a6] p-4 rounded-2xl hover:bg-[#127bde] text-white">
              Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <div className="w-full max-w-[500px] md:ml-auto">
          <div className="relative rounded-2xl aspect-square overflow-hidden group">

            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="animate__animated animate__fadeInUp animate__delay-3s block w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" sizes="1000" loading="lazy"
            />

          </div>
        </div>
      </div>
      {/* Hero */}


      {/* tentang */}

      <div className="container mx-auto mt-20 mb-10 px-4 sm:px-6 lg:px-8" id="tentang">

        {/* Header */}
        <div className="text-center mb-12 " data-aos="fade-up" data-aos-duration="1000" data-aos-one="true">
          <h1 className="text-4xl text-[#0759a6] font-bold mb-2">About</h1>
          <p className="text-[#0759a6] ">
            A concise overview of my background, technical focus, and professional direction.
          </p>
        </div>

        {/* Grid 2 container */}
        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-duration="1000" data-aos-one="true"   >

          {/* LEFT CARD */}
          <div className="w-full bg-black p-8 rounded-2xl shadow-sm flex flex-col ">
            <h2 className="text-xl text-[#0759a6] text-center font-semibold mb-4">Profile</h2>
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
            <p className="text-base/loose text-white font-extrabold mb-6 text-center opacity-100 leading-relaxed">
              I am Diploma in Civil Engineering · Started in August 2022 · GPA 3.07 / 4.00
            </p>
            <p className="text-base/loose mb6 text-center text-white leading-relaxed">
              Focused on Water Resources Construction Engineering Technology, including hydraulic infrastructure, technical planning, construction systems, and applied field engineering. I bring practical experience in technical drafting, survey support, and project supervision, supported by proficiency in AutoCAD, SketchUp, Revit, PLAXIS 3D, PLAXIS 2D, GeoStudio, SAP2000, Lumion, and Enscape. My work emphasizes clarity, accuracy, and reliable engineering documentation.
            </p>
            <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:gap-8">
              <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
              <div className="grid grid-cols-2 gap-4 text-center">

                <div>
                  <h1 className="text-2xl sm:text-4xl mb-1 text-white">
                    5 <span className="text-[#0759a6] ">+</span>
                  </h1>
                  <p className="text-white">Project completed</p>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-4xl mb-1 text-white">
                    3 <span className="text-[#0759a6] ">+</span>
                  </h1>
                  <p className="text-white">Years Experience</p>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-black p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl text-[#0759a6]  text-center font-semibold mb-4">Personal Information</h2>

            <div className="space-y-3 text-base/loose mb-6 text-justify">

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium">Name</span>
                <span>Agenda Bima Prabowo Putra</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium">Email</span>
                <span>agendabimapp@gmail.com</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium">Phone</span>
                <span>089603231903</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium">Location</span>
                <span>Ponorogo, Jawa Timur, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3 - PERSONAL EXPERIENCE */}
      <div className="bg-black p-8 rounded-2xl shadow-sm md:col-span-2" data-aos="fade-up" data-aos-duration="1000" data-aos-one="true">
        <h2 className="text-xl text-[#0759a6] font-semibold mb-4">Professional Experience</h2>

        <div className="space-y-6 text-base/loose">

          <hr className="border-[#0759a6]" />
          {/* Experience 1 */}
          <div>
            <h3 className="font-semibold text-white">
              Chief Education Officer - ASKARI NUSANTARA GROUP
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Surabaya, Indonesia · 2024 – Present
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Operational Strategy & Execution</li>
              <li>Process Optimization & Efficiency Improvement</li>
              <li>Business Process Analysis</li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
          {/* Experience 1 */}
          <div>
            <h3 className="font-semibold text-white">
              Equipments Division - KKN Wengker ITS 2024
            </h3>
            <p className="text-white opacity-100 text-sm mb-2">
              Ponorogo, Indonesia · January 2024 – 2024
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Inventory & Asset Management</li>
              <li>Logistics & Distribution Planning</li>
              <li>Operational Support & Coordination</li>
            </ul>
          </div>


          <hr className="border-[#0759a6]" />
          {/* Experience 3 */}
          <div>
            <h3 className="font-semibold text-white">
              Internship Irrigation Network Improvement Project for Bendo Irrigation Area (Phase III) - BBWS Bengawan Solo
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Ponorogo, Indonesia · Juli 2025 – Desember 2025
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Construction Project Understanding</li>
              <li>Technical Drawing & Documentation Review</li>
              <li>Site Supervision & Field Observation</li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
          <div>
            <h3 className="font-semibold text-white">
              Staff Water Resources Engineering - PT. Prima Jaya Konsulindo, PT. Globetek Glory Konsultan,  PT. Ika Adya Perkasa KSO
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Ponorogo, Indonesia · Juli 2025 – Desember 2025
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Construction Project Understanding</li>
              <li>Technical Drawing & Documentation Review</li>
              <li>Site Supervision & Field Observation</li>
            </ul>
          </div>

          <hr className="border-[#0759a6]" />
        </div>
      </div>
      {/* tentang */}

      {/* project */}
      <div className="proye mt-32 py-10" id="proyek">
        <h1
          className="text-center text-[#0759a6] text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Project
        </h1>

        <p
          className="text-base/loose text-[#0759a6] text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Practical project experience across engineering, surveying, drafting, and supervision.
        </p>

        {/* ✅ FILTER BUTTON */}
        <div
          className="flex justify-center gap-3 mt-6 flex-wrap"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="400"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-2 rounded-full capitalize transition ${category === cat
                ? "bg-[#0759a6] text-white"
                : "bg-black text-white hover:bg-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ PROJECT GRID */}
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek
            .filter((proyek) =>
              category === "all" ? true : proyek.category === category
            )
            .map((proyek) => (
              <div
                className="p-4 bg-black rounded-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                key={proyek.id}
              >
                <img
                  src={proyek.gambar}
                  alt="Proyek Image"
                  loading="lazy"
                  className="rounded-md"
                />

                <div>
                  <h1 className="text-2xl text-white font-bold my-4">{proyek.nama}</h1>

                  <p className="text-base/loose text-white mb-4">{proyek.desk}</p>

                  {/* ✅ BADGE CATEGORY */}
                  <span className="inline-block mb-3 text-xs text-white bg-white/10 px-3 py-1 rounded-full capitalize">
                    {proyek.category}
                  </span>

                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border border-zinc-700 bg-[#0759a6] text-white rounded-md font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* project */}

      {/* Skills */}
      <div className="mt-48 px-4" id="skills">

        {/* Header (TANPA AOS biar tidak trigger duluan) */}
        <div className="text-center mb-12">
          <h1 className="text-4xl text-[#0759a6] font-bold mb-2" data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1500" data-aos-one="true">
            Skills
          </h1>
          <p className="text-[#0759a6]" data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1500" data-aos-one="true">
            Competencies that support reliable performance in engineering and construction environments.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* TECHNICAL */}
          <div
            className="bg-black p-8 rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic" data-aos-one="true"
          >
            <h2 className="text-xl text-white font-semibold mb-6">Technical skills</h2>

            <div className="flex flex-wrap gap-3">
              {skillsData.technical.map((skill, index) => (
                <span
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  className="px-4 py-2 bg-[#0759a6] rounded-full text-sm font-medium 
                       hover:bg-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* PROFESSIONAL */}
          <div
            className="bg-black p-8 rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="800"
            data-aos-duration="1500"
            data-aos-easing="ease-out-cubic" data-aos-one="true"
          >
            <h2 className="text-xl text-white font-semibold mb-6">Professional skills</h2>

            <div className="flex flex-wrap gap-3">
              {skillsData.professional.map((skill, index) => (
                <span
                  key={index}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                  data-aos-one="true"
                  className="px-4 py-2 bg-[#0759a6] rounded-full text-sm font-medium 
                       hover:bg-white transition"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
      {/* Skills */}


      {/* KONTAK */}
      <div className="kontak mt-48 px-4" id="kontak">

        {/* Header (TANPA AOS) */}
        <h1 className="text-4xl mb-2 font-bold text-center text-[#0759a6]" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" data-aos-one="true">Contact</h1>
        <p className="text-base/loose text-center text-[#0759a6] mb-10" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" data-aos-one="true">
          Open to collaboration, internships, freelance drafting work, and project-based engineering support.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          {/* LEFT - CONTACT INFO */}
          <div
            className="bg-black p-8 rounded-2xl h-full flex flex-col justify-between"
            data-aos="fade-up"
            data-aos-delay="1500"
            data-aos-duration="2200"
            data-aos-easing="ease-out-cubic"
            data-aos-one="true"
          >
            <div>
              <h2 className="text-xl text-white font-semibold mb-6">
                Contact Information
              </h2>

              <div className="grid grid-cols-[120px_1fr] gap-y-6 gap-x-4 text-base text-white flex-1">

                <span className="font-semibold">Email</span>
                <span className="break-all">
                  agendabimapp@gmail.com
                </span>

                <span className="font-semibold">Phone</span>
                <span className="break-all">
                  089603231903
                </span>

                <span className="font-semibold">Location</span>
                <span className=" break-all">
                  Ponorogo, Indonesia
                </span>

                <span className="font-semibold">Instagram</span>
                <span className="break-all">
                  instagram.com/agendabimapp
                </span>

              </div>
            </div>

            <p className="text-xs text-white mt-6">
              Feel free to reach out anytime.
            </p>
          </div>

          {/* RIGHT - FORM */}
          <form
            action="https://formsubmit.co/agendabimapp@gmail.com"
            method="POST"
            autoComplete="off"
            className="bg-black p-8 rounded-2xl"
            data-aos="fade-up"
            data-aos-delay="1500"
            data-aos-duration="2200"
            data-aos-easing="ease-out-cubic"
            data-aos-one="true"
          >

            {/* IMPORTANT SETTINGS */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:5173/" />

            <h2 className="text-xl text-white font-semibold mb-4">Send Message</h2>

            <div className="flex flex-col text-white gap-5">

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Input Name..."
                  className="border border-zinc-600 bg-zinc-900 p-2 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Input Email..."
                  className="border border-zinc-600 bg-zinc-900 p-2 rounded-md"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="font-semibold">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Input Message..."
                  className="border border-zinc-600 bg-zinc-900 p-2 rounded-md"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer p-3 rounded-md bg-[#0759a6] hover:bg-[#106cc2] transition"
              >
                Send Message
              </button>

            </div>
          </form>

        </div>
      </div>
      {/* KONTAK */}


    </>
  )
}

export default App
