import React from "react";
import { NavLink } from "react-router-dom";

function Description() {
  return (
    <div className="bg-[#dac0a3] m-8 p-8 flex justify-center min-h-[30vh]">
      <div className=" w-[80%] text-center ">
        <div>
          <h1 className="text-7xl font-bold">
            Your Premier Choice For Corporate & Social Events
          </h1>
        </div>
        <div>
          <p className="mb-4 text-xl mt-8">It &apos; s Time to Glow</p>
          <p className="mb-4 w-[50%] mx-auto">
            At The Buzz Events, we pride ourselves on our ability to transform
            your vision into a reality. Our team of experienced event planners
            specialize in corporate events and fundraisers, and we offer a
            personalized service that caters to your specific needs. Check out
            our portfolio and let us make your event unforgettable.
          </p>
          <NavLink
            to="contact-us"
            className="border-2 border-black rounded-3xl px-3 py-2 hover:bg-black hover:text-white transition-all"
          >
            Start Planning Now
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Description;
