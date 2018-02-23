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
import { ContactSection, IntroSection, SkillsSection } from "./components";
import "./App.css";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="w-screen h-screen flex flex-col justify-center align-center bg-silver-light font-roboto">
        <div className="a4 mx-auto overflow-hidden shadow-lg bg-white">
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
            | Section - Skills
            |--------------------------------------------------
            */}
          <SkillsSection
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
            languages={["C#", "C++", "Javascript", "Typescript", "HTML", "CSS"]}
          />
        </div>
      </div>
    );
  }
}

export default App;
