import React from "react";
import Section from "./Section";

function Resume() {
  return (
    <section id="resume">
      <div className="ms-0 xl:ms-[280px] px-4">
        <h1 className="mt-10 relative text-[35px] font-semibold mb-2 inline-block after:block after:w-16 after:h-[3px] after:bg-blue-500 after:mt-1">
          Resume
        </h1>
        <header className="mt-2 border-b pb-4 mb-6">
          <h1 className="text-[30px] font-semibold text-gray-800">
            RAHUL JOGADIYA
          </h1>
          <p className="text-lg">Full Stack Developer</p>
          <p>D-306 Mukhyamantri Aavas, Chitra, Bhavnagar</p>
          <p className="text-sm">
            📞
            <a href="tel:+917984289055" className=" hover:underline">
              +91 7984289055
            </a>
            <br /> 📧{" "}
            <a
              href="mailto:jogadiyarahul@gmail.com"
              className=" hover:underline"
            >
              jogadiyarahul@gmail.com
            </a>
          </p>
        </header>
        <div className="mx-auto bg-white p-6 shadow-md rounded-lg ">
          <Section title="Objective">
            <p className="text-justify">
              Aspiring full-stack developer with a solid foundation in HTML,
              CSS, JavaScript, and React.js. Gained practical experience through
              academic projects and internships. Eager to contribute to
              innovative development teams and further enhance skills in both
              front-end and back-end technologies.
            </p>
          </Section>

          <Section title="Education">
            <ul className="list-disc pl-5">
              <li>
                <strong>10th - B. M. Commerce High School:</strong> 80.86%
              </li>
              <li>
                <strong>12th - B. M. Commerce High School:</strong> 59.69%
              </li>
              <li>
                <strong>B.E. IT - Govt Engineering College, Bhavnagar:</strong>
                SPI 8.00 | CGPA 7.01
              </li>
            </ul>
          </Section>

          <Section title="Skills">
            <p>
              <strong>Frontend:</strong> HTML, CSS, Bootstrap, Tailwind CSS,
              JavaScript, React.js
            </p>
            <p>
              <strong>Backend:</strong> Node.js, Express.js, MongoDB
            </p>
            <p>
              <strong>Tools:</strong> Git, GitHub, VS Code
            </p>
          </Section>

          <Section title="Projects">
            <ul className="list-disc pl-5">
              <li>
                <strong>Internship at IT Hub Software Solution:</strong> HTML,
                CSS, JS, PHP, MySQL
              </li>
            </ul>
          </Section>

          <Section title="Languages">
            <p>Gujarati, Hindi, English</p>
          </Section>

          <Section title="Course">
            <p>Completed Full Stack Development course at IT Desk.</p>
          </Section>
        </div>
        <div className="mt-3">
          <a
            href="./Rahul_Jogadiya.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 bg-rose-500 text-white rounded-lg shadow hover:bg-rose-700 transition duration-200"
          >
            <i className="fa-solid fa-download"></i> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
