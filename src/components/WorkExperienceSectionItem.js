// @flow
import React from "react";

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

const renderAchievement = item => (
  <li className="pt-1 font-normal text-blue-darkest text-sm flex flex-row">
    <div className="w-2 mr-2 text-2xs text-blue text-center">
      <i className="mt-1 fa fa-circle" />
    </div>
    {item}
  </li>
);

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
    listItems.push(renderAchievement(achievement));
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
