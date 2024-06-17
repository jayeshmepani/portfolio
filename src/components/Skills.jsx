import React, { useEffect } from "react"; // Import React separately
import AOS from "aos";
import "aos/dist/aos.css";
import Img_prop from "./Img_prop";

// Import your constants
import {
  C,
  CPP,
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  Vue,
  MongoDB,
  PHP,
  NodeJS,
  ExpressJS,
  AngularJS,
  Java
} from "../constants/Constant"; // Ensure the path is correct

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { img: C, name: "C" },
        { img: CPP, name: "C++" },
        { img: Python, name: "Python" },
        { img: Java, name: "Java" },
        { img: Javascript, name: "Javascript" },
        { img: PHP, name: "PHP" },
      ],
    },
    {
      category: "Frontend Development",
      skills: [
        { img: HTML, name: "HTML" },
        { img: CSS, name: "CSS" },
        { img: TailwindCSS, name: "TailwindCSS" },
        { img: react, name: "React" },
        { img: Vue, name: "Vue" },
        { img: AngularJS, name: "AngularJS" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { img: NodeJS, name: "NodeJS" },
        { img: ExpressJS, name: "ExpressJS" },
        { img: MongoDB, name: "MongoDB" },
      ],
    },
    {
      category: "Tools & Platforms",
      skills: [
        { img: Git, name: "Git" },
        { img: Github, name: "Github" },
        { img: Vite, name: "Vite" },
      ],
    },
  ];

  return (
    <section className="Skills p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5">
      <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl">
        Skills
      </h1>
      {skillCategories.map((category) => (
        <div key={category.category} className="mt-10">
          <h2 className="text-3xl font-bold mb-5 text-[#00040f] dark:text-slate-300 text-center">
            {category.category}
          </h2>
          <div
            className="IMG grid place-content-center p-5 grid-cols-3 gap-9 max-sm:p-2"
            data-aos="zoom-out-up"
          >
            {category.skills.map((skill) => (
              <Img_prop key={skill.name} img={skill.img} name={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
