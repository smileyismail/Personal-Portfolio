import React from "react";

import { socialAccounts } from "../../data/social";

const Footer = () => {
  return (
    <section className="flex justify-center items-center flex-col p-4 gap-4 bg-secondary w-screen">
      <div className="flex gap-6 text-xl">
        {socialAccounts.map((account) => (
          <a
            key={account.id}
            href={account.link}
            target="_"
            title={account.name}
            className="hover:scale-125 hover:text-accent duration-200 hover:-translate-y-1"
          >
            {account.icon}
          </a>
        ))}
      </div>

      <p className="text-sm text-center">
        Copyright © Syed Ismailuddin 2021 All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
