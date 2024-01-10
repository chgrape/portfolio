import React from "react";
import "../index.css";

function Content({ isReversed, content, heading, desc, id }) {
  const rev = isReversed ? "flex-row-reverse" : "flex-row";

  return (
    <div className={` ${isReversed ? "bg-neutral-900" : "bg-white"}`}>
      <section id={id} className={`w-full mx-auto md:w-11/12 lg:w-4/5 pt-10 pb-10`}>
        <div
          className={`flex ${
            isReversed ? "flex-row-reverse" : "flex-row"
          } p-4 justify-between items-center flex-wrap max-w-full`}
        >
          <div
            className={`w-full xl:w-1/2 flex items-center flex-col font-montserrat tracking-wide ${
              isReversed ? "text-white" : "text-black"
            }`}
          >
            <h1 className="font-semibold text-3xl md:text-5xl lg:text-7xl mb-4 md:mb-8 lg:mb-16">
              {heading}
            </h1>
            <p className="text-m md:text-xl lg:text-2xl mb-8 md:mb-0">{desc}</p>
          </div>
          {content}
        </div>
      </section>
    </div>
  );
}

export default Content;
