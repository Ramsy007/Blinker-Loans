import { useEffect } from "react"

const StartingVideo = ({onVideoEnd}) => {

  useEffect(()=>{
    const timer = setTimeout(onVideoEnd, 2000)
    return () => clearTimeout(timer);
  }, [onVideoEnd])
  return (
    <div className="intro-video-container">
      <video autoPlay muted className="intro-video">
        <source  src="./video/blinker_logo.mp4" type="video/mp4"/>
        your browser does not support the video tag.
      </video>
      
    </div>
  )
}

export default StartingVideo;