// @flow
import React from "react";

type propTypes = {
  degree: string,
  institution: string,
  startDate: Date,
  endDate: Date,
  isPresent: boolean,
  city: string,
  country: string,
  isRemote: boolean
};

export const EducationSectionItem = ({
  degree,
  institution,
  startDate,
  endDate,
  isPresent,
  city,
  country,
  isRemote
}: propTypes) => {
  let dateString = `${startDate.getMonth()}/${startDate.getFullYear()} - `;
  dateString = dateString.concat(
    isPresent ? "Present" : `${endDate.getMonth()}/${endDate.getFullYear()}`
  );
  dateString = dateString.concat(" - ");
  dateString = dateString.concat(
    isRemote ? "Remote Job" : `${city}/${country}`
  );

  return (
    <div className="pt-2 pb-2">
      <h1 className="font-bold text-blue-darkest text-lg">{degree}</h1>
      <h2 className="font-normal text-blue-darkest text-base">{institution}</h2>
      <p className="mt-1 font-light italic text-xs text-blue">{dateString}</p>
    </div>
  );
};
