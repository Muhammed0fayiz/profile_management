import { firstLogo, secLogo,forthLogo } from "@/datas/navbar";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white py-3 px-8 flex justify-between items-center font-sans">
      {/* Left Section */}
      <div className="flex items-center space-x-3">
        {/* Manipal Logo */}
        <Image
          src={firstLogo.img}
          alt="Manipal Logo"
          width={50}
          height={50}
          className="h-14 w-auto object-contain"
        />
        
        {/* TAPMI Text Block */}
        <div className="leading-none ">
          <div className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold text-black tracking-wider">TAPMI</h1>
             <Image
          src={secLogo.img}
          alt="Manipal Logo"
          width={50}
          height={50}
         className="h-15 w-auto object-contain mt-3"  
        />
          </div>
<p className="text-[8px] font-semibold text-black -mt-5 tracking-wider ml-4">
  BENGALURU CAMPUS
</p>

<div className="h-[1px] bg-gray-400 ml-[8px] w-[110px]"></div>


<p className="text-[6.5px] italic text-gray-600 mt-1 ml-2">
  A constituent unit of MAHE, Manipal
</p>





        </div>
      </div>

      {/* Right Logos */}
      <div className="flex items-center">
        <Image
          src={forthLogo.img}
          alt="Accreditation Logos"
          width={120}
          height={40}
          className="h-14 w-auto object-contain mt-3 mr-7"
        />
      </div>
    </nav>
  );
};

export default Navbar;