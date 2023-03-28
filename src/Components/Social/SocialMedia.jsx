import React from "react";
import { motion } from "framer-motion";

import { socialAccounts } from "../../data/social";

const anchorVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: 0, opacity: 1 },
  hover: { y: -4, transition: { delay: -10 } },
};

const Social = () => {
  return (
    <div className="fixed hidden sm:block left-6 md:left-10 bottom-0 z-50">
      <div className="flex flex-col justify-center items-center gap-8 text-2xl ">
        {socialAccounts.map((account) => (
          <motion.a
            key={account.id}
            href={account.link}
            target="_"
            title={account.name}
            className="hover:scale-125 hover:text-accent duration-200"
            variants={anchorVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 - account.id / 10 }}
            whileHover="hover"
          >
            {account.icon}
          </motion.a>
        ))}
      </div>

      <div className="w-[1px] h-20 bg-customText mx-auto mt-4"></div>
    </div>
  );
};

export default Social;
