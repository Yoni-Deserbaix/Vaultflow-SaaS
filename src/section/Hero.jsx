import { motion } from "framer-motion";
import Button from "../components/button";

export default function Hero() {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="mt-28 text-center max-md:mt-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 0 }}
      >
        <Button
          text="We just raised $20M in Series B. Learn more"
          className="mx-auto flex max-w-[417px] cursor-default justify-center border-opacity-30 py-2.5 max-sm:mx-auto max-sm:max-w-80 max-sm:p-1.5 max-sm:text-xs"
          invert
        />
      </motion.div>
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="m-7 text-7xl font-medium text-[#ECECEC] max-md:m-4 max-md:text-4xl"
      >
        Modern analytics <br />
        <span className="bg-gradient-to-r from-[#ecececbe] to-[#ececec5c] bg-clip-text text-transparent">
          for the modern world
        </span>
      </motion.h1>
      <motion.p
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-lg font-light text-[#ECECECA6] opacity-95 max-md:mx-4 max-md:text-xs"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse varius enim in eros elementum tristique.
      </motion.p>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="m-auto mt-8 flex max-w-xl items-center justify-center gap-4 max-md:mt-4"
      >
        <Button
          text="Download the app"
          className="py-2.5 max-sm:px-3 max-sm:text-xs"
        />
        <Button
          text="Talk to an expert"
          invert
          className="py-2.5 max-sm:px-3 max-sm:text-xs"
        />
      </motion.div>
    </div>
  );
}
