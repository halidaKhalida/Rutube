import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import Cards_Dinam_Yappy from "../Cards/Cards_Dinam_Yappy";
import { Navigation,Mousewheel, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Dinamic_Yappy = () => {

    const [shortYap, setShortYappy] = useState([])
    const params = useParams();
    const [yappy, setYappy] = useState([])

    const getShortsYap = async () => {
        try {
            const responce = await axios.get(`https://ed7dff7529e06432.mokky.dev/yappy_shorts/${params.id}`)
            setShortYappy(responce.data)
        } catch (error) {
            console.log(error);
        }
    }

    const getYappy = async ()=>{
        try {
          const response = await axios.get("https://ed7dff7529e06432.mokky.dev/yappy_shorts")
          setYappy(response.data)
        } catch (error) {
          console.log(error);
        }
      }

    useEffect(() => {
        getShortsYap()
        getYappy()
    }, [params.id])


    return (
        <div className=" flex w-full justify-center ">
            <Swiper
                // install Swiper modules
                modules={[Navigation,Mousewheel, Pagination, Scrollbar, A11y]}
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
                    <Cards_Dinam_Yappy key={shortYap.id} url={shortYap.url} chanel_img={shortYap.chanel_img} chanel_name={shortYap.chanel_name} text={shortYap.text} like={shortYap.like} yappy_url={shortYap.yappy_url} comments={shortYap.comments} />
                </SwiperSlide>
                
                {
                    yappy.map((v)=>{
                        if (v.id!=params.id) {
                            return(
                                <SwiperSlide key={v.id} >
                                    <Cards_Dinam_Yappy url={v.url} chanel_img={v.chanel_img} yappy_url={v.yappy_url} chanel_name={v.chanel_name} text={v.text} like={v.like} comments={v.comments} />
                                </SwiperSlide>
                            )
                        }
                    })
                }
                
            </Swiper>
        </div>
    )
}

export default Dinamic_Yappy