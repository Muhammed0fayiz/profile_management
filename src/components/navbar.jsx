import { firstLogo, secLogo, forthLogo, fifthLogo } from "@/datas/navbar";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-white py-3 px-8 flex justify-between items-center font-sans">
      <div className="flex items-center space-x-3">
        <Image
          src={firstLogo.img}
          alt="Manipal Logo"
          width={50}
          height={50}
          className="h-14 w-auto object-contain"
        />

        <div className="leading-none ">
          <div className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold text-black tracking-wider">
              TAPMI
            </h1>
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

      <div className="flex items-center space-x-2">
        <div>
          <h1
            className="text-4xl font-bold tracking-wider"
            style={{ color: "#34495E" }}
          >
            PRME
          </h1>
          <p className="text-[10px] tracking-wider ml-1 text-gray-800 -mt-1.5">
            Principles for Responsible
          </p>

          <p className="text-[10px] tracking-wider ml-1 text-gray-800 -mt-1.5">
            Management Education
          </p>
        </div>

        <Image
          src={fifthLogo.img}
          alt="Logo"
          width={50}
          height={50}
          className="h-14 w-auto object-contain"
        />

        <div>
          <h1 className="text-3xl font-bold text-green-800 tracking-tighter mt-3">
            AACSB
          </h1>

          <h2 className=" font-bold text-green-800 tracking-tighter -mt-2">
            ACCREDITED
          </h2>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
