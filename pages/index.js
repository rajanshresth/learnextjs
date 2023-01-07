import React from 'react'
import Image from 'next/image'

export default function Home() {
  const [index, setIndex] = React.useState(1)

  const handleLeftSlider = () => {
    setIndex(index === 0 ? 3 : index - 1)
  }

  const handleRightSlider = () => {
    setIndex(index === 3 ? 0 : index + 1)
  }
  console.log(index)
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      <h1 className='grid justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500  text-5xl font-extrabold my-8'>
        The best slider ever
      </h1>
      
      <div className="relative overflow-hidden grid justify-center items-center rounded-lg shadow-xl">
        {index===0 ? <div className="relative h-56 bg-center bg-cover">
          <Image src="/boat.jpg" width={500} height={500} />
        </div> : null}
        { index===1 ? <div className="relative h-56 bg-center bg-cover" >
            <Image src="/lake.jpg" width={500} height={500} />
        </div> : null}
        { index===2 ? <div className="relative h-56 bg-center bg-cover" ><Image src="/sky.jpg" width={500} height={500} /></div> : null }
        {index===3 ? <div className="relative h-56 bg-center bg-cover"><Image src="/tree.jpg" width={500} height={500} /></div> : null}

        <div className="absolute top-0 left-0 w-full h-full">
          <button onClick={handleRightSlider} className="absolute top-0 left-0 w-12 h-12 focus:outline-none rounded-full bg-transparent hover:bg-gray-800" style={{ top: '50%', transform: 'translateY(-50%)' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          </button>
          <button onClick={handleLeftSlider} className="absolute top-0 right-0 w-12 h-12 focus:outline-none rounded-full bg-transparent hover:bg-gray-800" style={{ top: '50%', transform: 'translateY(-50%)' }}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}
