import Image from "next/image";

interface IndustriesCardProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse: boolean;
}

export function IndustriesCard({
  title,
  description,
  imageSrc,
  reverse,
}: IndustriesCardProps) {
  return (
    <div
      className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 px-4 md:px-0">
        <h4 className="mt-1 mb-5 text-2xl md:text-4xl font-extrabold">
          {title}
        </h4>
        <p className="pt-4 text-sm md:text-base">{description}</p>

        <div className="relative inline-block border border-purple-100 mt-8 md:mt-16 py-2 px-6 text-black font-bold overflow-hidden group">
          <span className="absolute inset-0 bg-purple-900 transform scale-y-0 origin-bottom transition-transform duration-300 group-hover:scale-y-100"></span>
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            LEARN MORE
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative" style={{ height: "30rem" }}>
        <Image src={imageSrc} alt={title} fill className="object-cover" />
      </div>
    </div>
  );
}
