import Image from "next/image";
import React from "react";

import "@/styles/AboutMe.css";

function AboutMe() {
  return (
    <section id="app_about">
      <header className="header">
        <h1 className="text">About Me</h1>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon"
          aria-hidden="true"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
          <path d="M15 19l2 2l4 -4"></path>
        </svg>
      </header>
      <div id="about">
        <div className="content">
          <p className="text">
            My name is <span className="resalted">Eddyer Morales</span>,
            sometimes he calls me eddy. I started learning programming at home,
            when I was 12 years old.{" "}
            <span className="resalted">
              At the moment I am reinforcing my knowledge and learning more
            </span>
            .
          </p>
          <p className="text">
            It has created innovative projects, such as{" "}
            <span className="resalted">
              artificial intelligence chat, Discord bots and web applications
            </span>
            . It's really a good start.
          </p>
          <p className="text">
            Well currently I have a goal and that is to be a{" "}
            <span className="resalted">
              good developer and be the best in my school
            </span>
            , and at the same time create good and quality projects.
          </p>
        </div>
        <figure className="image">
          <div className="container">
            <Image
              className="img"
              src={"/me.webp"}
              alt="Photo of me"
              width="200"
              height="200"
              loading={"lazy"}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}

export default AboutMe;
