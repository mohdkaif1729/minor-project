import React from "react";
import bgVideo from "../../assets/videos/bg_video.mp4";

function BgVideo() {
  return (
    <div>
      <video src={bgVideo} controls autoPlay muted loop></video>
    </div>
  );
}

export default BgVideo;
