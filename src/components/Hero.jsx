import { motion } from "framer-motion";
import ComputersCanvas from "./canvas/Computers";
import { styles } from "../styles";
const Hero = () => {
  return (
    <section className="relative mx-auto w-full h-screen ">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl max-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Ray</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Transforming your vision into <br className="sm:block hidden" />a
            stunning website with responsive design.
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-10 bottom-32 w-full mx-auto flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex items-start justify-center p-2">
            <motion.div
              className="w-3 h-3 rounded-full bg-secondary mb-1"
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            ></motion.div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
