// import Navbar from "@/components/ui/Navbar";
import Agenda from "@/components/ui/Agenda";
import Attend from "@/components/ui/Attend";
import Card from "@/components/ui/Card";
import Day from "@/components/ui/Day";
import Keynote from "@/components/ui/Keynote";
import Last from "@/components/ui/Last";
import LogoType from "@/components/ui/LogoType";
import Map from "@/components/ui/Map";
import Navbar from "@/components/ui/Navbar";
import NumberCard from "@/components/ui/NumberCard";
import PastAttendee from "@/components/ui/PastAttendee";
import Register from "@/components/ui/Register";
import Speaker from "@/components/ui/Speaker";
import Summit from "@/components/ui/Summit";
import TicketOptions from "@/components/ui/TicketOptions";


export default function Home() {
  return (
    <div className="  max-w-screen overflow-x-hidden h-[10000px] relative   " >
      <div className=" absolute left-[100px] right-[100px] ">
       <Navbar/>
      </div>

          <div className="absolute top-[160px] left-[100px] right-[100px] h-[804px] rounded-[50px] bg-[#1A1A1A]">
          <Summit/>
          </div>

          <div className=" absolute top-[1064px] w-full pl-[130px] pr-[130px] ">
            <LogoType/>
          </div>

          <div className=" absolute top-[1232px] left-[100px] right-[100px] ">
          <Speaker/>
          </div>

          <div className=" absolute top-[1851px] left-[100px] right-[100px]">
            <Agenda/>
          </div>

          <div className=" absolute top-[2061px] left-[100px] right-[100px] rounded-[50px] bg-[#1A1A1A] h-[897px]">
            <Day/>
          </div>

          <div className=" absolute top-[3108px] left-[100px] right-[100px]" >
            <Keynote/>
          </div>

           <div className=" absolute top-[3408px] left-[100px] right-[100px]" >
            <Card/>
          </div>

          <div className="  absolute top-[4358px] left-[100px] right-[100px]" >
            <Attend/>
          </div>
      
         <div className="  absolute top-[4617px] left-[100px] right-[100px]" >
            <NumberCard/>
          </div>

          <div  className="  absolute top-[5357px] left-[100px] right-[100px]">
            <PastAttendee  />
          </div>
          
          <div className="absolute top-[6150px] left-[100px] right-[100px]">
            <Register/>
          </div>

          <div className="absolute top-[7050px] left-[100px] right-[100px]" >
            <TicketOptions/>
          </div>

           <div className="absolute top-[7700px] left-[100px] right-[100px] h-[1260px] rounded-[50px] bg-[#1A1A1A]  " >
            <Map/>
          </div>

          
           <div className="absolute top-[9100px] left-[100px] right-[100px]  " >
            <Last/>
          </div>

    </div>
  );
}
