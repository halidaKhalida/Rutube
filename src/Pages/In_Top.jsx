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

const In_Top = () => {
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
    <div className="flex flex-col w-full h-auto pb-[80px] overflow-x-hidden absolute  px-[147px] mt-[32px] bg-[#14191F]">
      <div className="   ">
        <h1 className="w-[470px] pl-[18px]   text-white text-[39px] font-semibold ">
          Популярные каналы
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
            className="w-full px-[25px]  flex mt-[16px] "
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
      <div className=" mt-[32px]  ">
        <h1 className="w-[470px] pl-[18px]   text-white text-[39px] font-semibold ">
          Видео в топе
        </h1>
        <div className=" grid grid-cols-4 gap-y-6 gap-x-4 mt-[16px] pl-[24px] ">
          {chanels.map((m) => {
            if (m.id <= 12) {
              return (
                <Link to={`/In_Top/${m.id}`}>
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

export default In_Top;
