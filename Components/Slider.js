import React from 'react'
import Image from 'next/image'

export default function Slider() {
    const [index,setIndex] = React.useState(0);
    

  return (
    <div>
        <div className="flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <button onClick={handleLeftSlider} className="bg-red-200 text-white font-bold py-2 px-4 rounded-full">
                    Left
                </button>
                <button onClick={handleRightSlider} className="bg-red-200 text-white font-bold py-2 px-4 rounded-full mt-4">
                    Right
                </button>

                {/** show color reponsible for the index */}
                <div className="flex justify-center items-center mt-4">
                    <div className={`w-4 h-4 rounded-full ${index === 0 ? 'bg-red-200' : 'bg-gray-200'}`}></div>
                    <div className={`w-4 h-4 rounded-full ${index === 1 ? 'bg-red-200' : 'bg-gray-200'} ml-2`}></div>
                    <div className={`w-4 h-4 rounded-full ${index === 2 ? 'bg-red-200' : 'bg-gray-200'} ml-2`}></div>
                </div>

            </div>
        </div>
    </div>
  )
}
