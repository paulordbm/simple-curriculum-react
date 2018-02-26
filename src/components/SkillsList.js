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
