import React from "react";
import Styles from "./Social.module.css";

const SocialEmail = () => {
  return (
    <div className={Styles.socialEmail}>
      <a href="mailto:smileyismail67@gmail.com" title="Send Email">
        smileyismail67@gmail.com
      </a>
      <div className={Styles.emailLine}></div>
    </div>
  );
};

export default SocialEmail;
