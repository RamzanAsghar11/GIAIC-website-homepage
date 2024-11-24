import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <>
    <div className=" Main-Container flex w-full h-[680px]">
      <div className=" flex flex-col Left-section w-6/12 h-[680] justify-center pl-6">
        <h1 className="text-6xl text-blue-900 font-extrabold mb-6">Governor Sindh Kamran Khan Tessori</h1>
        <h1 className="text-5xl text-blue-400 font-extrabold mb-6">Certified Cloud Applied Generative AI Engineer (Gen) </h1>
        <h2 className="text-3xl  text-blue-900 font-extrabold">Earn up to $5,000 / month </h2>
        <h2 className="text-3xl  text-blue-900 font-extrabold mb-7">Now admissions are open in Hyderabad</h2>
        <div>
        <button className="bg-blue-900 text-lg rounded-lg text-white py-3 px-8 "> Apply Now</button>
        </div>
      </div>
      <div className="Right-Section w-6/12 h-[680] flex justify-end object-cover">
        <Image 
        
        src="/cover.1d863e39.png"
        width={600}
        height={680}
        alt="Image"
        />
      </div>
     
    </div>
    <h1 className="text-4xl text-center mt-28 mb-10 font-extrabold">Certified Cloud Applied Generative AI Engineer (GenEng) and Solopreneur Developing Billion-Dollar Valued Developers and Solopreneurs</h1>
    <p className="pl-6 text-center mb-6">The pace of technological change is accelerating, big players like Microsoft, Amazon, Google, and OpenAI are winning by providing infrastructure, large AI foundation models, frameworks, 3D Metaverse experiences, and massive distribution networks. Solopreneurs trained in this program will win by automating work typically outsourced to employees, by directly connecting to customers by eliminating the middleman, and by developing vertical metaverses, thus paving the way for the first billion-dollar valued solopreneur businesses. This program has the objective to train this new breed of billion-dollar solopreneurs. These solopreneurs will adopt the ultra-lean business model and work independently and will not need to hire employees or other team members.</p>
    </>
  );
};

export default Hero;
