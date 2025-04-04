"use client";

import React, { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

const Code = () => {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const doingRef = useRef(null);
  const contactRef = useRef(null);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");

  const btnRef = React.useRef();

  return (
    <div className="lg:relative lg:flex lg:flex-col lg:w-3/4 w-5/6 border-2 border-slate-900 lg:m-2 ml-2 mt-1 bg-neutral-900 rounded-xl overflow-hidden">
      <div className="navbar bg-slate-950" style={{ height: "1px" }}>
        <div className="flex-1 p-0" style={{ height: "1px" }}>
          <a className="btn btn-ghost text-sm">Sukriti.dev</a>
        </div>
        <div className="flex-none p-0" style={{ height: "1px" }}>
          <ul className="menu menu-horizontal bg-lime-600 rounded-lg p-0 cursor-pointer">
            <li className="text-xs">
              <button ref={btnRef} onClick={onOpen}>
                PROJECTS <FaPlay />
              </button>
              <Drawer
                isOpen={isOpen}
                placement="bottom"
                onClose={onClose}
                finalFocusRef={btnRef}
                className="bg-white"
              >
                <DrawerOverlay />
                <DrawerContent className="bg-slate-900">
                  <DrawerHeader>
                    {" "}
                    <div className=" lg:text-md text-xs font-sans font-justify border border-slate-500 lg:p-1 rounded-t-lg">
                      <h2 className="hidden lg:block p-1 lg:ml-10 text-grey-500 lg:flex gap-2 flex">
                        PROJECTS{" "}
                        <AiOutlineFundProjectionScreen className=" text-lg" />
                      </h2>
                    </div>
                  </DrawerHeader>

                  <DrawerBody className="overflow-auto">
                    <div className="gap-0 overflow-auto text-slate-100">
                      <div className="lg:flex ">
                        <div className="lg:w-1/3 w-3/4 lg:m-6 m-1 mt-4 ml-4 text-md font-sans font-justify border border-yellow-500 lg:p-3 p-1 rounded-xl hover:bg-gray-700">
                          <h2 className="lg:pl-2 pl-3 lg:text-sm text-xs">
                            Curenimal
                          </h2>
                          <p className="text-xs p-2 pr-1 text-gray-400">
                            NextJS, Firebase, NextAuth, DaisyUI, TypeScript
                          </p>
                          <p className="lg:mt-2 ml-2 lg:text-sm text-xs lg:pl-2 lg:pr-2">
                            Curenimal - 🏥 A compassionate platform for swift
                            animal treatment and welfare. 🐾
                          </p>
                          <div className="flex gap-10 pl-2">
                            <a href="https://curenimal-app.vercel.app/">
                              <button className="bg-yellow-500 text-xs text-black font-semibold p-1 pl-3 pr-3 mt-4 rounded-md">
                                PROJECT
                              </button>
                            </a>
                            <a href="https://github.com/SukritiR29/curenimal-app">
                              <button className="border-yellow-500 text-xs border p-1 pl-3 pr-3 mt-4 rounded-md">
                                CODE
                              </button>
                            </a>
                          </div>
                        </div>{" "}
                        <div className="lg:w-1/3 w-3/4 lg:m-6 m-1 mt-4 ml-4 text-md font-sans font-justify border border-yellow-500 lg:p-3 p-1 rounded-xl hover:bg-gray-700">
                          <h2 className="lg:pl-2 pl-3 lg:text-sm text-xs">
                            Around You
                          </h2>
                          <p className="text-xs p-2 pr-1 text-gray-400">
                            Vue.js, VueX, OpenWeather API, TailwindCSS
                          </p>
                          <p className="lg:mt-2 ml-2 lg:text-sm text-xs lg:pl-2 lg:pr-2">
                            Around You - ☁️ Real-time weather updates for cities
                            worldwide. 🌍
                          </p>
                          <div className="flex gap-10 pl-2">
                            <a href="https://weather-app-sukritir29.vercel.app/">
                              <button className="bg-yellow-500 text-xs text-black font-semibold p-1 pl-3 pr-3 mt-4 rounded-md">
                                PROJECT
                              </button>
                            </a>
                            <a href="https://github.com/SukritiR29/around-you">
                              <button className="border-yellow-500 text-xs border p-1 pl-3 pr-3 mt-4 rounded-md">
                                CODE
                              </button>
                            </a>
                          </div>
                        </div>{" "}
                        <div className="lg:w-1/3 w-3/4 lg:m-6 m-1 mt-4 ml-4 text-md font-sans font-justify border border-yellow-500 lg:p-3 p-1 rounded-xl hover:bg-gray-700">
                          <h2 className="lg:pl-2 pl-3 lg:text-sm text-xs">
                            Sumedha
                          </h2>
                          <p className="text-xs p-2 pr-1 text-gray-400">
                            ReactJS, JavaScript, JWT, Figma, HTML, CSS
                          </p>
                          <p className="lg:mt-2 ml-2 lg:text-sm text-xs lg:pl-2 lg:pr-2">
                            A PWA that unites with parents 👨‍👩‍👦 to provide proper
                            holistic development to their children ⭐
                          </p>
                          <div className="flex gap-10 pl-2">
                            <a href="https://sih-child.vercel.app/">
                              <button className="bg-yellow-500 text-xs text-black font-semibold p-1 pl-3 pr-3 mt-4 rounded-md">
                                PROJECT
                              </button>
                            </a>
                            <a href="https://github.com/ishubham21/SIH-child">
                              <button className="border-yellow-500 text-xs border p-1 pl-3 pr-3 mt-4 rounded-md">
                                CODE
                              </button>
                            </a>
                          </div>
                        </div>{" "}
                      </div>
                      <div className="lg:flex mt-0">
                        <div className="lg:w-1/3 w-3/4 lg:m-6 m-1 mt-4 ml-4 text-md font-sans font-justify border border-yellow-500 lg:p-3 p-1 rounded-xl hover:bg-gray-700">
                          <h2 className="lg:pl-2 pl-3 lg:text-sm text-xs">
                            Wordle
                          </h2>
                          <p className="text-xs p-2 pr-1 text-gray-400">
                            NextJS, TailwindCSS
                          </p>
                          <p className="lg:mt-2 ml-2 lg:text-sm text-xs lg:pl-2 lg:pr-2">
                            Wordle - 🎨 Fun and challenging word-guessing game
                            with color-coded feedback. 🧠
                          </p>
                          <div className="flex gap-10 pl-2">
                            <a href="https://wordle-nextjs-eosin.vercel.app/">
                              <button className="bg-yellow-500 text-xs text-black font-semibold p-1 pl-3 pr-3 mt-4 rounded-md">
                                PROJECT
                              </button>
                            </a>
                            <a href="https://github.com/SukritiR29/wordle-nextjs">
                              <button className="border-yellow-500 text-xs border p-1 pl-3 pr-3 mt-4 rounded-md">
                                CODE
                              </button>
                            </a>
                          </div>
                        </div>{" "}
                        <div className="hidden lg:block lg:w-1/3 w-3/4 lg:m-6 m-2 ml-4 text-md font-sans font-justify border border-yellow-500 lg:p-3 p-1 rounded-xl hover:bg-gray-700">
                          <h2 className="lg:pl-2 pl-3 lg:text-sm text-xs">
                            User Admin
                          </h2>
                          <p className="text-xs p-2 pr-1 text-gray-400">
                            NextJS DaisyUI, Shade,API integration{" "}
                          </p>
                          <p className="lg:mt-2 ml-2 lg:text-sm text-xs lg:pl-2 lg:pr-2">
                            Admin User Portal - 🔧 Manage users, roles, and
                            access with ease. 👤✨
                          </p>
                          <div className="flex gap-10 pl-2">
                            <a href="https://user-member-portal.vercel.app/">
                              <button className="bg-yellow-500 text-xs text-black font-semibold p-1 pl-3 pr-3 mt-4 rounded-md">
                                PROJECT
                              </button>
                            </a>
                            <a href="https://github.com/SukritiR29/user-member-portal">
                              <button className="border-yellow-500 text-xs border p-1 pl-3 pr-3 mt-4 rounded-md">
                                CODE
                              </button>
                            </a>
                          </div>
                        </div>{" "}
                        <div className="hidden lg:block lg:w-1/3 w-3/4 lg:m-6 m-1 text-md font-sans font-justify border border-yellow-500 lg:p-3 p-1 rounded-xl hover:bg-gray-700">
                          <h2 className="lg:pl-2 pl-3 lg:text-sm text-xs">
                            QAre
                          </h2>
                          <p className="text-xs p-2 pr-1 text-gray-400">
                            NextJS, MongoDB, NextAuth, DaisyUI, ShadecnUI
                          </p>
                          <p className="lg:mt-2 ml-2 lg:text-sm text-xs lg:pl-2 lg:pr-2">
                            Transforming traditional QR 🔗 codes into dynamic,
                            trackable entities. 📈
                          </p>
                          <div className="flex gap-10 pl-2">
                            <a href="https://qare-liard.vercel.app/">
                              <button className="bg-yellow-500 text-xs text-black font-semibold p-1 pl-3 pr-3 mt-4 rounded-md">
                                PROJECT
                              </button>
                            </a>
                            <a href="https://github.com/AniruddhaSoni/qare">
                              <button className="border-yellow-500 text-xs border p-1 pl-3 pr-3 mt-4 rounded-md">
                                CODE
                              </button>
                            </a>
                          </div>
                        </div>{" "}
                      </div>
                    </div>
                  </DrawerBody>
                  <DrawerCloseButton className="p-4 pb-8 " />
                </DrawerContent>
              </Drawer>
            </li>
          </ul>
        </div>
      </div>

      <div className=" text-sm p-4 font-sans overflow-auto h-full">
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
            {"// About me"}
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
            Hey!! I am Sukriti. An
           
            {" "}
            <span className="text-lime-500">
             Automation Engineer
            </span> {" "} and a {" "}
            <span className="text-lime-500">
             Frontend Developer
            </span> {" "}
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
            with a passion for building efficient, scalable solutions. {" "} 
               <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              4{" "}
            </span>{" "}
            Currently, I work at{" "}
            <span className="text-pink-500"> Wizehive India, </span>, where I design and implement {" "}  
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              5{" "}
            </span>{" "}
            <span className="text-cyan-400">comprehensive Playwright automation frameworks
             </span> for  <span className="text-pink-500">Bright Funds</span>, 
             <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.5rem" }}
            >
              6{" "}
            </span>{" "}
            enabling seamless regression testing and improving software reliability.
            
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
            {" // Experience "}
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
              {"// SDE Intern -"}
              <span className="text-pink-500"> Quinbay Technology </span> -
              {"Bangalore //"}
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            Worked with <span className="text-lime-400"> Vue.js </span> on a
            company&apos;s on going project. Created new features. <br />{" "}
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
              {"// SDE Intern -"}{" "}
              <span className="text-pink-500"> MiniOrange</span> {"- Pune //"}{" "}
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
            {" // Tech Stack //"}
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
            Javascript, <span className="text-cyan-500">Playwright,</span>{" "}
            <span className="text-pink-500">NextJS,</span>{" "}
            <span className="text-lime-500">React,</span>{" "}
            <span className="">JavaScript,</span>{" "}
            <span className="text-cyan-500">TypeScript</span> <br />
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              24{" "}
            </span>
            <span className="text-cyan-500">Postman,</span>{" "}
            <span className="text-lime-500">K6,</span>{" "}
            <span className="">Figma,</span>{" "}
            <span className="text-cyan-500">Vue,</span>{" "}
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
            {" // What I'm Doing"}
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
              <span className="text-pink-500"> {"// Projects"} </span>
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            Consistently working on web projects and deploying{" "}
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
              <span className="text-pink-500"> {"// Contrubutions"} </span>
            </span>
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            Contributing to the community with Google DSC. Collaborating{" "}
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>
            with other techies and conducting workshops on UI UX development
            <br />{" "}
            <span
              className="text-slate-500"
              style={{ letterSpacing: "0.2rem" }}
            >
              11{" "}
            </span>{" "}
            and automation. <br />{" "}
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
              <span className="text-pink-500"> {"// Hackathons"} </span>
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
            {" // Get in touch //"}
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
