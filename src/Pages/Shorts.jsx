import { useEffect, useState } from "react"
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
import { Link } from "react-router-dom";
import Cards_yappy_shorts from "../Cards/Cards_yappy_shorts";
import Cards_shorts from "../Cards/Cards_shorts";






const Shorts = () => {
    const [yappy, setYappy] = useState([])
    const [shorts, setShorts] = useState([])
    const getYappy = async () => {
        try {
            const response = await axios.get("https://ed7dff7529e06432.mokky.dev/yappy_shorts")
            setYappy(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    const getShorts = async () => {
        try {
            const response = await axios.get("https://ed7dff7529e06432.mokky.dev/shorts")
            setShorts(response.data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getYappy();
        getShorts()
    }, []);
    return (
        <div className="flex flex-col w-full h-auto pb-[80px] overflow-x-hidden absolute  px-[150px] mt-[32px] bg-[#14191F]">
            <div>
                <h1 className=" w-[470px] pl-[18px]   text-white text-[39px] font-semibold  ">Yappy: короткие ролики</h1>
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
                        className="w-full px-[20px] flex gap-[16px] mt-[16px]"
                    >
                        {yappy.map((Yappy) => (
                            <SwiperSlide className="" key={Yappy.id}>
                                <Link to={`/Yappy/${Yappy.id}`}>
                                    <Cards_yappy_shorts w={'142px'} img={Yappy.img} />
                                </Link>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                    <h4 className="text-[11px] text-white px-[18px] mt-[16px]">Виджет сервиса Yappy встроен правообладателем. <a href="https://yappy.media/terms" target="_blank" rel="noreferrer" className="text-[#00A1E7]">Правила Yappy</a></h4>
                </div>
            </div>
            <div>
                <h1 className=" w-[270px] pl-[18px] mt-[34px]  text-white text-[39px] font-semibold  ">Еда</h1>
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
                        className="w-full px-[20px] flex gap-[16px] mt-[16px]"
                    >
                        {shorts.map((v) => (
                            <SwiperSlide className="" key={v.id}>
                                <Link to={`/Shorts/${v.id}`}>
                                    <Cards_shorts w={'142px'} img={v.img} prosmotre={v.prosmotre} text2={v.text2} chanel_name={v.chanel_name} />
                                </Link>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                </div>
            </div>
            <div>
                <h1 className=" w-[270px] pl-[18px] mt-[34px]  text-white text-[39px] font-semibold  ">Развлечения</h1>
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
                        className="w-full px-[20px] flex gap-[16px] mt-[16px]"
                    >
                        {shorts.map((v) => (
                            <SwiperSlide className="" key={v.id}>
                                <Link to={`/Shorts/${v.id}`}>
                                    <Cards_shorts w={'142px'} img={v.img} prosmotre={v.prosmotre} text2={v.text2} chanel_name={v.chanel_name} />
                                </Link>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                </div>
            </div>
            <div>
                <h1 className=" w-[270px] pl-[18px] mt-[34px]  text-white text-[39px] font-semibold  ">Разное</h1>
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
                        className="w-full px-[20px] flex gap-[16px] mt-[16px]"
                    >
                        {shorts.map((v) => (
                            <SwiperSlide className="" key={v.id}>
                                <Link to={`/Shorts/${v.id}`}>
                                    <Cards_shorts w={'142px'} img={v.img} prosmotre={v.prosmotre} text2={v.text2} chanel_name={v.chanel_name} />
                                </Link>
                            </SwiperSlide>
                        )
                        )}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Shorts