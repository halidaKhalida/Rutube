import axios from "axios";
import { useEffect, useState } from "react";
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
import { Link } from "react-router-dom";
import Cards_long_video from "../Cards/Cards_long_video";

const Originals = () => {
  const [swipOne, setSwipOne] = useState([]);

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

  useEffect(() => {
    getSwip();
  }, []);

  return (
    <div className="lex flex-col w-full h-auto pb-[80px] overflow-x-hidden absolute px-[147px] items-center mt-[16px] bg-[#14191F]">
      <div>
        <h1 className="w-[470px] pl-[18px]  text-white text-[36px] font-500">
          RUTUBE Originals
        </h1>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            autoplay={{
              delay: 10000,
            }}
            loop={{ Infinity }}
            spaceBetween={20}
            slidesPerView={3}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full  px-[20px] mt-[25px]"
          >
            {swipOne.map((v) => (
              <SwiperSlide className="  " key={v.id}>
                <Link to={`/Films/${v.id}`}>
                  <div className="relative text-white text-[11px] flex justify-end items-end">
                    <div className=" absolute z-30 bg-[rgba(0,0,0,0.5)] w-[32px] h-[20px] flex justify-center items-center rounded-[2px] right-[6px] bottom-[6px] ">
                      <p className="">{v.img_age}</p>
                    </div>
                    <img 
                      className=" w-[424px] h-[238.5px] cursor-pointer rounded-[6px]"
                      src={v.img}
                      alt="image"
                    />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className=" mt-[56px]  ">
        <h1 className="w-[570px] pl-[18px]  text-white text-[36px] font-500">
          Пожалуйста, не рассказывай!
        </h1>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            // autoplay={{
            //   delay: 10000,
            // }}
            spaceBetween={25}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation
            freeMode={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[24px] swip"
          >
            {swipOne.map((m) => (
              <SwiperSlide className="" key={m.id}>
                <Link to={`/Films/${m.id}`}>
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
      <div className=" mt-[56px]  ">
        <h1 className="w-[570px] pl-[18px]  text-white text-[36px] font-500">
          МУЗLOFT / МУЗЛОФТ
        </h1>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            // autoplay={{
            //   delay: 10000,
            // }}
            spaceBetween={25}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation
            freeMode={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[24px] swip"
          >
            {swipOne.map((m) => (
              <SwiperSlide className="" key={m.id}>
                <Link to={`/Films/${m.id}`}>
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
      <div className=" mt-[56px]  ">
        <h1 className="w-[570px] pl-[18px]  text-white text-[36px] font-500">
          Наше Дело
        </h1>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            // autoplay={{
            //   delay: 10000,
            // }}
            spaceBetween={25}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation
            freeMode={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[24px] swip"
          >
            {swipOne.map((m) => (
              <SwiperSlide className="" key={m.id}>
                <Link to={`/Films/${m.id}`}>
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
      <div className=" mt-[56px]  ">
        <h1 className="w-[570px] pl-[18px]  text-white text-[36px] font-500">
          ТОП-шоу
        </h1>
        <div>
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y, Autoplay]}
            // autoplay={{
            //   delay: 10000,
            // }}
            spaceBetween={25}
            slidesPerView={4}
            slidesPerGroup={4}
            navigation
            freeMode={true}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[24px] swip"
          >
            {swipOne.map((m) => (
              <SwiperSlide className="" key={m.id}>
                <Link to={`/Films/${m.id}`}>
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
    </div>
  );
};

export default Originals;
