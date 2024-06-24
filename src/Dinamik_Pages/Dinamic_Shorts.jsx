import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Cards_Dinam_Yappy from "../Cards/Cards_Dinam_Yappy";
import { Navigation, Mousewheel, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Cards_dinam_shorts from "../Cards/Cards_dinam_shorts";

const Dinamic_Shorts = () => {
    
    const [short, setShort] = useState([])
    const params = useParams();
    const [useShorts, setUseShort] = useState([])

    const getShorts = async () => {
        try {
            const responce = await axios.get(`https://ed7dff7529e06432.mokky.dev/shorts/${params.id}`)
            setShort(responce.data)
        } catch (error) {
            console.log(error);
        }
    }

    const getUseShorts = async ()=>{
        try {
          const response = await axios.get("https://ed7dff7529e06432.mokky.dev/shorts")
          setUseShort(response.data)
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
        getShorts()
        getUseShorts()
    }, [params.id])


    return (
        <div className=" flex w-full justify-center ">
            <Swiper
                // install Swiper modules
                modules={[Navigation, Mousewheel, Pagination, Scrollbar, A11y]}
                direction={'vertical'}
                spaceBetween={-132}
                mousewheel={true}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <Cards_dinam_shorts key={short.id} url={short.url} chanel_img={short.chanel_img} chanel_name={short.chanel_name} text={short.text} like={short.like} comments={short.comments} />
                </SwiperSlide>

                {
                    useShorts.map((v) => {
                        if (v.id != params.id) {
                            return (
                                <SwiperSlide key={v.id} >
                                    <Cards_dinam_shorts url={v.url} like={v.like} comments={v.comments} />
                                </SwiperSlide>
                            )
                        }
                    })
                }

            </Swiper>
        </div>
    )
}

export default Dinamic_Shorts