import React from "react";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <h1
          style={{ textShadow: "5px 2px #555" }}
          className="text-center text-light text-8xl max-lg:text-4xl max-sm:text-xl font-serif leading-[9rem]"
        >
          Front End Developer
        </h1>
        <h1 className="text-center text-light text-3xl max-lg:text-lg max-sm:text-base font-serif underline  underline-offset-8 hover:scale-x-150 duration-1000">
          Kien Le
        </h1>
      </div>
    </div>
  );
};

export default Home;
