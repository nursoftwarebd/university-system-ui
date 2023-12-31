import { LocationIcons, MailIcons, PhoneIcons } from "@/components/Common/SVGCollection";
import Title from "@/components/Common/Title";
import React from "react";

const Hero = () => {
  return (
    <div className="mt-10">
      <div className="text-zinc-500 text-[0.94rem] leading-5 px-3.5 text-center mb-5">
        <h6 className="text-sky-600 font-bold mb-2">Contact us</h6>

        <Title>We&apos;re here to help!</Title>
      </div>

      {/* ==================== card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mt-12 lg:mt-20">
        <div>
          <div className="h-full bg-primary-600 text-zinc-500 flex flex-col flex-grow text-[0.94rem] leading-5 break-words py-12 px-5 text-center rounded-lg shadow-3xl">
            <h5 className="text-white text-[1.31rem] leading-7 font-bold mb-4">Customer Support</h5>

            <ul>
              <li className="list-item mb-4">
                <a className="text-white cursor-pointer" href="#">
                  {" "}
                  <LocationIcons className="w-5 inline-block mr-2 -mt-1" fill="#fff" fillColor="#231F20" />
                  Chicago HQ Estica Cop. Macomb, MI 48042{" "}
                </a>
              </li>

              <li className="list-item mb-4">
                <a className="text-white cursor-pointer" href="#">
                  {" "}
                  <PhoneIcons className="w-5 inline-block mr-2" fill="#fff" fillColor="#fff" />
                  (423) 733-8222{" "}
                </a>
              </li>

              <li className="list-item">
                <a className="text-white cursor-pointer" href="#">
                  {" "}
                  <MailIcons className="w-5 inline-block mr-2" fill="#fff" fillColor="#fff" />
                  example@email.com{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="h-full bg-white text-zinc-500 flex flex-col flex-grow text-[0.94rem] leading-5 break-words py-12 px-5 text-center rounded-lg shadow-3xl">
            <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">Contact Address</h5>

            <ul>
              <li className="text-zinc-800 list-item mb-4">
                <a className="cursor-pointer" href="#">
                  {" "}
                  <LocationIcons className="w-5 inline-block mr-2 -mt-1" fill="#231F20" fillColor="#fff" />
                  2492 Centennial NW, Acworth, GA, 30102{" "}
                </a>
              </li>

              <li className="text-zinc-800 list-item mb-4">
                <a className="cursor-pointer" href="#">
                  {" "}
                  <PhoneIcons className="w-5 inline-block mr-2" fill="#231f20" fillColor="#231f20" />
                  +896-789-546{" "}
                </a>
              </li>

              <li className="text-zinc-800 list-item">
                <a className="cursor-pointer" href="#">
                  {" "}
                  <MailIcons className="w-5 inline-block mr-2" fill="#231f20" fillColor="#231f20" />
                  example@email.com{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="h-full bg-white text-zinc-500 flex flex-col flex-grow text-[0.94rem] leading-5 break-words py-12 px-5 text-center rounded-lg shadow-3xl">
            <h5 className="text-zinc-800 text-[1.31rem] leading-7 font-bold mb-4">Main Office Address</h5>

            <ul>
              <li className="text-zinc-800 list-item mb-4">
                <a className="cursor-pointer" href="#">
                  {" "}
                  <LocationIcons className="w-5 inline-block mr-2 -mt-1" fill="#231F20" fillColor="#fff" />
                  2002 Horton Ford Rd, Eidson, TN, 37731{" "}
                </a>
              </li>

              <li className="text-zinc-800 list-item mb-4">
                <a className="cursor-pointer" href="#">
                  {" "}
                  <PhoneIcons className="w-5 inline-block mr-2" fill="#231f20" fillColor="#231f20" />
                  (678) 324-1251{" "}
                </a>
              </li>

              <li className="text-zinc-800 list-item">
                <a className="cursor-pointer" href="#">
                  {" "}
                  <MailIcons className="w-5 inline-block mr-2" fill="#231f20" fillColor="#231f20" />
                  example@email.com{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
