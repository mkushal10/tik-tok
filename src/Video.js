import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    };
    return (
        <div className="video">
          <video 
            className="video__player"
            loops
            onClick={onVideoPress}
            ref={videoRef}
            src="https://v16m.tiktokcdn.com/e1b9ceae76f708a9e5e0bdf5f4bf06d5/5f34f710/video/tos/useast2a/tos-useast2a-ve-0068c002/22cf1e7ddb0342be808caae99d23b7e4/?a=1233&amp;br=4336&amp;bt=2168&amp;cr=0&amp;cs=0&amp;dr=0&amp;ds=3&amp;er=&amp;l=202008110817200101151761491F017F60&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;qs=0&amp;rc=amZrZzlpPDttdTMzZjczM0ApaWU4N2hpOjs3NzozZWU6NmdpcTBoL2ZvXm1fLS0vMTZzcy80NDA1YzJiXzM1MC9jNGI6Yw%3D%3D&amp;vl=&amp;vr="></video>
          {/* <VideoFooter /> */}
          {/* <VideoSidebar /> */}
      </div>
  )
}

export default Video;