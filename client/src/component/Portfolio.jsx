import React from "react";
import Fresheat from "./fresheat.png";
import Ceramic from "./ceramic.png";
import Portfolio from "./portfolio.png";
import Material from "./Material.png";

const projects = [
  {
    title: "Portfolio Website",
    image: Portfolio,
    link: "https://rahul-portfolio07.netlify.app/",
    description:
      "Personal portfolio built with React and Tailwind CSS showcasing my skills, projects, and experience. Responsive design and smooth user experience with modern UI techniques.",
  },
  {
    title: "Frshheat (Food-Website)",
    image: Fresheat,
    link: "https://freshheat.netlify.app/",
    description:
      "Developed a fully functional food ordering website using React that allows users to browse menu items, add items to the cart, filter items by category and place orders. Implemented client-side routing, dynamic pages, and a responsive user interface.",
  },
  {
    title: "Ceramic (E-commerce)",
    image: Ceramic,
    link: "https://ceramicrahul.netlify.app/",
    description:
      "Developed a fully functional E-commerce website using React that allows users to browse menu items, add items to the cart and place orders. Implemented client-side routing, dynamic pages, and a responsive user interface..",
  },
  {
    title: "Material Design (Express + Js)",
    image: Material,
    link: "https://materialdesign-rahul.netlify.app/",
    description:
      "A full-featured web dashboard application built with Express.js, HTML, CSS, and JavaScript. The project serves multiple frontend pages with clean routing, user authentication, and a responsive UI designed to enhance productivity.",
  },
];

function Projects() {
  return (
    <section className="py-10 ms-0 xl:ms-[280px] px-4" id="portfolio">
      <h1 className="relative text-[30px] font-semibold mb-4 inline-block after:block after:w-16 after:h-[3px] after:bg-blue-500 after:mt-1">
        My projects
      </h1>

      <div className="mt-2 grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mt-4">{project.title}</h3>
            <p className="text-gray-600 mt-2 flex-grow text-justify">
              {project.description}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 self-start bg-rose-500	 text-white px-5 py-2 rounded-md hover:bg-rose-700 transition-colors duration-300"
            >
              Visit Website →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
