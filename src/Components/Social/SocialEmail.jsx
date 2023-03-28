import React from "react";
import { motion } from "framer-motion";

const SocialEmail = () => {
  return (
    <div className="fixed hidden sm:block right-6 md:right-10 bottom-0 z-50s">
      <motion.div
        className="verticalText text-xl hover:scale-110 hover:text-accent duration-200 hover:-translate-y-6"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <a href="mailto:smileyismail67@gmail.com" title="Send Email">
          smileyismail67@gmail.com
        </a>
      </motion.div>

      <div className="w-[1px] h-20 bg-customText mx-auto mt-4"></div>
    </div>
  );
};

export default SocialEmail;
