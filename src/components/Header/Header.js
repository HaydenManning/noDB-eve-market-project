import React from "react";
import("./Header.css");

// this is my stateless component
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <h1 className="title">Welcome to the Eve Market!</h1>
      </div>
      <div className="header-right">
        <a
          href="http://github.com/HaydenManning"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-3x fa-github" id="github" />
        </a>
        <a
          href="mailto:thaydenmanning@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fas fa-3x fa-envelope" id="email" />
        </a>
      </div>
    </div>
  );
};

export default Header;
