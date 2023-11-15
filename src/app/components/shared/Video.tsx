import React from 'react'

const Video = () => {
  return (
    <video className='absolute w-auto min-w-full min-h-full max-w-none' src={"/public/vid.mp4"} autoPlay loop muted></video>
  )
}

export default Video