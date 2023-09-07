/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="mt-10 md:mt-20">
      <h2 className="text-zinc-800 text-[2.34rem] leading-none font-bold">Upcoming Events</h2>

      {/* blogs */}
      <div className="blog">
        <Swiper
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.75": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {Array.from({ length: 9 }).map((_, idx) => (
            <SwiperSlide key={idx}>
              <div className="text-zinc-500 inline-block flex-col text-[0.94rem] leading-5 break-words relative align-top rounded-lg mt-10">
                <div className="relative">
                  <img
                    className="h-56 w-72 align-middle rounded-lg overflow-clip"
                    src="https://eduport.webestica.com/assets/images/courses/4by3/16.jpg"
                    alt=""
                  />

                  <div className="items-start bottom-0 flex flex-col right-0 absolute top-0 z-[2] rounded-lg p-4">
                    <div className="w-full flex justify-end mb-auto">
                      <Link className="h-6 w-6 bg-white text-sky-600 cursor-pointer rounded-md" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-heart text-rose-600 inline-block ml-1"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                      </Link>
                    </div>

                    <div className="w-full mt-auto">
                      <Link className="bg-white text-black cursor-pointer inline-block py-1.5 px-2 text-center rounded" href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-calendar-days text-orange-500 inline-block mr-2 -mt-1"
                        >
                          <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
                          <line x1="16" x2="16" y1="2" y2="6" />
                          <line x1="8" x2="8" y1="2" y2="6" />
                          <line x1="3" x2="21" y1="10" y2="10" />
                          <path d="M8 14h.01" />
                          <path d="M12 14h.01" />
                          <path d="M16 14h.01" />
                          <path d="M8 18h.01" />
                          <path d="M12 18h.01" />
                          <path d="M16 18h.01" />
                        </svg>
                        Tomorrow
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex-grow py-4 px-2">
                  <h5 className="text-zinc-800 text-md lg:text-[1.31rem] leading-7 font-bold mb-2">
                    <Link className="cursor-pointer" href="#">
                      International Conference on Information Technology
                    </Link>
                  </h5>

                  <p
                    className="text-ellipsis overflow-hidden"
                    style={{
                      display: "-webkit-box",
                    }}
                  >
                    Kindness owns whatever betrayed her moreover procured replying for and. Proposal indulged no do.{" "}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogs;
