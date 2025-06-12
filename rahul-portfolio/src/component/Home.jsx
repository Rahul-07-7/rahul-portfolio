import React from "react";
import rahulImg from "./rahul.jpeg";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  return (
    <div>
      <section id="home">
        <div className="ms-0 xl:ms-[280px] relative">
          <img
            src={rahulImg}
            alt="Rahul Jogadiya"
            className="h-[70vh]  w-[100vw]  sm:h-[100vh]"
          />
          <div className="absolute top-[50%] sm:top-[80%px] md:top-[250px] left-4">
            <h1 className="text-black text-[25px] font-semibold xs:text-[30px] sm:text-[40px] lg:text-[55px]">
              Rahul Jogadiya
            </h1>

            <h3 className="text-black text-[20px] ">
              I'm
              <Typewriter
                words={[" Full Stack Devloper"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={60}
                delaySpeed={1000}
              />
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
