// @flow
import React from "react";

type propTypes = {
  platforms: string[],
  engines: string[],
  frameworks: string[],
  languages: string[]
};

const renderSkillBox = (skillName: string, color: string) => (
  <div
    className={`p-2 mr-2 mb-2 bg-${color} rounded text-grey-lightest text-sm font-light`}
  >
    {skillName}
  </div>
);

export const SkillsSection = ({
  platforms,
  engines,
  frameworks,
  languages
}: propTypes) => {
  var skillBoxes = [];
  for (const platform of platforms) {
    skillBoxes.push(renderSkillBox(platform, "grey-dark"));
  }

  for (const engine of engines) {
    skillBoxes.push(renderSkillBox(engine, "orange-dark"));
  }

  for (const framework of frameworks) {
    skillBoxes.push(renderSkillBox(framework, "teal-dark"));
  }

  for (const language of languages) {
    skillBoxes.push(renderSkillBox(language, "purple-dark"));
  }

  return (
    <div className="pt-2 pb-2 pl-6 pr-6 flex flex-col">
      <h1 className="font-semibold text-lg underline uppercase">Skills</h1>
      <div className="pt-2 flex flex-row flex-wrap">{skillBoxes}</div>
    </div>
  );
};
