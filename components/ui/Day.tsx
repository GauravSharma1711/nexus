import React from 'react'
import Image from "next/image";

const Day = () => {
  return (
    <div className=' flex flex-col relative ' >
  {/* div1 */}
     <div className=' flex' >
        <div className=' flex flex-col' >
            <span  className=' absolute left-[90px] top-[150px] h-[48px] w-[115px] text-[30px] font-bold '>Day 1</span>
            <span className='absolute left-[90px]  top-[200px] h-[30px] w-[287px] text-[30px] font-bold leading-[30px] tracking-normal ' >09:00 – 19:00</span>
        </div>
          <div className='  absolute left-[510px] w-[598px] flex flex-col  '>
<h1 className=' absolute top-[150px] text-[30px] font-bold'>AI Innovations & Trends</h1>
<p className=' absolute top-[200px]'>The summit kicks off with a keynote, expert panels, and discussions <br/> on AI’s impact, ethics, and automation. Hands-on workshops and a <br/> networking event wrap up the day.</p>
          </div>

     </div>



 {/* div2 */}
    <div className=' flex' >
        <div className=' flex flex-col' >
            <span  className=' absolute left-[90px] top-[350px] h-[48px] w-[115px] text-[30px] font-bold '>Day 2</span>
            <span className='absolute left-[90px]  top-[400px] h-[30px] w-[287px] text-[30px] font-bold leading-[30px] tracking-normal ' >09:00 – 20:00</span>
        </div>
          <div className='  absolute left-[510px] w-[598px] flex flex-col gap-4 '>
<h1 className=' absolute top-[350px] text-[30px] leading-[100%] tracking-normal font-bold'>AI Technologies & <br/> Applications</h1>
<p className=' absolute top-[425px]'>Explore the latest in generative AI, robotics, and NLP, with industry- <br/> led discussions and tech demos. A startup showcase and investor <br/> insights highlight AI’s business potential.</p>
          </div>

     </div>


 {/* div3 */}
        <div className=' flex' >
        <div className=' flex flex-col' >
            <span  className=' absolute left-[90px] top-[550px] h-[48px] w-[115px] text-[30px] font-bold '>Day 3</span>
            <span className='absolute left-[90px]  top-[600px] h-[30px] w-[287px] text-[30px] font-bold leading-[30px] tracking-normal ' >09:30 – 16:00</span>
        </div>
          <div className='  absolute left-[510px] w-[598px] flex flex-col gap-4 '>
<h1 className=' absolute top-[550px] text-[30px] font-bold'>Future of AI & Networking</h1>
<p className=' absolute top-[600px]'>Dive into AI’s long-term impact, attend expert-led workshops, and <br/> watch the startup pitch competition. The event closes with a <br/> visionary keynote and final networking sessions.</p>
          </div>

     </div>


     {/* div4 */}
     <div className=' flex' >
 <Image 
 src="/Mark.png" alt="" width={240} height={297} 
 className=' absolute left-0 top-[700px]'
 />

    <button className=" absolute top-[750px] left-[500px] bg-gradient-to-r from-[#0147FF] to-[#00B0FF12] text-white font-light px-36 py-3 rounded-full cursor-pointer">
              <span className="w-[197px] h-[30px] flex items-center gap-2">
          View detailed schedule
 <Image src="/union-1.png" alt="" width={17} height={17} />
 </span>
 
 
 </button>

     </div>
 

    </div>
  )
}

export default Day