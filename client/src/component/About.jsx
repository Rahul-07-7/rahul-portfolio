import React from "react";
import rahulImg from "./photo.jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "Node.js", icon: faNodeJs },
  { name: "Express", icon: faNodeJs },
  { name: "MongoDB", icon: faDatabase },
  { name: "Git", icon: faGitAlt },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
};

function About() {
  return (
    <div>
      <section id="about">
        <div className="ms-0 xl:ms-[280px] px-4">
          <h1 className="mt-10 relative text-[35px] font-semibold mb-4 inline-block after:block after:w-16 after:h-[3px] after:bg-blue-500 after:mt-1">
            About
          </h1>

          <p className="mt-2 text-[18px] text-justify">
            Hello There I am Rahul, a full-stack developer with a solid
            foundation in HTML, CSS, JavaScript, React.js, and backend
            technologies like Node.js, Express, and MongoDB. I gained practical
            experience through academic projects and internships. Eager to
            contribute to innovative development teams and further enhance
            skills in both front-end and back-end technologies.
          </p>

          <div className="flex gap-4 mt-10">
            <div>
              <h1 className="font-semibold text-3xl mb-5">
                Full Stack Developer.
              </h1>
              <p>
                Passionate about building responsive web applications and
                learning new technologies.
              </p>
              <div className=" w-[100%] flex flex-col gap-7 sm:flex-row sm:justify-between mt-7">
                <div>
                  <div className="mb-3">
                    <span className="font-semibold text-[17px]">
                      <i className="fa-solid fa-arrow-right text-blue-400"></i>{" "}
                      Birthday :
                    </span>
                    <span> 20 Feb 2003</span>
                  </div>
                  <div className="mb-3">
                    <span className="font-semibold text-[17px]">
                      <i className="fa-solid fa-arrow-right text-blue-400"></i>{" "}
                      Phone :
                    </span>
                    <span> +91 7984289055</span>
                  </div>
                  <div className="mb-3">
                    <span className="font-semibold text-[17px]">
                      <i className="fa-solid fa-arrow-right text-blue-400"></i>{" "}
                      City :
                    </span>
                    <span> Bhavnagar</span>
                  </div>
                </div>
                <div>
                  <div className="mb-3">
                    <span className="font-semibold text-[17px]">
                      <i className="fa-solid fa-arrow-right text-blue-400"></i>{" "}
                      Age :
                    </span>
                    <span> 22</span>
                  </div>
                  <div className="mb-3">
                    <span className="font-semibold text-[17px]">
                      <i className="fa-solid fa-arrow-right text-blue-400"></i>{" "}
                      Email :
                    </span>
                    <span> jogadiyarahul007@gmail.com</span>
                  </div>
                  <div className="mb-3">
                    <span className="font-semibold text-[17px]">
                      <i className="fa-solid fa-arrow-right text-blue-400"></i>{" "}
                      Degree :
                    </span>
                    <span> B.E</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10">
            <h2 className="text-3xl font-bold mb-6">My Tech Stack</h2>
            <div className=" overflow-hidden">
              <Slider {...sliderSettings}>
                {skills.map((skill, index) => (
                  <div key={index} className="px-3">
                    <div className="h-full p-6 text-center bg-gradient-to-br from-[#e0f7fa] to-[#e3f2fd] rounded-2xl shadow-2xl border border-blue-200 hover:scale-105 transition-transform duration-300">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="text-5xl text-rose-400 mb-4 drop-shadow-sm"
                      />
                      <h3 className="text-lg font-semibold text-gray-800">
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
