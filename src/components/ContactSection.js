// @flow
import React from "react";

type propTypes = {
  email: string,
  city: string,
  country: string,
  linkedIn: string,
  phone: string,
  website: string
};

export const ContactSection = ({
  email,
  city,
  country,
  linkedIn,
  phone,
  website
}: propTypes) => {
  return (
    <div className="pt-2 pb-2 pl-6 pr-6 bg-indigo-darkest flex flex-row text-sm text-grey-lightest">
      <div className="flex flex-col w-1/2">
        <div className="flex-row">
          <i className="w-4 text-center fa fa-envelope mr-2" />
          {email}
        </div>
        <div className="flex-row mt-1 mb-1">
          <i className="w-4 text-center fa fa-map-marker mr-2" />
          {city}, {country}
        </div>
        <div className="flex-row">
          <i className="w-4 text-center fa fa-linkedin mr-2" />
          {linkedIn}
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex-row">
          <i className="w-4 text-center fa fa-mobile mr-2" />
          {phone}
        </div>
        <div className="flex-row mt-1">
          <i className="w-4 text-center fa fa-globe mr-2" />
          {website}
        </div>
      </div>
    </div>
  );
};
