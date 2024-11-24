import React from "react";
import { AboutTop, AboutBottom } from "../index.js";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About Us";
  }, []);
  return (
    <div>
      <AboutTop />
      {/* <AboutBottom /> */}
    </div>
  );
}

export default About;
