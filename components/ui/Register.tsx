import React from 'react'
import Image from "next/image";

const Register = () => {
  return (
    <div className=' flex flex-col'>

   
  <div className=' flex justify-between relative ' >
        <h1 className=' w-[860px] h-[120px] font-bold text-[100px] leading-[100%] tracking-normal '>REGISTER <br/> NOW</h1>

        <p className=' mt-[30px] w-[295px] h-[60px] text-[13px] leading-[20px] tracking-normal ' >
         Secure your spot at the Next-Gen <br/> AI Summit 2052 and join the <br/> future of AI innovation.
        </p>
    </div>


<div className=' flex flex-col gap-8 absolute top-[300px] rounded-[50px] bg-[#1C1A1A] h-[442px] w-full'>
  <div>
    <p className=' mt-[90px] ml-[100px]'>
      Early Bird Pricing Ends In:
    </p>
<Image 
className="font-normal mt-[30px] ml-[100px] text-[200px] leading-[100%] tracking-[0%]"
src="/time.png" alt="" width={436} height={442} />
    <div>

    </div>

  </div>
  <div className=' flex '>
    <span className=' absolute left-[140px] font-normal text-[16px] leading-[30px] tracking-[0%] text-center' >DAYS</span>
    <span className=' absolute left-[300px] font-normal text-[16px] leading-[30px] tracking-[0%] text-center' >HOURS</span>
    <span  className=' absolute left-[480px] font-normal text-[16px] leading-[30px] tracking-[0%] text-center'>MINUTES</span>
  </div>
</div >

<Image 
className="absolute  w-[273.78px] h-[243.78px]  opacity-100 top-[498.6px] left-[780.6px]"
 src="/registerImg.png" alt="" width={436} height={442} />

     </div>
  )
}

export default Register