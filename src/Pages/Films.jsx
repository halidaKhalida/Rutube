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
import Cards_films from "../Cards/Cards_films";
import Cards_long_video from "../Cards/Cards_long_video";

const Films = () => {
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
    <div className="flex flex-col w-full h-auto pb-[80px] overflow-x-hidden absolute  px-[147px] mt-[24px] bg-[#14191F]">
      <div>
        <h1 className="w-[270px] pl-[18px]   text-white text-[36px] font-semibold ">
          Кино
        </h1>
        <div>
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
                      className=" cursor-pointer rounded-[6px]"
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
      <div className=" mt-[56px] ">
        <h1 className="w-[270px] pl-[18px]   text-white text-[36px] font-semibold ">
          Рекомендуем
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[16px]"
          >
            {swipOne.map((v) => (
              <SwiperSlide className="" key={v.id}>
                <Link to={`/Films/${v.id}`}>
                  <Cards_films img={v.img} text={v.text} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div>
        <h1 className="w-[270px] pl-[18px]   text-white text-[36px] font-semibold ">
          В топе
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
      <div className=" mt-[42px] ">
        <h1 className="w-[370px] pl-[18px]   text-white text-[36px] font-semibold ">
          Летние фильмы
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[16px]"
          >
            {swipOne.map((v) => (
              <SwiperSlide className="" key={v.id}>
                <Link to={`/Films/${v.id}`}>
                  <Cards_films img={v.img} text={v.text} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className=" mt-[42px] ">
        <h1 className="w-[670px] pl-[18px]   text-white text-[36px] font-semibold ">
          Фильмы с неожиданным финалом
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
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full px-[20px] flex gap-[16px] mt-[16px]"
          >
            {swipOne.map((v) => (
              <SwiperSlide className="" key={v.id}>
                <Link to={`/Films/${v.id}`}>
                  <Cards_films img={v.img} text={v.text} />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Films;
