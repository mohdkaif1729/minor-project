import React from "react";
import logo from "../../assets/images/logo.png";

function Logo({ width = "60px" }) {
  return (
    <div>
      <img src={logo} alt="logo" style={{ width }} />
    </div>
  );
}

export default Logo;
