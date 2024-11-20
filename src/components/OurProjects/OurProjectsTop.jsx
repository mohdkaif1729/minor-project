import React from "react";
import bgVideo from "../../assets/videos/bg_video.mp4";

function OurProjectsTop() {
  return (
    <div className="bg-[#eddecf] p-64">
      <div>
        <p className="text-xl font-bold">Project Spotlight</p>
        <h1 className="text-7xl font-semibold mt-4">
          From Planning to Perfection: Our Event Projects
        </h1>
      </div>
      <div className="my-16 ">
        <video src={bgVideo} muted autoPlay controls></video>
      </div>
      <div>
        <p className="text-[0.9rem]">
          At Annhad Events, we take pride in creating unforgettable events for
          our clients, no matter how big or small. Our team is dedicated to
          making each event unique and tailored to our clients&apos; specific
          needs. Browse our portfolio below to see some of our favorite
          projects.
        </p>
      </div>
    </div>
  );
}

export default OurProjectsTop;
