import React from 'react'
import "../index.css"
import pfp from "../assets/pfp.jpg"

function Home({isReversed}) {
    const rev = isReversed ? 'flex-row-reverse' : 'flex-row'

  return (
    <div className={` ${isReversed ? 'bg-black' : 'bg-white'}`}>
    <section className={`w-full mx-auto md:w-11/12 lg:w-4/5 flex justify-center items-center p-10`}>
        <div className={`flex flex-col lg:${rev} gap:16 md:gap-24 lg:gap-40 items-center`}>
            <div className={`w-full lg:w-1/2 flex items-center flex-col font-montserrat tracking-wide ${isReversed ? 'text-white' : 'text-black'}`}>
                <h1 className="font-semibold text-3xl md:text-5xl lg:text-7xl mb-4 md:mb-8 lg:mb-16">Welcome to my portfolio</h1>
                <p className="text-m md:text-xl lg:text-2xl mb-8 md:mb-0">
                    I am a web developer with a passion for creating dynamic and responsive websites. Proficient in front-end and back-end technologies, I specialize in crafting seamless and user-friendly digital experiences.
                </p>
            </div>
            <img src={pfp} className='relative w-full aspect-w-1 aspect-h-1 lg:w-1/2'/>
        </div>
    </section>
    </div>
  )
}

export default Home