import { link } from "fs";
import { IndustriesCard } from "./IndustriesCard";

export default function IndustriesCardList(){

    const industries = [
        {
          title: "Healthcare",
          description:"Annologic plays a crucial role in healthcare innovation by enabling the identification of new diseases, pharmaceuticals, and breakthrough treatments.",
          imageSrc: "/doc.webp",
        },
        {
          title: "Retail",
          description:"Our precise AI/ML services fuel consumer insights and product optimization, giving you a competitive edge",
          imageSrc: "/mall.webp",
        },
        {
          title: "Fintech",
          description:"Enhance algorithmic trading, risk assessment, and fraud detection with Annologic",
          imageSrc: "/coin.webp",
        },
        {
            title: "Insuarance",
            description:"Elevate your insurance AI solutions with our expertise.",
            imageSrc: "/insuarance.webp",
          },
          {
            title: "Robotics",
            description:"We provide the building blocks for intelligent robots, enabling them to perceive and interact with the world accurately",
            imageSrc: "/robot.webp",
          },
          {
            title: "Autonomous Vehicles",
            description:"We pave the way for safer and smarter self-driving technology",
            imageSrc: "/cars.webp",
          },
      ];

    return(
        <div className="grid grid-cols-1 gap-16 p-4 md:w-[80%] md:mx-auto md:mt-12">
        {industries.map((industry, index) => (
         <IndustriesCard key={index} title={industry.title}
         description={industry.description}
         imageSrc={industry.imageSrc}
         reverse={index % 2 !== 0} />
        ))}
      </div>
    )
}


