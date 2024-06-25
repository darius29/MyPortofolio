import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, education } from "@/data";

const Education = () => {
  return (
    <div
      className="py-10"
      id="education">
      <h1 className="heading">
        My
        <span className="text-purple"> education</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10 mt-10 mb-8">
        <InfiniteMovingCards
          items={education}
          direction="right"
          speed="slow"
        />
      </div>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center mb-4 gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({ id, img, name }) => (
            <div
              key={id}
              className="flex md:max-w-60 max-w-32 gap-2">
              <img
                src={img}
                alt={name}
                className="md:w-10 w-5"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
