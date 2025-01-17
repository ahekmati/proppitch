import MuxPlayer from "@mux/mux-player-react";
import React from "react";

const page = () => {
  return (
    <div>
      <MuxPlayer
        style={{
          width: "100%",
          height: "50%",
        }}
        streamType="on-demand"
        // The video you will create in Mux, take its playback ID and replace it here.
        playbackId="EcHgOK9coz5K4rjSwOkoE7Y7O01201YMIC200RI6lNxnhs"
        metadata={{
          video_id: "video-id",
          video_title: "Intro Video",
          viewer_user_id: "user-id",
        }}
        autoPlay
      />
    </div>
  );
};

export default page;