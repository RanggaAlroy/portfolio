import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="relative mt-20 pt-20 pb-10">
      <div className="absolute bottom-0">
        <img
          src="./footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="heading text-center">
          Ready to take <span className="text-purple">your</span> digital <br />
          presence to the next level?
        </h1>
        <p className="text-sm mt-4">
          Reach out to me today and let{`'`}s discuss how I can help you achieve
          your goal.
        </p>
        <a href="mailto:rangga.alroy@gmail.com" id="contact">
          <MagicButton
            title="Contact me now"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex justify-between items-center mt-20">
        <div>
          <p className="text-xs text-white">Copyright ©2024 Rangga Alroy</p>
        </div>
        <div className="flex gap-2">
          {socialMedia.map((item) => (
            <img src={item.img} alt={item.img} key={item.id} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
