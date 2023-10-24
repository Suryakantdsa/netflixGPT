import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className='text-5xl font-bold my-6'>{title}</h1>
        <p className='w-1/3'>{overview.slice(0,200)+"...."}</p>
        <div className='my-4 '>
            <button className='bg-white text-black px-6 py-3 rounded-md hover:bg-opacity-90'> ▶ {" "} Play</button>
            <button className='bg-gray-500 text-white px-6 py-3 rounded-md mx-2 hover:bg-opacity-30'> + {" "} More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle