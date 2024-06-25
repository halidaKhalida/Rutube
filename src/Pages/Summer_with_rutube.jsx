import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import axios from "axios";
import Cards_chanels from "../Cards/Cards_chanels";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cards_long_video from "../Cards/Cards_long_video";

const Summer_with_rutube = () => {
  const [chanels, setChanels] = useState([]);

  const getChanels = async () => {
    try {
      const response = await axios.get(
        "https://ed7dff7529e06432.mokky.dev/swipper_home"
      );
      setChanels(response.data);
      console.log(chanels);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChanels();
  }, []);

  return (
    <div className="flex flex-col w-full h-auto pb-[80px] overflow-x-hidden absolute  px-[171px] mt-[24px] bg-[#14191F]">
      <div className=" flex flex-col items-center w-[1304px] h-[578.695px] bg-[#1C232B] rounded-[8px] ">
        <div
          className={` h-[511.16px]  bg-contain bg-gradient-to-b from-white z-10 to-[rgba(0,0,0,.5)] w-full relative grad rounded-[8px] flex items-end  `}
        >
          <img
            src="/big_img.png"
            className=" z-[0] absolute rounded-[8px]  "
            alt="img"
          />
          <h1 className=" absolute z-10 text-[#787878] text-[36px] font-500 pl-[40px] pb-[16px]    ">
            Лето с RUTUBE!
          </h1>
        </div>
        <div className="flex items-center mt-[16px] ">
          <button className=" w-[83.62px] h-[35.52px] text-white text-[12px] bg-[#00A1E7] border-[0] rounded-[8px]  ">
            Главная
          </button>
          
            <a className="  text-[12px] font-600 text-[#889BAF] ml-[16px]  " href="https://rutube.ru/info/russian_cities_guide_rules/" target="_blank">Правила активности</a>
            
          
        </div>
      </div>
      <div className=" mt-[42px]  ">
        <h1 className="w-[270px] pl-[18px]   text-white text-[36px] font-semibold">
          Участники
        </h1>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            // autoplay={{
            //   delay: 10000,
            // }}
            spaceBetween={25}
            slidesPerView={10}
            slidesPerGroup={10}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px]  flex mt-[16px] "
          >
            {chanels.map((v) => (
              <SwiperSlide className="" key={v.id}>
                <Cards_chanels
                  chanel_img={v.chanel_img}
                  chanel_name={v.chanel_name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className=" mt-[42px]  ">
        <h1 className="w-[470px] pl-[18px]   text-white text-[36px] font-semibold">
          Видео конкурсантов
        </h1>
        <div className=" grid grid-cols-4 gap-y-6 gap-x-4 mt-[24px] pl-[24px] ">
          {chanels.map((m) => {
            if (m.id <= 12) {
              return (
                <Link to={`/Summer_with_rutube/${m.id}`}>
                  <Cards_long_video
                    w={"310px"}
                    key={m.id}
                    img={m.img}
                    long_time={m.long_time}
                    img_age={m.img_age}
                    chanel_img={m.chanel_img}
                    text={m.text}
                    chanel_name={m.chanel_name}
                    prosmotri={m.prosmotri}
                    time={m.time}
                  />
                </Link>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Summer_with_rutube;
