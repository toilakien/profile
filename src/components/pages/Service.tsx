import React from "react";
import { SiCodesignal } from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { BsAirplaneEngines } from "react-icons/bs";

const Service = () => {
  const Item = (title: any, Logo: any, key: any) => (
    <div
      key={key}
      className="w-[30%] max-lg:w-full h-[270px] bg-light shadow-lg hover:shadow-2xl text-center uppercase p-2 relative  items-cemter"
    >
      <div className="flex justify-center w-full mt-2 ">
        <Logo />
      </div>
      <h3 className="relative top-[20px]">{title}</h3>
      <p className="text-sm absolute top-[150px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  );
  const ren = [
    {
      title: "Design",
      logo: () => <SiCodesignal style={{ fontSize: "3rem" }} />,
    },
    {
      title: "Development",
      logo: () => <GrSystem style={{ fontSize: "3rem" }} />,
    },
    {
      title: "Planning",
      logo: () => <BsAirplaneEngines style={{ fontSize: "3rem" }} />,
    },
  ];
  return (
    <div>
      <div className="w-full flex justify-center">
        <div className="w-[50%] text-center ">
          <div className="leading-[3rem] text-3xl">WHO I DO</div>
          <p>
            It is important that clients follow the coaching process, but I do
            At that time, they fell into labor and were in extreme pain. Because
            of that I will come at least, who can practice any kind of work
            except that Some of it is useful.
          </p>
        </div>
      </div>
      <div className="p-10 flex justify-center gap-4 flex-wrap">
        {ren.map((e: any) => {
          return Item(e.title, e.logo, e.title);
        })}
      </div>
    </div>
  );
};

export default Service;
