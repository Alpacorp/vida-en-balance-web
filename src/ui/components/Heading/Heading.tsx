import { FC } from "react";

import { HeadingProps } from "@interfaces/interfaces";

export const Heading: FC<HeadingProps> = ({text, customClassName, tag}) => {
  return (
      <div id="productos" className={`px-4 py-14 sm:px-6 lg:px-8 ${customClassName} bg-amber-400 uppercase bg-gradient-to-b from-[#293078] to-[#494986]`}>
        {tag === "h1" && <h1 className="text-4xl font-montserrat-bold text-white text-center">{text}</h1>}
        {tag === "h2" && <h2 className="text-3xl font-montserrat-bold text-white text-center">{text}</h2>}
      </div>
  );
};

