// @flow
import React from "react";

type propTypes = {
  children: Object,
  title: string
};

export const ContentSection = ({ children, title }: propTypes) => {
  return (
    <div className="pt-2 pb-2 pl-6 pr-6 flex flex-col">
      <h1 className="font-semibold text-lg text-blue-dark underline uppercase">
        {title}
      </h1>
      {children}
    </div>
  );
};
