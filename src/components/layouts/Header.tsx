"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
const Header = () => {
  const [y, setY] = useState(0);
  const [drawer, setDrawer] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", function () {
      setY(this.scrollY);
    });
  }, [y]);
  const menu = [
    {
      path: "#home",
      name: "Home",
    },
    {
      path: "#about",
      name: "About",
    },
    {
      path: "#service",
      name: "Service",
    },
    {
      path: "#skill",
      name: "Skill",
    },
    {
      path: "#contact",
      name: "Contact",
    },
  ];
  return (
    <div>
      <div className={`drawer ${drawer ? "block" : "hidden"}`}>
        <a
          className="relative left-[93%] top-2"
          onClick={() => setDrawer(!drawer)}
        >
          <AiOutlineCloseCircle />
        </a>
        <ul className=" relative left-[45%]">
          {menu.map((item: any) => {
            return (
              <li key={item.name}>
                <a
                  className={`cursor-pointer ${
                    y > 72 ? "text-dark" : "text-dark"
                  }  hover:text-primary duration-1000  max-sm:text-sm z-100`}
                  href={item.path}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="lg:hidden absolute left-[90%] top-5 text-[#fff]">
        <a
          className={`${drawer ? "hidden" : "block"}`}
          onClick={() => setDrawer(!drawer)}
        >
          <AiOutlineMenu />
        </a>
      </div>
      <div
        className={`max-lg:hidden w-[100%] flex ${
          y > 72 ? "fixedHeader" : "absolute"
        }  items-center justify-between p-[30px]`}
      >
        <div
          className={`${
            y > 72 ? "text-dark" : "text-light"
          } text-3xl  hover:scale-x-150 duration-1000 max-sm:hidden`}
        >
          Kien Le
        </div>
        <ul className="flex gap-8">
          {menu.map((item: any) => {
            return (
              <li key={item.name}>
                <a
                  className={`cursor-pointer ${
                    y > 72 ? "text-dark" : "text-light"
                  }  hover:text-primary duration-500  max-sm:text-sm`}
                  href={item.path}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
