import { FC } from "react";

import { HeadingProps } from "@interfaces/interfaces";

export const Heading: FC<HeadingProps> = ({
  text,
  tag,
  id,
  uppercase = true,
  customClassName,
}) => {
  const baseClass = `px-4 py-8 sm:py-12 sm:px-6 lg:px-8 bg-linear-to-b from-[#293078] to-[#494986]${uppercase ? " uppercase" : ""}${customClassName ? ` ${customClassName}` : ""}`;
  const textClass = "font-montserrat-bold text-white text-center";

  return (
    <div id={id} className={baseClass}>
      {tag === "h1" && (
        <h1 className={`text-2xl sm:text-3xl lg:text-4xl ${textClass}`}>
          {text}
        </h1>
      )}
      {tag === "h2" && (
        <h2 className={`text-xl sm:text-2xl lg:text-3xl ${textClass}`}>
          {text}
        </h2>
      )}
    </div>
  );
};
