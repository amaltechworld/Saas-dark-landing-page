import InstaIcon from "../icons/insta.svg";
import XSocial from "../icons/x-social.svg";
import TiktokIcon from "../icons/tiktok.svg";
import YoutubeIcon from "../icons/youtube.svg";

export const Footer = () => {
  return (
      <footer className="py-5 bg-black text-white/60 border-t border-white/20">
          <div className=" p-[1rem]">
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
                  {/* left content */}
                  <div className="text-center">
                      @ 2024 Your Company, Inc. All rights reserved
                  </div>
                  {/* right content */}
                  <ul className="flex justify-center gap-2.5">
                    <li> <XSocial /> </li>
                    <li> <InstaIcon /> </li>
                    <li> <TiktokIcon /> </li>
                    <li> <YoutubeIcon /> </li>
                  </ul>
              </div>
          </div>
      </footer>
  );
};
