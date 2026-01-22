import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "AI Web Application",
    title: "AI-Powered Q&A Platform",
    description:
      "I built a full-stack AI-powered Q&A web app using FastAPI (backend) and Next.js (frontend), enabling users to ask natural language questions and receive instant, intelligent responses powered by Gemini AI.",
    link: "https://ai-qa-app-theta.vercel.app/",
  },
  {
    id: 2,
    image: card2,
    category: "Business Website",
    title: "Financial Services Platform",
    description:
      "I developed the Mbura Consulting business website to present professional financial and strategic advisory services, including accounting, payroll, and business growth solutions. The site highlights service offerings, client value, and contact options in a clear, responsive layout that supports user engagement and business inquiries.",
    link: "https://mburaconsulting.co.ke/",
  },
  {
    id: 3,
    image: card3,
    category: "Business Website",
    title: "Safety & Compliance Platform",
    description:
      "I developed the Amplitude Plant Inspectors business website to showcase professional plant inspection services in Kenya. The site highlights the company’s commitment to safety, efficiency, and environmental compliance, while providing clear information about inspection offerings and easy contact options.",
    link: "https://amplitudeplantinspectors.co.ke/",
  },
  {
    id: 4,
    image: card4,
    category: "Web Application",
    title: "Sales Admin Dashboard",
    description:
      "A modern, responsive admin dashboard designed for visualizing and managing sales data. Features interactive components such as charts, tables, and summary cards to support clear insights and effective monitoring of key performance indicators.",
    link: "https://admin-dashboard-teal-two.vercel.app/",
  },
  {
    id: 5,
    image: card5,
    category: "Web Application",
    title: "Real Estate Platform",
    description:
      "A modern, responsive real estate web application built with Next.js and Tailwind CSS. It allows users to browse, search, and view detailed property listings through a clean, intuitive interface. The project focuses on performance, usability, and scalable design, making it suitable for real-world property management and listing platforms.",
    link: "https://property-listing-pi-eight.vercel.app/",
  },
  {
    id: 6,
    image: card6,
    category: "Web Application",
    title: "Virtual Event Starter Kit",
    description:
      "A modern, responsive web application designed as a starter kit for virtual events. It provides users with essential event details, interactive sections, and clear navigation to support engaging online experiences. Built with performance and accessibility in mind, the interface adapts seamlessly across devices and serves as a foundation for scalable virtual event platforms.",
    link: "https://virtual-event-starter-kit-psi-ten.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here’s a selection of my recent work, showcasing my skills in building scalable applications, designing intuitive user experiences, and delivering reliable cloud-powered solutions.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center">
        <a
          href="https://github.com/souuja-ops"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
