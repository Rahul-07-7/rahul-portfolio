import React, { useState, useEffect } from "react";
import rahulImg from "./photo.jpeg";

const sections = [
  { id: "home", label: "Home", icon: "fa-house" },
  { id: "about", label: "About", icon: "fa-user" },
  { id: "resume", label: "Resume", icon: "fa-file" },
  { id: "portfolio", label: "Portfolio", icon: "fa-images" },
  { id: "contact", label: "Contact", icon: "fa-envelope" },
];

function Sidebar() {
  const [active, setActive] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "home";
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = section.id;
        }
      }
      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    setActive(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsSidebarOpen(false);
  };

  return (
    <div className="font-popins">
      <div className="fixed top-5 right-5 z-50 xl:hidden">
        <button
          className="text-white bg-indigo-700 p-3 rounded-full shadow-lg"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </div>

      <div
        className={`bg-black text-white h-full xl:hidden fixed top-0 left-0 z-40 transition-transform duration-300
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-[270px] overflow-auto`}
      >
        <div className="flex justify-center flex-col items-center">
          <div className="mt-5">
            <img
              src={rahulImg}
              alt="Rahul Jogadiya"
              className=" w-[120px] h-[120px] rounded-full border-8 border-gray-700"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-7">Rahul Jogadiya</h1>
          <div className="flex mt-5 gap-3">
            {[
              {
                icon: "linkedin",
                url: "https://www.linkedin.com/in/rahul-jogadiya-1b6671270/",
              },
              {
                icon: "instagram",
                url: "https://www.instagram.com/ig_.rahul._/?igsh=MXgxNzQyMGtocmRyeA%3D%3D#",
              },
              {
                icon: "facebook",
                url: "https://www.facebook.com/people/Rahul/pfbid02uMj7hucvHPGoG2s3ZJ9d8TVDfTzDxSMceXPWEtSPmbvDpc9z2GJHvrVKdsYeDRH4l/?rdid=TydebsVIlNGardUR&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19FW2ESG7Z%2F",
              },
              {
                icon: "whatsapp",
                url: "https://wa.me/917984289055",
              },
            ].map(({ icon, url }) => (
              <a
                key={icon}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] flex items-center justify-center bg-gray-600 rounded-full text-[20px] text-white hover:bg-gray-500"
              >
                <i className={`fa-brands fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <nav>
          <ul className="ps-10 pt-8 pb-3 cursor-pointer">
            {sections.map(({ id, label, icon }) => (
              <li
                key={id}
                onClick={() => handleClick(id)}
                className={`text-[20px] flex items-center gap-4 mb-5 px-2 rounded-md text-gray-400
                  ${
                    active === id
                      ? "text-white font-semibold"
                      : "text-blue-300 hover:text-gray-300"
                  }`}
              >
                <i className={`fa-solid ${icon} text-indigo-400`}></i>
                <span className="ml-2">{label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="hidden xl:block fixed top-0 left-0 h-screen w-[270px] bg-black text-white overflow-auto">
        <div className="flex justify-center flex-col items-center">
          <div className=" rounded-full mt-5">
            <img
              src={rahulImg}
              alt="Rahul Jogadiya"
              className="rounded-full w-[120px] h-[120px] border-8 border-gray-700"
            />
          </div>
          <h1 className="text-2xl font-semibold mt-7">Rahul Jogadiya</h1>

          <div className="flex mt-5 gap-3">
            {[
              {
                icon: "linkedin",
                url: "https://www.linkedin.com/in/rahul-jogadiya-1b6671270/",
              },
              {
                icon: "instagram",
                url: "https://www.instagram.com/ig_.rahul._/?igsh=MXgxNzQyMGtocmRyeA%3D%3D#",
              },
              {
                icon: "facebook",
                url: "https://www.facebook.com/yourusername",
              },
              {
                icon: "whatsapp",
                url: "https://wa.me/917984289055",
              },
            ].map(({ icon, url }) => (
              <a
                key={icon}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[40px] h-[40px] flex items-center justify-center bg-gray-600 rounded-full text-[20px] text-white hover:bg-indigo-500"
              >
                <i className={`fa-brands fa-${icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <nav>
          <ul className="ps-10 pt-8 pb-3 cursor-pointer">
            {sections.map(({ id, label, icon }) => (
              <li
                key={id}
                onClick={() => handleClick(id)}
                className={`text-[20px] flex items-center gap-4 mb-5 px-2 rounded-md text-gray-400
                  ${
                    active === id
                      ? "text-white font-semibold"
                      : "text-blue-300 hover:text-gray-300"
                  }`}
              >
                <i className={`fa-solid ${icon} text-indigo-400`}></i>
                <span className="ml-2">{label}</span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
