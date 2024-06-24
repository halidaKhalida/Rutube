import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cards_yappy_shorts from "../Cards/Cards_yappy_shorts";
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
import Dinamic_card_home from "../Cards/Dinamic_card_home";
import { list } from "postcss";
const Dinamik_Home = () => {
    const [dinamic, setDinamicH] = useState({});
    const [yappy, setYappy] = useState([]);
    const params = useParams();
    const [swipOne, setSwipOne] = useState([]);
    // const [like, setLike] = useState(false);
    // const [kol, setKol] = useState(0);

    const getDinamH = async () => {
        try {
            const responce = await axios.get(
                `https://ed7dff7529e06432.mokky.dev/swipper_home/${params.id}`
            );
            setDinamicH(responce.data);
            // setKol(dinamic.like_kolichestvo);
        } catch (error) {
            console.log(error);
        }
    };
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

    // console.log(kol);

    useEffect(() => {
        getDinamH();
        getYappy();
        getSwip();
    }, [params.id]);

    // const Likes = async () => {
    //     setLike(!like);
    //     if (like) {
    //         const responce = await axios.put(
    //             `https://ed7dff7529e06432.mokky.dev/swipper_home/${params.id}`,
    //             {
    //                 like_kolichestvo: kol + 1,
    //             }
    //         );
    //         setDinamicH(responce.data);
    //         setKol(responce.data.like_kolichestvo);
    //         console.log(responce.data.like_kolichestvo);
    //     } else {
    //         const responce = await axios.put(
    //             `https://ed7dff7529e06432.mokky.dev/swipper_home/${params.id}`,
    //             {
    //                 like_kolichestvo: kol - 1,
    //             }
    //         );
    //         setDinamicH(responce.data);
    //         setKol(responce.data.like_kolichestvo);
    //         console.log(responce.data.like_kolichestvo);
    //     }
    // };

    return (
        <div className=" flex mt-[16px] px-[109px]">
            <div className="text-white h-[1200px]">
                <iframe
                    width="1280"
                    height="720"
                    src={dinamic.url}
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                ></iframe>
                <h1 className=" text-[24px] mt-[24px]  ">{dinamic.text}</h1>
                <div className="flex justify-between border-b-[1px] pb-4 border-b-[#29333D]  ">
                    <div className="flex items-center  mt-[16px] ">
                        <div className=" flex w-[26px] h-[20px] border border-solid border-[#e1e5ea] rounded-[4px] items-center justify-center ">
                            <p className="text-[10px]  ">{dinamic.img_age}</p>
                        </div>
                        <p className=" text-[12px] font-normal ml-[16px]  ">
                            {dinamic.prosmotri}
                        </p>
                        <div className=" w-[4px] h-[4px] bg-[#A7B4C4] rounded-[50%] ml-[8px] "></div>
                        <p className=" text-[12px] font-normal ml-[8px]  ">
                            {dinamic.time}
                        </p>
                    </div>
                    <div className="flex items-center text-[12px] justify-between   ">
                        <div className="flex  items-center ">
                            <img
                                className={"w-[35x] h-[24px] fill-white"}
                                src="/smile_icon.png"
                                alt=""
                            />
                            <p>{dinamic.like_kolichestvo}</p>
                        </div>
                        <img
                            className=" flex w-[35px] h-[35px] ml-[16px]  "
                            src="/not_smile_icon.png"
                            alt=""
                        />
                        <div className="  ">
                            <Link
                                to={"/in_top"}
                                className="  flex ml-[16px] gap-[4px] items-center "
                            >
                                <img
                                    className=" w-[24px] h-[24px] "
                                    src="https://pic.rutubelist.ru/links/91/3e/913ee064af57d17a248d031a3af23141.svg"
                                    alt=""
                                />
                                <p>В тор</p>
                            </Link>
                        </div>
                        <div className="flex ml-[16px]  gap-[4px] items-center ">
                            <img
                                className=" w-[24px] h-[24px]  "
                                src="https://step-up-preschool.co.uk/wp-content/uploads/2019/12/arrow-right-2.png"
                                alt=""
                            />
                            <p className=" ml-[4px] ">Поделиться</p>
                        </div>
                        <div className="flex  ml-[16px]  gap-[4px] items-center ">
                            <img
                                className=" w-[24px] h-[24px]  "
                                src="/save_icon.png"
                                alt=""
                            />
                            <p>Смотреть позже</p>
                        </div>
                        <img
                            className=" w-[24px] h-[24px] ml-[16px]  "
                            src="/more_icon.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className=" mt-[32px] flex justify-between  ">
                    <div className="flex  items-center  ">
                        <img
                            className=" w-[40px] h-[40px] rounded-[40px]  "
                            src={dinamic.chanel_img}
                            alt=""
                        />
                        <div className=" ml-[16px] ">
                            <div className="flex  items-center ">
                                <p className=" text-[16px] font-semibold   ">
                                    {dinamic.chanel_name}
                                </p>
                                <img
                                    className=" w-[12px] h-[12px] ml-[4px] "
                                    src="/check_icon.png"
                                    alt=""
                                />
                            </div>
                            <p className=" text-[12px]  ">
                                {dinamic.subscribes_text}
                            </p>
                        </div>
                    </div>
                    <div>
                        <button className=" w-[113.88px] h-[40px] rounded-[8px] bg-[#00A1E7] text-[12px] font-semibold border-[0] ">
                            {dinamic.button_subscribe}
                        </button>
                    </div>
                </div>
                <h2 className=" font-bold mt-[24px]  ">
                    {dinamic.kolichestvo_comments} Комментариев
                </h2>
                {dinamic.kolichestvo_comments != 0 ? (
                    <div className=" flex mt-[16px] ">
                        <img
                            className=" w-[30px] h-[30px] rounded-[40px]  "
                            src={dinamic.comented_chanel_img}
                            alt=""
                        />
                        <div className=" text-[12px] ml-[8px] ">
                            <div className=" flex ">
                                <p className="  font-semibold ">
                                    {dinamic.commented_chanel_name}
                                </p>
                                <p className=" text-[#5A6877] ml-[8px] ">
                                    {dinamic.comment_time}
                                </p>
                            </div>
                            <p className=" mt-[4px]  ">{dinamic.comment}</p>
                            <div className="flex items-center mt-[6px] ">
                                <img
                                    className=" w-[14px] h-[14px] "
                                    src="https://static.tildacdn.com/tild3339-3466-4864-a431-653932326663/thumb-up__2.png"
                                    alt=""
                                />
                                <p className=" ml-[4px] ">
                                    {dinamic.comment_like_text}
                                </p>
                                <img
                                    className=" w-[18px] h-[18px] ml-[16px] "
                                    src="/dislike.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div>
                <div className="">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, A11y, Autoplay]}
                        // autoplay={{
                        //   delay: 10000,
                        // }}
                        spaceBetween={20}
                        slidesPerView={3}
                        slidesPerGroup={3}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                        className="max-w-[440px]"
                    >
                        {yappy.map((Yappy) => (
                            <SwiperSlide className="" key={Yappy.id}>
                                <Link to={`/Yappy/${Yappy.id}`}>
                                    <Cards_yappy_shorts
                                        w={"128px"}
                                        img={Yappy.img}
                                    />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <h4 className="text-[11px] text-white px-5 py-[10px]">
                        Виджет сервиса Yappy встроен правообладателем.{" "}
                        <a
                            href="https://yappy.media/terms"
                            target="_blank"
                            rel="noreferrer"
                            className="text-[#00A1E7]"
                        >
                            Правила Yappy
                        </a>
                    </h4>
                </div>
                <div className=" flex  pb-[80px] flex-col gap-4 px-5">
                    {swipOne.map((m) => (
                        <Link to={`/video/${m.id}`}>
                            <Dinamic_card_home
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dinamik_Home;
