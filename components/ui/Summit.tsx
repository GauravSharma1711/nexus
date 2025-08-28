import React from 'react'
import Image from "next/image";
const Summit = () => {
  return (
    
      <div className=' relative '>

       <div className=' absolute top-[90px] flex justify-between  '>
        <p className=' absolute w-[259px] h-[30px] left-[60px] font-bold leading-[30px] ' >OCTOBER 15-17, 2052</p>
        <p className=' absolute h-[30px] w-[553px] left-[627px] font-bold leading-[30px]' >Horizon Convention Center, TechCity, Utopolis</p>
      </div>

    <div>
           <div className=' absolute top-[200px] left-[60px]'>
               <h1 className=' font-bold text-[100px] leading-[100%] tracking-[0%]'>NEXT GEN-AI</h1>
               <h1 className=' font-bold text-[100px] leading-[100%] tracking-[0%]'>SUMMIT</h1>
           </div>
           <div className=' z-[1] absolute top-[470px] left-[60px]'>
            <p className=' w-[928px] h-[60px] font-light text-[18px] leading-[30px] tracking-[0%]'>
              Explore the cutting-edge innovations shaping the future of artificial intelligence.
              <br />
Join global leaders and visionaries for two days of insights, discussions, and breakthroughs.
            </p>
           </div>
           <div className=' absolute top-[640px] left-[60px] h-[74px] w-[334px] px-[50px] '>
             <button className="bg-gradient-to-r from-[#0147FF] to-[#00B0FF12] text-white font-light px-12 py-3 rounded-full cursor-pointer">
             <span className="w-[197px] h-[30px] flex items-center gap-2">
  Early bird tickets
<Image src="/union-1.png" alt="" width={17} height={17} />
</span>


</button>

           </div>
    </div>
<div className=' absolute z-0 top-[340px] left-[636.25] rotate-[-75.75deg] '>
  <Image src="/B1.png" alt="" width={436} height={442} />
</div>

    </div>
  )
}

export default Summit