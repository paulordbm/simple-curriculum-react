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
  jobTitle: string,
  company: string,
  companyDescription: string,
  startDate: Date,
  endDate: Date,
  isPresent: boolean,
  city: string,
  country: string,
  isRemote: boolean,
  achievements: string[],
  contactName: string,
  contactRole: string,
  contactEmail: string
};

export const WorkExperienceSectionItem = ({
  jobTitle,
  company,
  companyDescription,
  startDate,
  endDate,
  isPresent,
  city,
  country,
  isRemote,
  achievements,
  contactName,
  contactRole,
  contactEmail
}: propTypes) => {
  let dateString = `${startDate.getMonth()}/${startDate.getFullYear()} - `;
  dateString = dateString.concat(
    isPresent ? "Present" : `${endDate.getMonth()}/${endDate.getFullYear()}`
  );
  dateString = dateString.concat(" - ");
  dateString = dateString.concat(
    isRemote ? "Remote Job" : `${city}/${country}`
  );

  let listItems = [];

  for (const achievement of achievements) {
    listItems.push(<ListItem key={achievement} item={achievement} />);
  }

  return (
    <div className="pt-2 pb-2">
      <h1 className="font-bold text-blue-darkest text-lg">{jobTitle}</h1>
      <h2 className="font-normal text-blue-darkest text-base">{company}</h2>
      <p className="mt-1 font-light italic text-xs text-blue">{dateString}</p>
      <p className="font-light italic text-xs text-grey-dark">
        {companyDescription}
      </p>
      <p className="mt-1 font-light italic text-xs text-blue">
        Achievements/Tasks
      </p>
      <ul className="list-reset">{listItems}</ul>
      <div className="flex flex-row mt-1 font-light italic text-xs">
        <p className="text-blue mr-1">Contact:</p>
        <p className="text-blue-darkest font-normal">{`${contactName} (${contactRole}) - ${contactEmail}`}</p>
      </div>
    </div>
  );
};
