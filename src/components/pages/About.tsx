import Image from "next/image";
import React from "react";
import me1 from "~/assets/images/about.jpg";
const About = () => {
  return (
    <div className="flex max-lg:block px-[150px] py-5 max-sm:px-2 max-sm:py-2">
      <div className="m-10 ">
        <h1 className="text-4xl leading-[6rem] max-sm:text-3xl">About me</h1>
        My name is Kien, 22 years old, working at Beetsoft Company as a frontend
        programmer
        <h1 className="text-4xl leading-[6rem] max-sm:text-3xl mt-4">
          CAREER GOALS
        </h1>
        Become to professional developer
        <br />
        <button className="rounded-2xl bg-dark text-light px-4 py-2  mt-10 max-sm:mt-3">
          MY CV
        </button>
      </div>
      <div className="w-[50%] h-content max-lg:w-[100%] max-lg:h-content p-4 flex justify-center">
        <Image
          className="border-2 object-cover  w-full h-[auto]"
          src={me1}
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
