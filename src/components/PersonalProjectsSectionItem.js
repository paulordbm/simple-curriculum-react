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

import { ListItem } from "./ListItem";

type propTypes = {
  projectTitle: string,
  startDate: Date,
  endDate: Date,
  isPresent: boolean,
  achievements: string[]
};

export const PersonalProjectsSectionItem = ({
  projectTitle,
  startDate,
  endDate,
  isPresent,
  achievements
}: propTypes) => {
  let dateString = `${startDate.getMonth()}/${startDate.getFullYear()} - `;
  dateString = dateString.concat(
    isPresent ? "Present" : `${endDate.getMonth()}/${endDate.getFullYear()}`
  );

  let listItems = [];

  for (const achievement of achievements) {
    listItems.push(<ListItem key={achievement} item={achievement} />);
  }

  return (
    <div className="pt-2 pb-2">
      <h3 className="font-normal text-blue-darkest text-sm">{projectTitle}</h3>
      <p className="mt-1 font-light italic text-xs text-blue">{dateString}</p>
      <ul className="list-reset">{listItems}</ul>
    </div>
  );
};
