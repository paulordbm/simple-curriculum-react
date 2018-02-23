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
    className={`p-1 mr-1 mb-1 bg-${color} rounded text-grey-lightest text-xs font-normal`}
  >
    {skillName}
  </div>
);

export const SkillsList = ({
  platforms,
  engines,
  frameworks,
  languages
}: propTypes) => {
  let skillBoxes = [];
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

  return <div className="pt-2 flex flex-row flex-wrap">{skillBoxes}</div>;
};
