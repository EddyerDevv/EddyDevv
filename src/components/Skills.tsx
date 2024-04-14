import React from "react";
import Image from "next/image";

import skills from "@/libs/skills";
import "@/styles/Skills.css";

function Skills() {
  return (
    <section id="app_skills">
      <header className="header">
        <span className="text">Skills & Tools</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M7 8l-4 4l4 4"></path>
          <path d="M17 8l4 4l-4 4"></path>
          <path d="M14 4l-4 16"></path>
        </svg>
      </header>
      <div id="skills">
        {skills.map((skill) => {
          return (
            <article className="skill" key={skill.name}>
              <div className="bg">
                <Image
                  className="img"
                  src={skill.image}
                  alt={skill.name}
                  loading={"lazy"}
                  width={70}
                  height={70}
                />
              </div>
              <header className="header">
                <Image
                  className="img"
                  src={skill.image}
                  alt={skill.name}
                  width={70}
                  height={70}
                />
                <div className="info">
                  <span className="name">{skill.name}</span>
                  <span className="type">{skill.type}</span>
                </div>
              </header>
              <div className="content">
                <p className="description">{skill.description}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
