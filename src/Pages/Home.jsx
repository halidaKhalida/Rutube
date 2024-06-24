import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import axios from "axios";
import Cards_yappy_shorts from "../Cards/Cards_yappy_shorts";
import Cards_long_video from "../Cards/Cards_long_video";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Home = () => {
  const [swipOne, setSwipOne] = useState([]);
  const [yappy, setYappy] = useState([]);
  const getYappy = async () => {
    try {
      const response = await axios.get(
        "https://ed7dff7529e06432.mokky.dev/yappy_shorts"
      );
      setYappy(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getSwip = async () => {
    try {
      const response = await axios.get(
        "https://ed7dff7529e06432.mokky.dev/swipper_home"
      );
      setSwipOne(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(swipOne);
  useEffect(() => {
    getSwip();
    getYappy();
  }, []);

  return (
    <div className="flex flex-col  w-full h-auto pb-[80px] overflow-x-hidden absolute  pr-[15px] pl-[5px] mt-[15px] bg-[#14191F] ">
      {/* <iframe width="720" height="405" src="https://rutube.ru/play/embed/05c7715ce40e1b00ce2dc87f16e87c07" frameBorder="0" allow="clipboard-write; autoplay" ></iframe> */}
      
      <Swiper
        // install Swiper modules
        modules={[Navigation, A11y, Autoplay]}
        autoplay={{
          delay: 10000,
        }}
        loop={{ Infinity }}
        spaceBetween={25}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="w-full  px-[20px]"
      >
        {swipOne.map((v) => (
          <SwiperSlide className="  " key={v.id}>
            <Link to={`/video/${v.id}`}>
              <div className="relative text-white text-[11px] flex justify-end items-end">
                <div className=" absolute z-30 bg-[rgba(0,0,0,0.5)] w-[32px] h-[20px] flex justify-center items-center rounded-[2px] right-[6px] bottom-[6px] ">
                  <p className="">{v.img_age}</p>
                </div>
                <img
                  className="max-w-[522px] w-full h-[293.63px] cursor-pointer rounded-[6px]"
                  src={v.img}
                  alt="image"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-[24px]">
        <h1 className="w-[289px] pl-[24px] text-white text-[36px] font-semibold ">
          Выбор RUTUBE
        </h1>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            // autoplay={{
            //   delay: 10000,
            // }}
            spaceBetween={25}
            slidesPerView={6}
            slidesPerGroup={6}
            navigation
            freeMode={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[24px] swip"
          >
            {swipOne.map((m) => (
              <SwiperSlide className="" key={m.id}>
                <Link to={`/video/${m.id}`}>
                  <Cards_long_video
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <h1 className=" w-[416px] pl-[24px] text-white text-[36px] font-semibold mt-[48px] ">
          Yappy: короткие видео
        </h1>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            // autoplay={{
            //   delay: 10000,
            // }}
            spaceBetween={25}
            slidesPerView={8}
            slidesPerGroup={8}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[24px]"
          >
            {yappy.map((Yappy) => (
              <SwiperSlide className="" key={Yappy.id}>
                <Link to={`/Yappy/${Yappy.id}`}>
                  <Cards_yappy_shorts w={"218px"} img={Yappy.img} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <h1 className=" w-[300px] pl-[24px] h-[49px] text-white text-[36px] font-semibold mt-[48px]">
          Для вас
        </h1>
        <div className=" grid grid-cols-6 gap-y-5 gap-x-6 mt-[16px] pl-[24px] ">
          {swipOne.map((m) => {
            if (m.id <= 12) {
              return (
                <Link to={`/video/${m.id}`}>
                  <Cards_long_video
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
          }
          )
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
