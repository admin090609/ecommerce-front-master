import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

// import required modules
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

export default function Slider() {
  const [showNavigation, setShowNavigation] = useState(true);

  useEffect(() => {
    // Verifică lățimea ecranului și setează showNavigation în funcție de rezoluție
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setShowNavigation(false); // Dacă ecranul este mai mic sau egal cu 768px, ascunde navigarea
      } else {
        setShowNavigation(true); // Altfel, afișează navigarea
      }
    };

    // Adaugă un ascultător pentru redimensionarea ferestrei
    window.addEventListener("resize", handleResize);

    // Inițializare pentru lățimea curentă a ecranului
    handleResize();

    // Dezactivează ascultătorul când componenta este dezmontată
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="flex justify-center items-center mt-10">
      <Swiper
        cssMode={true}
        navigation={showNavigation}
        pagination={true}
        mousewheel={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        keyboard={true}
        modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <div className="w-[100%] lg:w-[70%] text-center">
              <div className="w-[150%] sm:w-[100%] text-center">
                <Image
                  src="/images/banner1.JPG"
                  alt="banner"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="border border-[#B1B1B1] inline-block"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <div className="w-[100%] lg:w-[70%] text-center">
              <div className="w-[150%] sm:w-[100%] text-center">
                <Image
                  src="/images/banner1.JPG"
                  alt="banner"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="border border-[#B1B1B1] inline-block"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center h-full">
            <div className="w-[100%] lg:w-[70%] text-center">
              <div className="w-[150%] sm:w-[100%] text-center">
                <Image
                  src="/images/banner1.JPG"
                  alt="banner"
                  width={100}
                  height={100}
                  layout="responsive"
                  className="border border-[#B1B1B1] inline-block"
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
