import React from "react";
import OurServicesTopComponentImage from "../../assets/images/OurServicesTopComponentImage.webp";

function OurServicesTop() {
  return (
    <div className="bg-[#dadfd7] m-8 px-8 pt-24 rounded-2xl pb-8">
      <div className="grid grid-cols-2">
        <div>
          <h1 className="font-bold pr-10 text-5xl">
            Tailored Event Planning Services
          </h1>
        </div>
        <div>
          <p className="text-lg font-semibold">
            We offer a broad range of services to ensure that every detail is
            taken care of, from venue selection to catering.
          </p>
          <p className="mt-4 text-[0.9rem]">
            From concept to execution, Annhad Events ensures attention to detail
            is a top priority for all our clients. Our specialized event
            planning services for corporate events provide an all-encompassing
            solution that includes everything from vendor selection to day-of
            coordination. Contact us today to begin creating a stress-free,
            unforgettable experience.
          </p>
        </div>
      </div>
      <div className="mt-8 w-full">
        <img
          src={OurServicesTopComponentImage}
          alt="stage celebration image"
          className="rounded-xl w-full"
        />
      </div>
    </div>
  );
}

export default OurServicesTop;
