/*************************************************************************************************** 

Copyright (c) 2017 Paulo Renato de Barros Mendonça, licensed under the MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this
software and associated documentation files (the "Software"), to deal in the Software
without restriction, including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or
substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

***************************************************************************************************/

// @flow
import React, { Component } from "react";
import {
  ContactSection,
  ContentSection,
  IntroSection,
  SkillsList,
  WorkExperienceSection
} from "./components";
import "./App.css";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="w-screen h-screen flex flex-col justify-center align-center bg-grey-dark font-roboto">
        <div className="a4 mx-auto overflow-y-scroll shadow-lg bg-white rounded">
          {/**
            |--------------------------------------------------
            | Section - Introduction
            |--------------------------------------------------
            */}
          <IntroSection
            name="Paulo Renato de Barros Mendonça"
            professionalTitle="Pragmatic and Versitile Software Engineer"
            introduction="I have a degree in Electronics Engineering but have been developing software for more than 8 years. I'm married and have a beautiful , two years old son. I love Sim Racing, RPGs, CCGs and am a gamer since the Atari days. My versatility, creativity and ability to learn fast feed my passion for what I do."
          />

          {/**
            |--------------------------------------------------
            | Section - Contact Info
            |--------------------------------------------------
            */}
          <ContactSection
            email="paulo.rdbm@gmail.com"
            city="Manaus"
            country="Brazil"
            linkedIn="linkedin.com/in/paulordbm"
            phone="+55 92 99602-9580"
            website="paulordbm.wixsite.com/resume"
          />

          {/**
            |--------------------------------------------------
            | Content Section - Skills
            |--------------------------------------------------
            */}
          <ContentSection title="skills">
            <SkillsList
              platforms={["Android", "iOS", "Windows", "Mac", "Linux"]}
              engines={["Unity"]}
              frameworks={[
                "Qt",
                "Angular",
                "React",
                "React Native",
                "NodeJS",
                "ExpressJS",
                "MongoDB",
                "Mongoose"
              ]}
              languages={[
                "C#",
                "C++",
                "Javascript",
                "Typescript",
                "HTML",
                "CSS"
              ]}
            />
          </ContentSection>

          {/**
            |--------------------------------------------------
            | Content Section - Work Experience
            |--------------------------------------------------
            */}
          <ContentSection title="work experience">
            <WorkExperienceSection
              jobTitle="Software Engineer"
              company="INDT"
              companyDescription="Non-profit, independent technology institute working with clients from the free-trade zone district of Manaus and startups."
              startDate={new Date(2017, 3)}
              isPresent={true}
              city="Manaus"
              country="Brazil"
              achievements={[
                "Helped architect and develop a microservices-based backend application.",
                "Wrote a suite of integration tests for a Rest API with zero mocking for best value.",
                "Helped architect a re-streaming microservice for public surveillance camera feeds.",
                "Developed a front-end web application with a modern framework.",
                "Developed a multi-platform mobile application with Bluetooth capabilities and an always-on, persistent connection with a BLE hardware.",
                "Setup a MEAN-stack, microservices application boilerplate from scratch, complete with integration tests and Docker configuration."
              ]}
              contactName="Sérgio Cavalcante"
              contactRole="Product Owner"
              contactEmail="sergio.cavalcante@indt.org.br"
            />

            <WorkExperienceSection
              jobTitle="Software Engineer"
              company="Toptal"
              companyDescription="Toptal a network of the top 3% of software engineering, design and finance talent, available on demand to help companies accelerate, adapt and scale."
              startDate={new Date(2016, 4)}
              isPresent={true}
              isRemote={true}
              achievements={[
                "Worked with a new studio from London as the lead developer for it's innovative debut mobile game in Unity.",
                "Developed a fully playable prototype that enabled the studio owners to go after investments and seed capital.",
                "Worked with a partner from Israel on the development of their first mobile game in Unity.",
                "Developed all gameplay elements and mechanics, as well as multiple Unity editor extensions and tools for easier content creation (level editors, content configuration/settings, etc.)."
              ]}
              contactName="Felipe Barcellos"
              contactRole="Toptal Core Team"
              contactEmail="felipe.barcellos@toptal.com"
            />

            <WorkExperienceSection
              jobTitle="Software Engineer"
              company="INDT"
              companyDescription="Non-profit, Nokia/Microsoft-maintained technology institute working located in the free-trade zone district of Manaus."
              startDate={new Date(2012, 1)}
              endDate={new Date(2016, 4)}
              city="Manaus"
              country="Brazil"
              achievements={[
                "Helped finish development of accomplished Windows Phone exclusive game Wake Woody.",
                "Developed an innovative prototype game with Unity for Windows Phone (closed beta stage) to showcase it's capabilities during an event.",
                "Developed the multi-platform game Woody, Endless Summer, in Unity, for Android, iOS and Windows Phone. Was responsible for UI, gameplay, optimization code. Helped architect a standalone level editor.",
                "Developed a complex solution to add BLE connectivity to a client's hardware, including a mobile/desktop configuration apps and prototype hardware.",
                "Developed a desktop BLE bridge application that used IPC to fool a legacy app into communicating with the hardware wirelessly.",
                "Developed a setup application using Microsoft's Wix toolset."
              ]}
              contactName="Sérgio Cavalcante"
              contactRole="Product Owner"
              contactEmail="sergio.cavalcante@indt.org.br"
            />
          </ContentSection>
        </div>
      </div>
    );
  }
}

export default App;
