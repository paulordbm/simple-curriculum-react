// @flow
import React from "react";

type propTypes = {
  name: string,
  professionalTitle: string,
  introduction: string
};

export const IntroSection = ({
  name,
  professionalTitle,
  introduction
}: propTypes) => {
  return (
    <div className="pt-2 pb-2 pl-6 pr-6 bg-indigo-darker">
      <h1 className="font-medium text-xl text-grey-lightest">{name}</h1>
      <h2 className="mt-2 mb-2 font-normal text-lg text-blue-light">
        {professionalTitle}
      </h2>
      <p className="font-light text-sm text-grey-lightest">{introduction}</p>
    </div>
  );
};
