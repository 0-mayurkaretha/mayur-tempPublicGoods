import React from "react";
import Image from 'next/image'
import info_img from "../DPGimages/DPG_info_right_side.webp";

function Info() {
  return (
    <div>
      <div className="grid sm:grid-cols-2">
        <div className="bg-primary-color flex justify-center items-center ">
          <div className="text-white lg:pt-20 lg:px-20 md:pt-16 md:px-14 sm:pt-12 sm:px-10 pt-12 px-10 items-center">
              <h2 className="xl:text-6xl lg:text-5xl md:text-4xl font-bold leading-tight xl:w-[422px] lg:w-[372px] md:w-[272px] sm:w-[200px]">
                What are Digital Public Goods?
              </h2>
              <p className="md:pt-10 pt-6 md:text-base text-sm xl:w-[376px] lg:w-[372px] md:w-[280px] sm:w-[230px]">
                The Digital Public Goods Alliance defines digital public goods
                (DPGs) as open-source software, open data, open AI models, open
                standards and open content that adhere to privacy and other
                applicable laws and best practices, do no harm by design, and help
                attain sustainable Development Goals. To know more about DPGs,
                click&nbsp;
                <a className="text-inherit" href="https://digitalpublicgoods.net/">here.</a>
                <br />
                <br />​ India is making great strides in building population-scale
                DPGs. Our experience with DPGs in education, governance identity
                authentication, health, through Sunbird, Digit, DigiLocker and
                Divoc are indicative of the huge potential for impact this
                approach holds.
              </p>
            
          </div>
        </div>
        <div className="flex justify-center items-center overflow-hidden">
          <Image
            className="shrink-0 min-w-full min-h-full"
            src={info_img}
            alt="Image on the Right Side"
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
