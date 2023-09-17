import React from "react";
import { SiCodesignal } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { BsAirplaneEngines } from "react-icons/bs";

const Service = () => {
  const Item = (title: any, Logo: any) => (
    <div className="w-[30%] max-lg:w-full h-[200px] bg-light shadow-lg hover:shadow-2xl text-center uppercase p-2 relative  items-cemter">
      <div className="flex justify-center w-full mt-2">
        <Logo />
      </div>
      <h3 className="mt-2">{title}</h3>
      <p className="text-sm absolute top-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
  const ren = [
    {
      title: "Design",
      logo: () => <SiCodesignal />,
    },
    {
      title: "Development",
      logo: () => <GrSystem />,
    },
    {
      title: "Planning",
      logo: () => <BsAirplaneEngines />,
    },
  ];
  return (
    <div className="p-10 flex justify-center gap-4 flex-wrap">
      {ren.map((e: any) => {
        return Item(e.title, e.logo);
      })}
    </div>
  );
};

export default Service;
