import Image from "next/image";

export default function Speaker() {
  return (
    <div className='flex gap-4 w-full  relative '>
      {/* Left side */}
      <div className=' bg-[#0147FF] w-[532px] h-[489px] rounded-[50px] '>
       
         <h1 className=" absolute h-[48px] w-[311px] left-[55px] top-[60px] font-bold text-[30px] leading-none tracking-normal  ">Speakers</h1>

        <div className=" flex">
            
            <Image
             src="/group2.png" alt="" 
             width={54} height={54} 
             className=" absolute left-[47px] top-[130px] rounded-full" />
        
            <p className="absolute left-[127px] top-[130px]">
                Hear from global AI leaders, <br/> researchers, and entrepreneurs <br/> who are defining the future of <br/> artificial intelligence.
            </p>
        </div>

        <div className=" flex gap-4">

<div>
             <Image
             src="/avatar1.png" alt="" 
             width={54} height={54} 
             className=" absolute left-[47px] top-[405px] rounded-full" />

              <Image
             src="/avatar2.png" alt="" 
             width={54} height={54} 
             className=" absolute left-[68px] top-[405px] rounded-full" />

              <Image
             src="/avatar3.png" alt="" 
             width={54} height={54} 
             className=" absolute left-[90px] top-[405px] rounded-full" />

              <Image
             src="/avatar4.png" alt="" 
             width={54} height={54} 
             className=" absolute left-[118px] top-[405px] rounded-full" />
</div>


            <button className=" ml-4 absolute left-[182px] top-[405px] h-[54px] w-[145px] border border-white rounded-3xl ">
             <span className=" mr-5 text-[15px]" >
                And more
                 <Image
             src="/union-1.png" alt="" 
             width={14} height={14} 
             className=" absolute left-[108px] top-[22px] rounded-full" />

             </span>
            </button>
            


        </div>

      </div>

      {/* Right side  */}
      <div className="  flex flex-col  gap-4">
        <div className="bg-[#0147FF] rounded-[50px] h-[261px] w-[673px] flex flex-col  ">

               <h1 className=" absolute font-bold text-[30px] leading-none tracking-normal w-[311px] h-[48px] top-[60px] left-[437px] ">
                Technologies
               </h1>

               <p className=" absolute h-[90px] w-[573px] top-[130px] left-[437px] text-[20px] leading-[30px] tracking-normal " >
Explore advanced machine learning, natural language <br/> processing, AI-driven automation, and emerging  cybersecurity <br/> applications.
               </p>
            
            </div>
        <div className="bg-[#DEDEE0] rounded-[50px] h-[218px] w-[673px] flex flex-col  ">
            
            <h1 className=" absolute top-[330px] text-black w-[573px] h-[48px] left-[437px] text-[40px] leading-none tracking-normal " >Networking Opportunities</h1>
     
     <p
     className=" absolute w-[573px] h-[60px] text-black text-[20px] font-normal left-[437px] top-[400px] leading-[30px] tracking-normal  "
     >Enjoy exclusive networking sessions, roundtables, and social <br/> events to foster collaboration and spark new partnerships.</p>

            </div>
      </div>
    </div>
  )
}
