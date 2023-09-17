import React from "react";

const About = () => {
  return (
    <div className="flex max-lg:block">
      <div className="m-10 ">
        <h1 className="text-2xl">About me</h1>
        My name is Kien, 22 years old, working at Beetsoft Company as a frontend
        programmer
        <h1 className="text-2xl mt-4">CAREER GOALS</h1>
        Become to professional developer
        <br />
        <button className="rounded-xl bg-dark text-light px-4 py-1 mt-4">
          MY CV
        </button>
      </div>
      <div className="w-[50%]  h-full max-lg:w-[100%] max-lg:h-[50%] p-4">
        <img
          className="border-2 object-cover w-full h-full"
          src="https://aptech.fpt.edu.vn/wp-content/uploads/2022/11/cong-viec-cu-the-can-lam-cua-mot-developer.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
