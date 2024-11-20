import React from "react";
import { useEffect } from "react";
import { Contact } from "../index.js";

function ContactUs() {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
  return (
    <div>
      <Contact />
    </div>
  );
}

export default ContactUs;
