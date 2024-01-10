import React from "react";
import c from "./../assets/c.png";
import cpp from "./../assets/cpp.png";
import python from "./../assets/python.svg";
import react from "./../assets/react.png";
import angular from "./../assets/angular.png";
import php from "./../assets/php.png";
import laravel from "./../assets/laravel.png";
import StyledImage from "./StyledImage";
import "./TechStack.css";

function TechStack() {
  return (
    <div className="flex flex-row gap-4 items-center xl:w-1/3 flex-grow overflow-x-auto custom-scrollbar">
      <StyledImage s={c} />
      <StyledImage s={cpp} />
      <StyledImage s={python} />
      <StyledImage s={react} />
      <StyledImage s={angular} />
      <StyledImage s={php} />
      <StyledImage s={laravel} />
    </div>
  );
}

export default TechStack;
