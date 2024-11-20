import React from "react";
import TheBuzzEvents from "../../assets/images/TheBuzzEvents.jpg";

function Heading() {
  return (
    <div className="flex justify-center mt-4">
      <img
        src={TheBuzzEvents}
        alt=""
        className=" h-20 rounded-md hover:shadow-2xl transition-shadow animate-fromLeftToCenter"
      />
    </div>
  );
}

export default Heading;
