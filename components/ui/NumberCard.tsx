import React from 'react'
import Image from "next/image";

const NumberCard = () => {
  return (
    <div className=' relative grid grid-cols-2 grid-rows-2 gap-6'>

        <div className=' h-[289px] bg-[#1C1A1A] rounded-4xl'>
              <div className=' absolute left-[70px] top-[50px] font-bold text-[20px] leading-[30px] tracking-normal uppercase'>Cutting-Edge Insights</div>
              <div className=' mt-[180px] flex gap-16 m-4 ' >
<Image className=' mt-8' src="/one.png" alt="" width={300} height={300} />
<p>Gain firsthand knowledge from top AI experts and pioneers shaping the industry.</p>
              </div>
        </div>

        <div className=' h-[289px] bg-[#1C1A1A] rounded-4xl'>
<div className=' absolute right-[230px] top-[50px] font-bold text-[20px] leading-[30px] tracking-normal uppercase'>Hands-On Learning</div>
              <div className='flex gap-16 mt-[190px] m-4'>
              <Image className=' mt-8' src="/two.png" alt="" width={300} height={300} />
<p>Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills.</p>
              </div>
        </div>

        <div className=' h-[289px] bg-[#1C1A1A] rounded-4xl'>
<div className=' absolute left-[200px] top-[370px] font-bold text-[20px] leading-[30px] tracking-normal uppercase'>Exclusive Networking</div>
              <div className='mt-[180px] flex gap-16 m-4'>
                <p>Connect with AI leaders, investors, startups, and fellow professionals at curated networking events.</p>
                <Image className=' mt-12' src="/three.png" alt="" width={117} height={117} />
              </div>
        </div>

        <div className=' h-[289px] bg-[#1C1A1A] rounded-4xl'>
<div className=' absolute right-[60px] top-[370px] font-bold text-[20px] leading-[30px] tracking-normal uppercase'>Innovation Showcase</div>
              <div className='mt-[180px] flex gap-16 m-4'>
                <p>Explore groundbreaking AI solutions, from emerging startups to tech giants redefining the future.</p>
                <Image className=' mt-12' src="/four.png" alt="" width={117} height={117} />
              </div>
        </div>


    </div>
  )
}

export default NumberCard