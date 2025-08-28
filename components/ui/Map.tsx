import React from 'react'
import Image from "next/image";

const Map = () => {
  return (
    <div className='  flex flex-col relative  rounded-[50px] bg-[#1A1A1A] mx-[30px] '>

        <div className=' absolute top-[90px] h-[665px] flex '>
                <div className=' flex flex-col'>
                    <h1 className='  top-[90px] font-bold text-[50px] leading-[40px] tracking-none' >We’re here to <br/> connect and <br/> assist you</h1>
                   <p className=' mt-[30px]'>Have questions about the summit? Need help with <br/> registration or travel? Our team is ready to assist you.</p>

                   <div className=' mt-[100px] flex gap-32  '>
                    <span className=' font-bold text-[26px] leading-[30px]'>CONTACT US</span>
                    <span className=' font-bold text-[26px] leading-[30px]'>EVENT LOCATION</span>
                   </div>

             <div className="mt-[24px] flex gap-44">
            <span className=' font-bold text-[16px] leading-[20px]'>+31 20 123 4567</span>
              <p className=' font-bold text-[16px] leading-[20px]'>Horizon Convention Center <br/> Amsterdam, Netherlands</p>
                   </div>


                   <div className=' mt-[24px] flex gap-58'>

 <h1 className='   font-bold text-[20px] leading-[30px] tracking-none' >EMAIL</h1>
          <h1 className=' font-bold text-[20px] leading-[30px] tracking-none' >FOLLOW US</h1>


                   </div>


                   <div className=' mt-[20px] flex gap-43'>
                    <span>info@nexus.com</span>
                    <div className=' flex gap-2'>
<Image src="/fb.png" alt="" width={17} height={17} />
<Image src="/ln.png" alt="" width={17} height={17} />
<Image src="/ig.png" alt="" width={17} height={17} />
<Image src="/yt.png" alt="" width={17} height={17} />

                    </div>
                   </div>
                </div>


                <div className=' relative w-[533px] h-[550px] rounded-[50px] bg-[#DEDEE0] flex flex-col '>
              <h1 className=' absolute top-[60px] left-[40px] text-[#1C1A1A] font-bold text-[22px]'>GET IN TOUCH</h1>
               <p className=' absolute top-[100px] left-[40px] leading-[20px] text-[16px] text-[#1C1A1A]'>Reach out with inquiries about tickets, <br/> partnerships, or event details.</p>
               <div className=' flex flex-col gap-8 absolute top-[184px] left-[40px]'>

       
                   <div>
                    <p className=' text-[#7E7E7E] h-[30px]'>Name</p>
 <Image src="/line.png" alt="" width={436} height={442} />
                   </div>
                   <div>
                    <p className=' text-[#7E7E7E] h-[30px]'>Email</p>
                     <Image src="/line.png" alt="" width={436} height={442} />
                   </div>
                   <div>
                    <p className=' text-[#7E7E7E] h-[30px]'>Subject</p>
                     <Image src="/line.png" alt="" width={436} height={442} />
                   </div>
                   <div>
                    <p className=' text-[#7E7E7E] h-[30px]'>Message</p>
                     <Image src="/line.png" alt="" width={436} height={442} />

                   </div>

                    <button className=" absolute left-[60px] top-[270px] bg-[#0147FF] text-white font-light px-1 py-3 rounded-full cursor-pointer">
                     <span className="w-[197px] h-[30px] flex items-center justify-center gap-2">
                     <p className=' text-white'>Send Message</p>
                   
                   </span>
                   </button>

         </div>
                </div>

        </div>

        <div className=' absolute top-[670px] h-[570px] w-[990px] rounded-[50px]'>
          <Image src="/map.png" alt="" width={1050} height={570} />
        </div>

    </div>
  )
}

export default Map