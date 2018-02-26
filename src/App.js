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
  AwardsSectionItem,
  ContactSection,
  ContentSection,
  EducationSectionItem,
  IntroSection,
  LanguageSectionItem,
  Page,
  PersonalProjectsSectionItem,
  SkillsList,
  WorkExperienceSectionItem
} from "./components";
import "./App.css";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="w-screen h-screen bg-grey-dark font-roboto flex flex-row">
        <div className="w-1/2 flex justify-center items-center">
          <Page currentPage={1} maxPages={2} date={new Date(2018, 2)}>
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
              <WorkExperienceSectionItem
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

              <WorkExperienceSectionItem
                jobTitle="Software Engineer"
                company="Toptal"
                companyDescription="Toptal a network of the top 3% of software engineering, design and finance talent, available on demand to help companies accelerate, adapt and scale."
                startDate={new Date(2016, 4)}
                isPresent={true}
                isRemote={true}
                achievements={[
                  "Worked with partners from London and Israel on their first mobile games.",
                  "Developed all gameplay elements and mechanics, as well as multiple Unity editor extensions and tools for easier content creation (level editors, content configuration/settings, etc.)."
                ]}
                contactName="Felipe Barcellos"
                contactRole="Toptal Core Team"
                contactEmail="felipe.barcellos@toptal.com"
              />
            </ContentSection>
          </Page>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Page currentPage={2} maxPages={2} date={new Date(2018, 2)}>
            {/**
              |--------------------------------------------------
              | Content Section - Work Experience
              |--------------------------------------------------
              */}
            <ContentSection title="work experience">
              <WorkExperienceSectionItem
                jobTitle="Software Engineer"
                company="INDT"
                companyDescription="Nokia/Microsoft-maintained technology institute located in the free-trade zone district of Manaus."
                startDate={new Date(2012, 1)}
                endDate={new Date(2016, 4)}
                city="Manaus"
                country="Brazil"
                achievements={[
                  "Helped finish development of accomplished Windows Phone exclusive game Wake Woody (2.5M downloads).",
                  "Developed the multi-platform game Woody, Endless Summer, in Unity, for Android, iOS and Windows Phone. Was responsible for UI, gameplay, optimization code.",
                  "Developed a complex solution to add BLE connectivity to a client's hardware, including a mobile/desktop configuration apps and prototype BLE dongle."
                ]}
                contactName="Sérgio Cavalcante"
                contactRole="Product Owner"
                contactEmail="sergio.cavalcante@indt.org.br"
              />
            </ContentSection>

            {/**
              |--------------------------------------------------
              | Content Section - Education
              |--------------------------------------------------
              */}
            <ContentSection title="education">
              <EducationSectionItem
                degree="Bachelor's in Electronics Engineering"
                institution="Federal University of Amazonas (UFAM)"
                startDate={new Date(2006, 5)}
                endDate={new Date(2013, 1)}
                city="Manaus"
                country="Amazonas"
              />
            </ContentSection>

            {/**
              |--------------------------------------------------
              | Content Section - Language
              |--------------------------------------------------
              */}
            <ContentSection title="language">
              <div className="flex flex-row">
                <LanguageSectionItem
                  language="Portuguese"
                  proficiency={5}
                  isNative={true}
                />
                <LanguageSectionItem language="English" proficiency={5} />
              </div>
            </ContentSection>

            {/**
              |--------------------------------------------------
              | Content Section - Language
              |--------------------------------------------------
              */}
            <ContentSection title="personal projects">
              <PersonalProjectsSectionItem
                projectTitle="The Battles Untold"
                startDate={new Date(2015, 4)}
                endDate={new Date(2015, 5)}
                achievements={[
                  "Brawler game developed for the Public Domain Jam 2. It features multiple playable characters, local multiplayer and singleplayer with AI-controlled bots. I was responsible for developing all the character controls, animations, special effects and gameplay mechanics. I also integrated everything with a custom built, hitbox engine."
                ]}
              />

              <PersonalProjectsSectionItem
                projectTitle="Shae, RelationShip, Break Up"
                startDate={new Date(2014, 5)}
                endDate={new Date(2014, 6)}
                achievements={[
                  "Set of games developed during a post grad specialization course in electronic games.",
                  "Did gameplay, sound-effects and game design for all games."
                ]}
              />
            </ContentSection>

            {/**
              |--------------------------------------------------
              | Content Section - Awards Section
              |--------------------------------------------------
              */}
            <ContentSection title="honor awards">
              <div className="flex flex-row">
                <div className="w-1/2">
                  <AwardsSectionItem
                    awardTitle="Honorable Mention"
                    awardIssuer="SBGames 2013"
                    date={new Date(2013, 10)}
                    achievements={["Best prototype game with Mutant Eggs."]}
                  />
                  <AwardsSectionItem
                    awardTitle="Best Game - Art"
                    awardIssuer="SBGames 2013"
                    date={new Date(2013, 10)}
                    achievements={["3rd place with Wake Woody."]}
                  />
                </div>
                <div className="ml-4 w-1/2">
                  <AwardsSectionItem
                    awardTitle="Best Game - Technology"
                    awardIssuer="SBGames 2013"
                    date={new Date(2013, 10)}
                    achievements={["3rd place with Wake Woody."]}
                  />
                  <AwardsSectionItem
                    awardTitle="Best Game - Sound/Music"
                    awardIssuer="SBGames 2014"
                    date={new Date(2014, 11)}
                    achievements={["Woody, Endless Summer was a finalist."]}
                  />
                </div>
              </div>
            </ContentSection>
          </Page>
        </div>
      </div>
    );
  }
}

export default App;
