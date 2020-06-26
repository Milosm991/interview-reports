import React from "react";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`footer mt-auto py-3 ${style.footer}`}>
      <div className="container">
        <span>&copy; BIT 2020 Coders Imploders</span>
      </div>
    </footer>
  );
};

export { Footer };
