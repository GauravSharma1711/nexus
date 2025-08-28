import React from 'react'
import Image from "next/image";
const PastAttendee = () => {
  return (
    <div className=' flex flex-col  relative  '>

      <div className=' flex items-center  '>

        <div className=' absolute left-0'>
            <h1 className='   h-[60px] w-[1000px] font-bold text-[50px] leading-[100%] tracking-[0%] capitalize'>What Past Attendees Say</h1>
        </div>
        <div className=' flex gap-4 absolute right-0  '>
<Image src="/btn1.png" alt="" width={74} height={74} />
<Image src="/btn2.png" alt="" width={74} height={74} />
<Image
 className='absolute right-[115px] top-[25px] ' 
 src="/arrow1.png" alt="" width={27} height={27} />

<Image 
className='absolute right-[24px] top-[25px] '
src="/arrow2.png" alt="" width={27} height={27} />
        </div>

          </div>

<div className=' absolute top-[200px]'>




  <div className=" absolute left-[0px]  w-[500px] h-[443px] opacity-100  rounded-[50px] bg-[#1A1A1A]">
      
   <h1
     className="
    absolute  w-[320px] h-[60px] rotate-0 opacity-100 top-[90px] left-[60px]
     text-[#FFFFFF] font-syne font-bold text-[30px] leading-[30px] tracking-[0%] uppercase" >THE BEST AI <br/> EVENT! </h1>


    <p 
    className='font-normal text-[17px] leading-[30px] tracking-[0%]
    w-[400px] h-[90px] absolute top-[200px] left-[60px] text-[#FFFFFF]
    '
    >
From hands-on workshops to visionary talks,<br/>
 this summit is a must-attend for AI <br/>
 professionals.

    </p>


    <div className=' flex gap-4
    absolute w-[223px] h-[58px] rotate-0 opacity-100 top-[340px] left-[60px] rounded-[100px]"
    '>
      <Image src="/a2.png" alt="" width={50} height={50} className=' rounded-full' />
       <p className=' text-[#FFFFFF] h-[30px] w-[153px]'>
        Elena Rojas <br/>
       AI Researcher, DeepMind
       </p>
    </div>




   </div>



     <div className="w-[400px] h-[443px] opacity-100 bg-[#0147FF]  left-[296px] rounded-[50px] absolute">

 <h1
     className="
    absolute  w-[320px] h-[60px] rotate-0 opacity-100 top-[90px] left-[60px]
     text-[#FFFFFF] font-syne font-bold text-[30px] leading-[30px] tracking-[0%] uppercase" >THE BEST AI <br/> EVENT! </h1>


    <p 
    className='font-normal text-[17px] leading-[30px] tracking-[0%]
    w-[400px] h-[90px] absolute top-[200px] left-[60px] text-[#FFFFFF]
    '
    >
From hands-on workshops to visionary talks,<br/>
 this summit is a must-attend for AI <br/>
 professionals.

    </p>


    <div className=' flex gap-4
    absolute w-[223px] h-[58px] rotate-0 opacity-100 top-[340px] left-[60px] rounded-[100px]"
    '>
      <Image src="/a2.png" alt="" width={50} height={50} className=' rounded-full' />
       <p className=' text-[#FFFFFF] h-[30px] w-[153px]'>
        Elena Rojas <br/>
       AI Researcher, DeepMind
       </p>
    </div>


     </div>




        <div className=" flex flex-col w-[500px] h-[443px] opacity-100 bg-[#DEDEE0] left-[718px] rounded-[50px] absolute">

    <h1
     className="
    absolute  w-[320px] h-[60px] rotate-0 opacity-100 top-[90px] left-[60px]
     text-[#1C1A1A] font-syne font-bold text-[30px] leading-[30px] tracking-[0%] uppercase" >UNMATCHED <br/> OPPORTUNITIES</h1>


    <p 
    className='font-normal text-[17px] leading-[30px] tracking-[0%]
    w-[400px] h-[90px] absolute top-[200px] left-[60px] text-[#1C1A1A]
    '
    >
From hands-on workshops to visionary talks,<br/>
 this summit is a must-attend for AI <br/>
 professionals.

    </p>


    <div className=' flex gap-4
    absolute w-[223px] h-[58px] rotate-0 opacity-100 top-[340px] left-[60px] rounded-[100px]"
    '>
      <Image src="/a3.png" alt="" width={50} height={50} className=' rounded-full' />
       <p className=' text-[#1C1A1A] h-[30px] w-[153px]'>
        David Laurent <br/>
        CEO, FutureAI Labs
       </p>
    </div>

        </div>



</div>
        

    </div>
  )
}

export default PastAttendee