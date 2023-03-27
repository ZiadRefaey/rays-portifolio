import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants/constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
function ServicesCard({ index, title, icon }) {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 90, scale: 6, speed: 4500 }}
          className={
            "bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          }
        >
          <img
            src={icon}
            className="w-16 h-16 object-contain"
            alt={title}
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Intoduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
        exercitationem asperiores corporis maiores delectus voluptates itaque
        eaque distinctio magni alias, soluta dicta placeat. Vel, eaque similique
        culpa molestias nobis dolorem laboriosam facilis officia voluptatibus
        corrupti fugit amet quisquam nesciunt earum?
      </motion.p>
      <div className="mt-20 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 place-items-center ">
        {services.map((service, index) => (
          <ServicesCard
            key={service.title}
            index={index}
            {...service}
          ></ServicesCard>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
