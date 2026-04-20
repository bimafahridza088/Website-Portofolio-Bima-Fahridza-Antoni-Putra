import HeroImage from "/assets/hero2.jpeg";

const Image = {
  HeroImage,
};

export default Image;

import Proyek1 from "/assets/proyek/proyek1.png";
import Proyek2 from "/assets/proyek/proyek2.jpg";
import Proyek3 from "/assets/proyek/proyek3.png";
import Proyek4 from "/assets/proyek/proyek4.jpg";
import Proyek5 from "/assets/proyek/proyek5.png";
import Proyek6 from "/assets/proyek/proyek6.png";

export const listProyek = [
  {
    id: 1,
    gambar: [Proyek1, Proyek2, Proyek3, Proyek4],
    nama: "Irrigation Network Rehabilitation Project Kabupaten Tegal, Provinsi Jawa Tengah, Indonesia July 2025 – December 2025",
    desk: [
      "Drafter: Developed, refined, and revised technical drawings using AutoCAD based on design plans and actual field conditions, ensuring high accuracy and practical applicability for construction",
      "Quality Control (QC): Performed on-site quality inspections through technical testing such as slump tests and sand cone tests, ensuring compliance with engineering standards and project specifications",
      "Quantity Estimator: Conducted detailed quantity take-off and material estimation to support cost efficiency and effective project planning",
      "Data Analysis & Reporting: Processed testing data and project progress using Microsoft Excel, and prepared structured technical reports to support evaluation and decision-making",
      "Field Coordination: Collaborated with engineers and site teams to ensure alignment between drawings, planning, and on-site execution",
    ],
     tools: ["Total Station", "Excel", "Civil 3D", "Autocad"],
    category: "survey and design",
    dad: "200",
  },
  {
    id: 2,
    gambar: [Proyek5, Proyek6,],
    nama: "Integrated Project – Civil Engineering Drafter Wisata Waduk Tanjungan, Tuban Jawa Timur Indonesia February 2025 – June 2025",
    desk: [
      "Drafter: Produced and improved detailed technical drawings using AutoCAD based on team planning outputs, ensuring compliance with engineering drawing standards and precision requirements",
      "Engineering Interpretation: Translated planning concepts into clear, accurate, and practical working drawings for technical implementation",
      "Technical Documentation: Assisted in preparing structured project documents, including working drawings, technical details, and supporting data",
      "Team Collaboration: Worked closely with the planning team to synchronize design updates, revisions, and ensure consistency across technical documents",
      "Problem Solving: Identified potential inconsistencies in drawings and provided engineering-based solutions aligned with civil engineering principles",
    ],
    tools: ["Total Station", "Excel", "Civil 3D", "Autocad"],
    category: "survey and design",
    dad: "300",
  },
];

export const skillsData = {
  technical: [
    "AutoCAD",
    "ArcGis",
    "Revit",
    "HecRass",
    "MPP",
    "2D Drafting",
    "3D Drafting",
    "Architectural Drawing",
    "Structural Drawing",
    "Surveying",
    "Cost Estimation",
    "Project Supervision",
  ],
  professional: [
    "Effective Communication",
    "Teamwork",
    "Leadership",
    "Adaptability",
    "Fast Learning",
    "Time Management",
    "Problem Solving",
    "Attention to Detail",
    "Responsiveness to Feedback",
  ],
};
