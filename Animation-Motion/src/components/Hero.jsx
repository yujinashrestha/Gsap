import React, { useRef } from 'react'


const Hero = () => {
    const videoSrc=(index)=>{
        return `videos/hero-${index}.mp4`
    }
    const [currentIndex, setCurrentIndex] = React.useState(1);
    const [isLoading, setIsLoading] = React.useState(true);
    const [loadedVideos, setLoadedVideos] = React.useState(0)
    const [hasClicked, sethasClicked] = React.useState(false);
    const totalvideos=4;
    const nextvidRef=useRef("null")
    const handleonclick=()=>{
        setCurrentIndex((currentIndex%totalvideos)+1)
    }
    const handlevideoload=()=>{
        setLoadedVideos(prev=> prev+1)
        setIsLoading(false)
    }

    
  return (
    <div className='h-dvh w-dwd overflow-x-hidden'>
        <div id='Video-Frame' className='h-dvh w-dwd z-10 text-center'>
          <div className='h-40 text-center absolute z-50 opacity-0 hover:scale-150 hover:opacity-100 transition-all duration-500 ease-in-out top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div id='current-video' className='text-2xl font-bold text-blue-300' onClick={handleonclick}>
                <video
                src={videoSrc((currentIndex%totalvideos)+1)}
                ref={nextvidRef}
                onLoad={handlevideoload}></video>
        
                
            </div>
            </div>  
        </div>
    </div>
  )
}

export default Hero