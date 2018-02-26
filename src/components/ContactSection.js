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
    <div className="pt-2 pb-2 pl-6 pr-6 bg-indigo-darkest flex flex-row text-xs text-grey-lightest">
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
