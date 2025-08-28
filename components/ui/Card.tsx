import React from 'react'
import Image from "next/image";

const Card = () => {
  return (
    <div className=' grid grid-cols-4 grid-rows-2 gap-2 relative ' >

        <div className=' w-[240px] h-[390px] rounded-[50px] bg-[#DEDEE0]' >
            <h1 className=' absolute top-[50px] left-[40px] h-[72px] w-[215px] text-[#1C1A1A] font-semibold text-[20px]'>Dr. Emily <br/> Carter</h1>
            <p
            className=' absolute top-[300px] left-[40px] h-[72px] w-[215px] text-[#1C1A1A] font-medium text-[13px] leading-[30px] tracking-normal '
            >Chief AI Scientist, OpenAI</p>
        </div>


        <div className=' w-[240px] h-[390px] rounded-[50px]   flex items-center justify-center' >
            <Image src="/cardimg1.png" alt="" width={240} height={390} className='grayscale ' />
        </div>


        <div className=' w-[240px] h-[390px] rounded-[50px] bg-[#DEDEE0]' >

   <h1 className=' absolute top-[50px] left-[570px] h-[72px] w-[215px] text-[#1C1A1A] font-semibold text-[20px]'>Elon Park</h1>
            <p
            className=' absolute top-[300px] left-[570px] h-[72px] w-[215px] text-[#1C1A1A] font-medium text-[13px] leading-[30px] tracking-normal '
            >CTO, DeepMind</p>

        </div>



        <div className=' w-[240px] h-[390px] rounded-[50px]   flex items-center justify-center' >
            <Image src="/cardimg2.png" alt="" width={240} height={390} className='grayscale' />
        </div>  


         <div className=' w-[240px] h-[390px] rounded-[50px]   flex items-center justify-center' >
            <Image src="/cardimg3.png" alt="" width={240} height={390} className='grayscale' />
        </div>
        
        
        
        
         <div className=' w-[240px] h-[390px] rounded-[50px] bg-[#DEDEE0]' >
             <h1 className=' absolute top-[440px] left-[312px] h-[72px] w-[215px] text-[#1C1A1A] font-semibold text-[20px]'>Laura Kim</h1>
            <p
            className=' absolute top-[700px] left-[312px] h-[72px] w-[215px] text-[#1C1A1A] font-medium text-[13px] leading-[30px] tracking-normal '
            >AI Policy Advisor, EU <br/> Commission</p>

         </div>

         
          <div className=' w-[240px] h-[390px] rounded-[50px]   flex items-center justify-center' >
            <Image src="/cardimg4.png" alt="" width={240} height={390} className='grayscale' />
        </div>


        <div className=' w-[240px] h-[390px] rounded-[50px] bg-[#DEDEE0]' >
              <h1 className=' absolute top-[440px] left-[840px] h-[72px] w-[215px] text-[#1C1A1A] font-semibold text-[20px]'>Dr. Alan <br/> Foster</h1>
            <p
            className=' absolute top-[700px] left-[840px] h-[72px] w-[215px] text-[#1C1A1A] font-medium text-[13px] leading-[30px] tracking-normal '
            >Stanford AI Lab</p>
        </div>
       
   
    <button className="  absolute left-0 top-[815px] h-[44px] w-[165px] border border-white rounded-3xl ">
                <span className=" mr-5 text-[15px]" >
                   And more
                    <Image
                src="/union-1.png" alt="" 
                width={14} height={14} 
                className=" absolute left-[112px] top-[16px] rounded-full" />
   
                </span>
               </button>




    </div>
  )
}

export default Card