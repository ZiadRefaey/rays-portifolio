import { useEffect, useState } from "react";
import BallCanvas from "./canvas/Ball";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants/constants";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:1000px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div>
      {!isMobile ? (
        <div className="flex flex-row gap-10 justify-center flex-wrap">
          {technologies.map(function (technology, index) {
            return (
              <div className="w-[180px] h-[180px]" key={index}>
                <BallCanvas icon={technology.icon}></BallCanvas>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {technologies.map((technology) => (
            <div
              className="w-28 h-28 flex items-center justify-center rounded-full bg-tertiary shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              key={technology.name}
            >
              <div className="w-20 h-20 rounded-full bg-teritary flex items-center justify-center transform hover:rotate-12 transition-all duration-300">
                <img
                  className="w-16 h-16"
                  src={technology.icon}
                  alt={technology.name}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
