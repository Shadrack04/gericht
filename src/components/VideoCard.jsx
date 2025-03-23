import React from "react";
import video from "/images/video.png";
import play from "/images/play.png";

function VideoCard() {
  return (
    <div className=" relative h-[40vh] md:h-[100vh] w-full">
      <img
        src={play}
        alt="Play icon"
        className=" absolute top-1/2 left-1/2 -translate-[50%] size-20"
      />
      <img src={video} alt="video" className=" h-full" />
    </div>
  );
}

export default VideoCard;
