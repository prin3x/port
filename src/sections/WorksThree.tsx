import { Button } from "@mui/material";
import React, { ReactElement } from "react";

interface Props {}

function WorksThree({}: Props): ReactElement {
  return (
    <div className="main-bg sm:py-36 xs:py-10 h-screen px-10 md:px-28">
      <div className="flex justify-center md:pt-20 items-center flex-col-reverse xs:flex-row ">
        <div className="flex">
          <img
            src="/assets/works/me-calendar.png"
            alt=""
            className="md:w-2/4 xs:w-5/6 md:hidden"
          />
          <img
            src="/assets/works/me-lg.png"
            alt=""
            className="md:w-4/6 md:ml-28 w-3/6 mx-auto xs:hidden"
          />
        </div>
        <div className="wh-full md:block flex justify-center flex-col items-start">
          <div className="text-4xl xs:pt-0 md:pt-20 md:text-7xl">
            <span className="font-bold">Internal Management </span>App
          </div>
          <div className="works-example-desc font-thin text-left mt-3">
            This app allows user to create event on calendar, make blog posts,
            book meeting rooms etc.
          </div>
          <div className="font-bold text-left mt-2 md:text-3xl">
            STACKS : NextJS - NestJS - MySQL
          </div>
          <div className="font-regular text-left text-sm">
            ROLE : Frontend / Backend Engineer
          </div>
          <div className="">
            <img
              src="/assets/works/me-calendar.png"
              alt=""
              className="md:w-3/4 mx-auto w-3/6 hidden md:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorksThree;
