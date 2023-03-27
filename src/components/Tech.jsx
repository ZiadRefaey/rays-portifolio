import React from "react";
import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";
const Tech = () => {
  return (
    <div className="flex flex-row gap-10 justify-center flex-wrap">
      {technologies.map(function (technology, index) {
        return (
          <div className="w-[180px] h-[180px]" key={index}>
            <BallCanvas icon={technology.icon}></BallCanvas>
          </div>
        );
      })}
    </div>
  );
};

export default SectionWrapper(Tech, "");
