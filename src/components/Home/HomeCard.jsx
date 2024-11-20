import React from "react";

function HomeCard({ sNo, heading, paragraph, imagePath }) {
  return (
    <div className="m-8 flex bg-[#eeeeee] p-8 rounded-lg">
      <div className="w-[70%]">
        <div className="w-[60%]">
          <p className="my-4">{sNo}</p>
          <h2 className="font-bold text-5xl mb-40">{heading}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
      <div>
        <img
          src={`${imagePath}`}
          alt="annual conferences"
          className="rounded-lg "
        />
      </div>
    </div>
  );
}

export default HomeCard;
