import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full py-8 lg:py-24 xl:py-40 bg-gradient-to-br from-purple-600 via-purple-900 to-black">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center md:h-2/5 lg:h-[50%] xl:h-[60%] w-full text-white md:w-[80%] md:mx-auto">
        {/* Text Content */}
        <div className="w-full lg:w-2/3 px-6">
          <h4
            className="text-xl md:text-xl lg:text-3xl xl:text-4xl font-bold"
            style={{ fontFamily: "Montserrat-Light" }}
          >
            Annologic
          </h4>
       
          <h2
            className="text-3xl md:text-3xl lg:text-5xl xl:text-6xl"
            style={{ fontFamily: "Poppins" }}
          >
            Elevating{" "}
            <strong>
              Businesses through expert AI/ML solutions
            </strong>
            . We transform Raw Data into strategic <strong>Insights</strong>
          </h2>
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button className="border-none py-4 px-6 w-full md:w-1/4 bg-black text-white">
              Explore
            </button>
            <button className="border border-1 border-black py-4 px-6 w-full md:w-1/4 border-purple-300">
              Contact
            </button>
          </div>
        </div>
        
        {/* Placeholder for Image */}
        <div className="w-full lg:w-1/3 mt-6 lg:mt-0 border border-2">
          {/* Updated Image with relative sizing */}
          <Image 
            src="/nb.jpg" 
            alt="AI/ML solutions illustration" 
            width={1024} 
            height={1024} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
