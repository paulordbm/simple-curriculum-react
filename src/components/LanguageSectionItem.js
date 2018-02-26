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
  language: string,
  proficiency: 1 | 2 | 3 | 4 | 5,
  isNative: boolean
};

const proficiencyDescription = (
  proficiency: 1 | 2 | 3 | 4 | 5,
  isNative: boolean
) => {
  switch (proficiency) {
    case 1:
      return "Elementary Proficiency";
    case 2:
      return "Limited Working Proficiency";
    case 3:
      return "Professional Working Proficiency";
    case 4:
      return "Full Professional Proficiency";
    case 5:
      return isNative ? "Native Proficiency" : "Bilingual Proficiency";
    default:
      return "";
  }
};

export const LanguageSectionItem = ({
  language,
  proficiency,
  isNative
}: propTypes) => {
  return (
    <div className="pt-2 pb-2 mr-4">
      <h1 className="font-bold text-blue-darkest text-sm">{language}</h1>
      <p className="mt-1 font-light italic text-xs text-blue">
        {proficiencyDescription(proficiency, isNative)}
      </p>
    </div>
  );
};
