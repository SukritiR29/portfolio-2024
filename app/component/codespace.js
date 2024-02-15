"use client";

import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";

const Code = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const doingRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="flex flex-col w-3/4 border-2 border-slate-900 m-2 bg-neutral-900 rounded-xl overflow-hidden">
      <div className="navbar bg-slate-950" style={{ height: "1px" }}>
        <div className="flex-1 p-0" style={{ height: "1px" }}>
          <a className="btn btn-ghost text-sm">Sukriti.dev</a>
        </div>
        <div className="flex-none p-0" style={{ height: "1px" }}>
          <ul className="menu menu-horizontal bg-lime-600 rounded-lg p-0">
            <li className="text-xs">
              <a>
                PROJECTS <FaPlay />
              </a>
            </li>
          </ul>
          {isOpen && (
            <div className="fixed inset-0 flex justify-center items-end z-50">
              <div className="absolute bottom-0 bg-white w-full max-h-80 overflow-y-auto rounded-t-lg shadow-xl">
                {/* Your project list goes here */}
                <ul className="p-4">
                  <li>Project 1</li>
                  <li>Project 2</li>
                  <li>Project 3</li>
                </ul>
              </div>
              <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={() => setIsOpen(false)}
              ></div>
            </div>
          )}
        </div>
      </div>

      <div className=" text-sm p-4 font-sans overflow-auto">
        <div ref={aboutRef} id="about">
          <h2
            className="text-md text-cyan-400"
            style={{ lineHeight: "4.0", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              1{" "}
            </span>{" "}
            // About me
          </h2>
          <p
            className="text-sm text-justify text-yellow-200"
            style={{ lineHeight: "2.5", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              2{" "}
            </span>
            A <span className="text-pink-500"> programmer </span> with an ardent
            passion for{" "}
            <span className="text-lime-500">
              Web Developing and Data Structures.
            </span>
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              {" "}
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              3{" "}
            </span>{" "}
            To develop my talents & knowledge and learn more about my subject of
            study, <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              4{" "}
            </span>{" "}
            I have worked on a numerous{" "}
            <span className="text-pink-500"> impactful projects </span>, several{" "}
            <span className="text-cyan-400"> internships & hackathons. </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              5{" "}
            </span>{" "}
            I continue to fervently learn about relevant topics while actively
            working and learning <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              6{" "}
            </span>{" "}
            in the field of{" "}
            <span className="text-lime-500">Full-Stack Development</span> , and
            its derivatives.
          </p>
        </div>
        <span className="text-slate-500" style={{ letterSpacing: "0.5rem" }}>
          7{" "}
        </span>
        <br /> <br />{" "}
        <span className="text-slate-500" style={{ letterSpacing: "0.5rem" }}>
          8{" "}
        </span>
        <div ref={experienceRef} id="experience">
          <h2
            className="text-cyan-400 text-md"
            style={{ lineHeight: "4.0", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              9{" "}
            </span>{" "}
            // Experience
          </h2>
          <p
            className="text-sm text-justify text-yellow-200"
            style={{ lineHeight: "2.5", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              10{" "}
            </span>{" "}
            <span className="bg-neutral-800">
              {" "}
              // SDE Inter -
              <span className="text-pink-500"> Quinbay Technology </span> -
              Bangalore //
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            Worked with <span className="text-lime-400"> Vue.js </span> on a
            company's on going project. Created new features. <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              12{" "}
            </span>
            <span className="text-cyan-500">Modified the API calls</span> to
            prevent unnecessary page reloads. <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              13{" "}
            </span>{" "}
            Resolved over 45 bugs. Used{" "}
            <span className="text-lime-500">VueX </span> for proper routing of
            the pages.
          </p>
          <span
            className="text-slate-500"
            style={{ letterSpacing: "0.2rem ", lineHeight: "3.0rem" }}
          >
            14{" "}
          </span>
          <br />
          <p
            className="text-sm text-justify text-yellow-200"
            style={{ lineHeight: "2.5", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              15{" "}
            </span>{" "}
            <span className="bg-neutral-800">
              // SDE Intern - <span className="text-pink-500"> MiniOrange</span>{" "}
              - Pune //{" "}
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              16{" "}
            </span>{" "}
            Developed a user-friendly application to showcase{" "}
            <span className="text-lime-500"> Metamask wallet </span>details,{" "}
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              17{" "}
            </span>{" "}
            leveraging{" "}
            <span className="text-cyan-500">
              NextJS, Metamask API, Supabase, and ethers.js.{" "}
            </span>{" "}
            Implemented <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              18{" "}
            </span>{" "}
            a one-click login flow. Used nonce and{" "}
            <span className="text-pink-500">JWT to authenticate</span> users.
            Employed <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              19{" "}
            </span>{" "}
            ethers.js library to facilitate cryptographic operations.
          </p>
          <span
            className="text-slate-500"
            style={{ letterSpacing: "0.2rem", lineHeight: "2.5rem" }}
          >
            20{" "}
          </span>
        </div>
        <span
          className="text-slate-500"
          style={{ letterSpacing: "0.2rem", lineHeight: "2.0rem" }}
        >
          21{" "}
        </span>
        <div ref={skillsRef} id="skills">
          <h2
            className="text-cyan-400 text-md"
            style={{ lineHeight: "4.0", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              22{" "}
            </span>
            // Tech Stack //
          </h2>
          <p
            className="text-sm text-justify text-yellow-200"
            style={{ lineHeight: "2.5", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              23{" "}
            </span>
            Javascript, <span className="text-cyan-500">React,</span>{" "}
            <span className="text-pink-500">NextJS,</span>{" "}
            <span className="text-lime-500">Vue,</span>{" "}
            <span className="">Java,</span>{" "}
            <span className="text-cyan-500">TypeScript</span> <br />
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              24{" "}
            </span>
            <span className="text-cyan-500">C++,</span>{" "}
            <span className="text-lime-500">TailwindCSS,</span>{" "}
            <span className="">FIgma,</span>{" "}
            <span className="text-cyan-500">MongoDB,</span>{" "}
            <span className="text-pink-500">MySQL,</span>{" "}
            <span className="">HTML</span>
          </p>
        </div>
        <br />
        <span className="text-slate-500" style={{ letterSpacing: "0.2rem" }}>
          25{" "}
        </span>
        <div ref={doingRef} id="doing">
          <h2
            className="text-cyan-400 text-md"
            style={{ lineHeight: "4.0", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              9{" "}
            </span>{" "}
            // What I'm Doing
          </h2>
          <p
            className="text-sm text-justify text-yellow-200"
            style={{ lineHeight: "2.5", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              10{" "}
            </span>{" "}
            <span className="bg-neutral-800">
              {" "}
              <span className="text-pink-500"> // Projects </span>
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            Consistently working on web projects and internships and deploying{" "}
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              16{" "}
            </span>{" "}
            them relevant to the field, all of which could be viewed on the
            projects section.
          </p>
          <p
            className="text-sm text-justify text-yellow-200"
            style={{ lineHeight: "2.5", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              10{" "}
            </span>{" "}
            <span className="bg-neutral-800">
              {" "}
              <span className="text-pink-500"> // Contrubutions </span>
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            Contributing to the community with Google Developers Students CLub{" "}
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            as a UI Lead for 2 years. Conducting workshops on UI UX development
            and <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>{" "}
            related challenges. <br />{" "}
          </p>
          <p
            className="text-sm text-justify text-yellow-200"
            style={{ lineHeight: "2.5", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              10{" "}
            </span>{" "}
            <span className="bg-neutral-800">
              {" "}
              <span className="text-pink-500"> // Hackathons </span>
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            Participating in hackathons, working on several problem statements,
            building <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            solutions and networking among people with same interests <br />{" "}
          </p>
        </div>
        <span
          className="text-slate-500"
          style={{ letterSpacing: "0.2rem", lineHeight: "3.0rem" }}
        >
          25{" "}
        </span>
        <div ref={contactRef} id="contact">
          <h2
            className="text-cyan-400 text-md"
            style={{ lineHeight: "4.0", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              22{" "}
            </span>
            // Get in touch //
          </h2>
          <p
            className="text-sm text-justify text-yellow-200"
            style={{ lineHeight: "2.5", letterSpacing: "0.1rem" }}
          >
            {" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              23{" "}
            </span>
            <span className="text-pink-500">Drop me a message at</span>{" "}
            <span className="text-cyan-500">
              <a href="mailto:sukritirajora@gmail.com" className="underline">
                {" "}
                sukritirajora@gmail.com
              </a>
            </span>{" "}
            <br />
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              24{" "}
            </span>
            <span className="text-lime-500">
              or get in touch through LinkedIn
            </span>{" "}
            <span className="text-cyan-500">
              <a
                href="https://www.linkedin.com/in/sukriti-rajora-48b4aa218"
                className="underline"
              >
                Sukriti Rajora
              </a>
            </span>{" "}
          </p>
        </div>
        <span
          className="text-slate-500"
          style={{ letterSpacing: "0.2rem", lineHeight: "3.0rem" }}
        >
          25{" "}
        </span>
        <br />
      </div>
    </div>
  );
};

export default Code;
