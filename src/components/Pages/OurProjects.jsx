import React from "react";
import { useEffect } from "react";
import { OurProjectsTop } from "../index.js";

function OurProjects() {
  useEffect(() => {
    document.title = "Our Projects";
  }, []);
  return (
    <div>
      <OurProjectsTop />
    </div>
  );
}

export default OurProjects;
