import React from "react";
import video from "/images/video.png";
import play from "/images/play.png";

function VideoCard() {
  return (
    <div className=" relative h-[40vh] md:h-[80vh] w-full">
      <div className="absolute inset-0 bg-black/50"></div>
      <img
        src={play}
        alt="Play icon"
        className=" absolute top-1/2 left-1/2 -translate-[50%] size-20 z-10"
      />
      <img src={video} alt="video" className=" w-full h-full" />
    </div>
  );
}

export default VideoCard;
