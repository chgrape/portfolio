import React from "react";

function Project({ name, desc, url }) {
  return (
    <div className="bg-neutral-800 w-2/5 flex-grow p-4 rounded-lg transition-transform transform hover:scale-110 hover:brightness-90 h-64 flex flex-col justify-between ">
      <div>
        <h1 className="font-semibold text-3xl tracking-wider break-all">
          {name}
        </h1>
        <p className="mb text-neutral-400">{desc}</p>
      </div>
      <a className="" href={url}>
        Link
      </a>
    </div>
  );
}

export default Project;
