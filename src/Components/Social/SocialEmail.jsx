import React from "react";

const SocialEmail = () => {
  return (
    <div className="fixed hidden sm:block right-6 md:right-10 bottom-0 z-50s">
      <div className="verticalText text-xl hover:scale-110 hover:text-accent duration-200 hover:-translate-y-6">
        <a href="mailto:smileyismail67@gmail.com" title="Send Email">
          smileyismail67@gmail.com
        </a>
      </div>

      <div className="w-[1px] h-20 bg-customText mx-auto mt-4"></div>
    </div>
  );
};

export default SocialEmail;
