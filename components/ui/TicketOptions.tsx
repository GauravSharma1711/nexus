import React from 'react'
import Image from "next/image";

const TicketOptions = () => {
  return (
     <div className=' flex flex-col relative '>
        <p 
     className="w-[1240px] h-[60px] font-bold text-[50px] leading-[100%] tracking-[0%] capitalize] rotate-0 opacity-100  left-[100px]"   
        >
            Ticket Options
        </p>

        <div className=' absolute top-[100px] flex   '>


            <div className="absolute bg-[#0147FF] w-[344px] h-[394px] rotate-0 opacity-100 top-[60px]  rounded-[50px]">

 <h1 className=' h-[30px] w-[258px] ml-[60px] mt-[70px] font-bold text-[26px] leading-[30px] tracking-normal '>EARLY BIRD PASS</h1>

<p  className=' h-[30px] w-[163px] mt-[18px] ml-[60px] text-[13px] ' >Limited time offer!</p>
               
               <span className=' absolute top-[230px] left-[60px] font-bold text-[40px]' >€299</span>


 <button className=" absolute left-[60px] top-[300px] bg-[#DEDEE0] text-white font-light px-1 py-3 rounded-full cursor-pointer">
  <span className="w-[197px] h-[30px] flex items-center justify-center gap-2">
  <p className=' text-black'>Get Your tickets</p>
<Image  src="/black-arrow.png" alt="" width={17} height={17} />
</span>
</button>



              </div>



             <div className="absolute border  border-white w-[344px] h-[394px] rotate-0 opacity-100 top-[60px] left-[360px] rounded-[50px]">
  
   <h1 className=' h-[30px] w-[258px] ml-[60px] mt-[70px] font-bold text-[26px] leading-[30px] tracking-normal '>STANDARD PASS</h1>

 <span className=' absolute top-[230px] left-[60px] font-bold text-[40px]' >€399</span>

 <button className=" absolute left-[60px] top-[300px] bg-gradient-to-r from-[#0147FF] to-[#00B0FF35] text-white font-light px-1 py-3 rounded-full cursor-pointer">
  <span className="w-[197px] h-[30px] flex items-center justify-center gap-2">
  <p>Get Your tickets</p>
<Image src="/union-1.png" alt="" width={17} height={17} />
</span>
</button>

</div>


<div className="absolute w-[344px] border border-white h-[394px] rotate-0 opacity-100 top-[60px] left-[730px] rounded-[50px]">
  
   <h1 className=' h-[30px] w-[258px] ml-[60px] mt-[70px] font-bold text-[26px] leading-[30px] tracking-normal '>VIP EXPERIENCE</h1>
<p  className=' h-[30px] w-[163px] mt-[18px] ml-[60px] font-normal text-[13px] leading-[30px] tracking-[0%] ' >Includes exclusive speaker <br/> meetups & front-row seating</p>

  <span className=' absolute top-[230px] left-[60px] font-bold text-[40px]' >€699</span>


 <button className=" absolute left-[60px] top-[300px] bg-gradient-to-r from-[#0147FF] to-[#00B0FF35] text-white font-light px-1 py-3 rounded-full cursor-pointer">
  <span className="w-[197px] h-[30px] flex items-center justify-center gap-2">
  <p>Get Your tickets</p>
<Image src="/union-1.png" alt="" width={17} height={17} />
</span>
</button>

</div>


            
        </div>

     </div>
  )
}

export default TicketOptions