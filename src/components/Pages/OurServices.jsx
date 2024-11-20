import React from "react";
import { useEffect } from "react";

function OurServices() {
  useEffect(() => {
    document.title = "Our Services";
  }, []);
  return (
    <div>
      <p>OurServices</p>
    </div>
  );
}

export default OurServices;
