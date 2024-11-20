import React from "react";
import { Input } from "../index.js";
import ContactUsImage from "../../assets/images/ContactUsImage.webp";

function Contact() {
  return (
    <div>
      <div className="bg-[#08162c] text-white p-10">
        <p className="font-bold text-xl">Contact Us</p>
        <h1 className="text-6xl font-bold">Let&apos;s Start Planning</h1>
      </div>

      <div className="p-24 bg-[#e3dfd3] grid grid-cols-2 gap-8">
        <form action="" className="grid grid-cols-2 gap-8">
          <Input label="First name" type="text" className="" />
          <Input label="Last name" type="text" />
          <Input label="Email" type="email" classForContainer="col-span-2" />
          <Input label="Phone" type="tel" />
          <Input label="Number Of guests" type="text" />
          <Input
            label="Type Of Query"
            type="text"
            classForContainer="col-span-2"
          />
          <button
            type="submit"
            className="bg-[#4c6181] text-white rounded-md col-span-2"
          >
            Submit
          </button>
        </form>
        <div>
          <img
            src={ContactUsImage}
            alt="celebration image"
            className="rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
