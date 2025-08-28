import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-[160px]  relative flex   justify-between  ' > 
          <div className=' absolute   w-[164px] h-[60px] top-[40px] left-0'>
           <h1 className=' text-[50px] font-bold leading-[100%] tracking-[0%] ' >nexus</h1>
          </div>
             <div className='  flex top-[55px] h-[30px] absolute right-0 '>
                <ul className=' flex  list-none items-center text-white '>
                   
                   <span className=' mr-8 w-[110px] h-[45px] top-[40px] left-[587px] border border-white  rounded-[100px] flex items-center justify-center ' >
       <li className=' left-[618px] w-[68px] size-[25px]'>
                    Home
                    </li>
                   </span>

                  <li className=' left-[740px] w-[111px]'>Schedule</li>
                  <li className=' left-[879px] w-[109px]'>Speakeres</li>
                  <li className='  left-[1016px] w-[85px]'>Tickets</li>
                  <li className='  left-[1129px] w-[74px]'>Venue</li>
                  <li className='  left-[1231px] w-[109px]'>Sponsors</li>
                </ul>
             </div>
        
    </div>
  )
}

export default Navbar