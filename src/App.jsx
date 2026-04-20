import DataImage from "./data"
import { listProyek, skillsData } from "./data"
import { useState } from "react";
import ProjectCard from "./components/ProjectCard"


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
          <div className="flex items-center gap-3mb6 bg-[#01498c] text-black w-fit p-6 rounded-2xl">
            <img src={DataImage.HeroImage} alt="Hero Image" className="w-10 rounded-md" loading="lazy" />
            <h1 className="p-2">“Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.- Roy T. Bennett ”</h1>
          </div>
          <h1 className="text-5xl/tight text-black font-bold mb-6">Hi, I am Bima Fahridza Antoni Putra</h1>
          <p className="text-base/loose text-black mb-6 text-justify opacity-100">An engineering student at Institut Teknologi Sepuluh Nopember (ITS) with a strong interest in water infrastructure and construction management. Skilled in integrating computational analysis with technical drawing to produce precise and reliable designs. Able to adapt quickly to new work environments and highly motivated to continuously develop technical competencies. Committed to efficiency, discipline, innovation, and structured, systematic project execution.</p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href={`${import.meta.env.BASE_URL}CV-BIMA FAHRIDZA.pdf`}
              download
              className="bg-black p-4 rounded-2xl hover:bg-zinc-800 text-white"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a href="#proyek" className="bg-[#01498c] p-4 rounded-2xl hover:bg-[#025aad] text-white">
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
          <h1 className="text-4xl text-black font-bold mb-2">About</h1>
          <p className="text-">
            A concise overview of my background, technical focus, and professional direction.
          </p>
        </div>

        {/* Grid 2 container */}
        <div className="grid md:grid-cols-2 gap-8" data-aos="fade-up" data-aos-duration="1000" data-aos-one="true"   >

          {/* LEFT CARD */}
          <div className="w-full bg-[#01498c] p-8 rounded-2xl shadow-sm flex flex-col">
            <h2 className="text-xl text-black text-center font-semibold mb-4">Profile</h2>
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy" />
            <p className="text-base/loose text-black font-extrabold mb-6 text-center opacity-100 leading-relaxed">
              I am Diploma in Civil Engineering · Started in August 2022 · GPA 3.08 / 4.00
            </p>
            <p className="text-base/loose mb6 text-center text-white leading-relaxed">
              I am a Civil Engineering student at Institut Teknologi Sepuluh Nopember with a strong interest in construction and infrastructure. I have academic experience in technical planning, data analysis, and project documentation, supported by my proficiency in AutoCAD and Microsoft Excel. I am a detail-oriented and disciplined individual with strong analytical skills. I am continuously improving my communication and public speaking abilities, and I have a strong willingness to learn. I am also capable of working effectively in a team to achieve common goals. I am eager to keep growing and to contribute optimally in a professional work environment.
            </p>
            <div className="mt-auto flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:gap-8">
              <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
              <div className="grid grid-cols-2 gap-4 text-center">

                <div>
                  <h1 className="text-2xl sm:text-4xl mb-1 text-white">
                    5 <span className="text-black ">+</span>
                  </h1>
                  <p className="text-white">Project completed</p>
                </div>

                <div>
                  <h1 className="text-2xl sm:text-4xl mb-1 text-white">
                    3 <span className="text-black">+</span>
                  </h1>
                  <p className="text-white">Years Experience</p>
                </div>

              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-[#01498c] p-8 rounded-2xl shadow-sm">
            <h2 className="text-xl text-black  text-center font-semibold mb-4">Personal Information</h2>

            <div className="space-y-3 text-base/loose mb-6 text-justify">

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium text-black">Name</span>
                <span>Bima Fahridza Antoni Putra</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium text-black">Email</span>
                <span>b.fahridzaO88@gmail.com</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium text-black">Phone</span>
                <span>0895041742ó9</span>
              </div>

              <div className="flex flex-col text-center text-white gap-1">
                <span className="font-medium text-black">Location</span>
                <span>Ponorogo, Jawa Timur, Indonesia</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CARD 3 - PERSONAL EXPERIENCE */}
      <div className="bg-[#01498c] p-8 rounded-2xl shadow-sm md:col-span-2" data-aos="fade-up" data-aos-duration="1000" data-aos-one="true">
        <h2 className="text-xl text-black font-semibold mb-4">Professional Experience</h2>

        <div className="space-y-6 text-base/loose">

          <hr className="border-white" />
          {/* Experience 1 */}
          <div>
            <h3 className="font-semibold text-black">
              Intern – Assistant Drafter
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              CV. Parama Multi Consultant, Madiun, Indonesia
              January 2021 – July 2021
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Assisted drafters in producing residential building drawings (2D & 3D)</li>
              <li>Conducted planning surveys for Gully Plug and Drop Structure projects</li>
              <li>Contributed to the PDD team (Publication, Design, and Documentation)</li>
            </ul>
          </div>


          <hr className="border-white" />
          {/* Experience 1 */}
          <div>
            <h3 className="font-semibold text-black">
              Operational Staff – UKM PSHT ITS
            </h3>
            <p className="text-white opacity-100 text-sm mb-2">
              Surabaya, Indonesia · February 2023 – March 2024
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Supported daily operational activities and regular training programs</li>
              <li>Managed logistics and equipment for organizational events</li>
              <li>Coordinated with members to ensure smooth execution of internal activities</li>
            </ul>
          </div>


          <hr className="border-white" />
          {/* Experience 3 */}
          <div>
            <h3 className="font-semibold text-black">
              Staff of Logistics Division – KKN ITS Wengker
              2024
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Ponorogo · 2024
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Managed logistics distribution and ensured resource availability during the program</li>
              <li>Planned material requirements and logistics budgeting</li>
              <li>Supported field operations to maintain efficiency and effectiveness</li>
            </ul>
          </div>

          <hr className="border-white" />
          <div>
            <h3 className="font-semibold text-black">
              Head of Media and Information Division (Kadiv Medfo) – UKM PSHT ITS
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              Surabaya, Indonesia · April 2024 – May 2025
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Led media and publication strategies for the organization</li>
              <li>Supervised digital content creation (design, documentation, and publication)</li>
              <li>Improved organizational branding and engagement through social media</li>
              <li>Coordinated team activities in media production and information distribution</li>
            </ul>
          </div>

          <hr className="border-white" />
          <div>
            <h3 className="font-semibold text-black">
              Civil Engineering Intern (Irrigation Network Rehabilitation – DI Gung)
            </h3>
            <p className="text-sm text-white opacity-100 mb-2">
              PT. Minarta Dutahutama, Tegal, Indonesia
              July 2025 – December 2025
            </p>

            <ul className="text-white opacity-100 list-disc ml-5 space-y-1">
              <li>Prepared and revised technical drawings using AutoCAD, Civil 3D, and SketchUp</li>
              <li>Performed on-site quality control (sandcone test and concrete compressive strength test)</li>
              <li>Conducted quantity take-off and material estimation</li>
            </ul>
          </div>

          <hr className="border-white" />
        </div>
      </div>
      {/* tentang */}

      {/* project */}
      <div className="proye mt-32 py-10" id="proyek">
        <h1
          className="text-center text-black text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          Project
        </h1>

        <p
          className="text-base/loose text-black text-center opacity-50"
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
                ? "bg-[#0759a6]  text-white"
                : "bg-black text-white hover:bg-gray-300"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ✅ PROJECT GRID */}
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4" >
          {listProyek
            .filter((proyek) =>
              category === "all" ? true : proyek.category === category
            )
            .map((proyek) => (
              <ProjectCard key={proyek.id} proyek={proyek} />
            ))}
        </div>

        {/* project */}

        {/* Skills */}
        <div className="mt-48 px-4" id="skills">

          {/* Header (TANPA AOS biar tidak trigger duluan) */}
          <div className="text-center mb-12">
            <h1 className="text-4xl text-black font-bold mb-2" data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1500" data-aos-one="true">
              Skills
            </h1>
            <p className="text-black" data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1500" data-aos-one="true">
              Competencies that support reliable performance in engineering and construction environments.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* TECHNICAL */}
            <div
              className="bg-[#01498c] p-8 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic" data-aos-one="true"
            >
              <h2 className="text-xl text-black font-semibold mb-6">Technical skills</h2>

              <div className="flex flex-wrap gap-3">
                {skillsData.technical.map((skill, index) => (
                  <span
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                    className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium 
                       hover:bg-white hover:text-black transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* PROFESSIONAL */}
            <div
              className="bg-[#01498c] p-8 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="800"
              data-aos-duration="1500"
              data-aos-easing="ease-out-cubic" data-aos-one="true"
            >
              <h2 className="text-xl text-black font-semibold mb-6">Professional skills</h2>

              <div className="flex flex-wrap gap-3">
                {skillsData.professional.map((skill, index) => (
                  <span
                    key={index}
                    data-aos="zoom-in"
                    data-aos-delay={index * 150}
                    data-aos-one="true"
                    className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium 
                       hover:bg-white hover:text-black transition"
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
          <h1 className="text-4xl mb-2 font-bold text-center text-black" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" data-aos-one="true">Contact</h1>
          <p className="text-base/loose text-center text-black mb-10" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000" data-aos-one="true">
            Open to collaboration, internships, freelance drafting work, and project-based engineering support.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            {/* LEFT - CONTACT INFO */}
            <div
              className="bg-[#0759a6]  p-8 rounded-2xl h-full flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="2200"
              data-aos-easing="ease-out-cubic"
              data-aos-one="true"
            >
              <div>
                <h2 className="text-xl text-black font-semibold mb-6">
                  Contact Information
                </h2>

                <div className="grid grid-cols-[120px_1fr] gap-y-6 gap-x-4 text-base text-white flex-1">

                  <span className="font-semibold">Email</span>
                  <span className="break-all">
                    b.fahridzaO88@gmail.com
                  </span>

                  <span className="font-semibold">Phone</span>
                  <span className="break-all">
                    0895041742ó9
                  </span>

                  <span className="font-semibold">Location</span>
                  <span className=" break-all">
                    Ponorogo, Indonesia
                  </span>

                  <span className="font-semibold">Instagram</span>
                  <span className="break-all">
                    instagram.com/b.fhrdz_
                  </span>

                </div>
              </div>

              <p className="text-xs text-black mt-6">
                Feel free to reach out anytime.
              </p>
            </div>

            {/* RIGHT - FORM */}
            <form
              action="https://formsubmit.co/senaputra756@gmail.com"
              method="POST"
              autoComplete="off"
              className="bg-[#0759a6]  p-8 rounded-2xl"
              data-aos="fade-up"
              data-aos-delay="1500"
              data-aos-duration="2200"
              data-aos-easing="ease-out-cubic"
              data-aos-one="true"
            >

              {/* IMPORTANT SETTINGS */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:5173/" />

              <h2 className="text-xl text-black font-semibold mb-4">Send Message</h2>

              <div className="flex flex-col text-black gap-5">

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-white">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Input Name..."
                    className="border border-zinc-600 bg-white p-2 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-white">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Input Email..."
                    className="border border-zinc-600 bg-white p-2 rounded-md"
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-white">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Input Message..."
                    className="border border-zinc-600 bg-white p-2 rounded-md"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full text-white cursor-pointer p-3 rounded-md bg-black hover:bg-zinc-800 transition"
                >
                  Send Message
                </button>

              </div>
            </form>

          </div>
        </div>
        {/* KONTAK */}
      </div>


    </>

  )

}

export default App
