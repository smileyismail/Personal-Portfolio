import React from "react";

import { socialAccounts } from "../../data/social";

const Social = () => {
  return (
    <div className="fixed hidden sm:block left-6 md:left-10 bottom-0 z-50">
      <div className="flex flex-col justify-center items-center gap-8 text-2xl ">
        {socialAccounts.map((account) => (
          <a
            key={account.id}
            href={account.link}
            target="_"
            title={account.name}
            className="hover:scale-125 hover:text-accent duration-200 hover:-translate-y-2"
          >
            {account.icon}
          </a>
        ))}
      </div>

      <div className="w-[1px] h-20 bg-customText mx-auto mt-4"></div>
    </div>
  );
};

export default Social;
