import axios from "axios";
import Cards_chanels from "../Cards/Cards_chanels";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dinamic_card_home from "../Cards/Dinamic_card_home";
import { ProductContext } from "../Context/Video_context";
const Search_page = () => {
  const [chanels, setChanels] = useState([]);
  const { search } = useLocation();
  const { searchs } = useContext(ProductContext);

  const getChanels = async () => {
    try {
      const response = await axios.get(
        `https://ed7dff7529e06432.mokky.dev/swipper_home?text=*${searchs}`
      );
      console.log(search);
      setChanels(response.data);
      console.log(chanels);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChanels();
  }, [search]);
  return (
    <div className="flex flex-col w-full h-auto pb-[80px] overflow-x-hidden absolute  px-[307px] mt-[16px] bg-[#14191F]  ">
      <div>
        <button className=" w-[52.78px] h-[34px] rounded-[8px] bg-[#00A1E7] text-[12px] text-white font-600  ">
          Все
        </button>
      </div>
      <div className="border-b border-[#29333D] w-full h-4"></div>
      <div className="flex mt-[24px] gap-[16px]  ">
        {chanels.map((v) => {
          if (v.id <= 3) {
            return (
              <div className=" w-[172px] h-[178px] bg-[#1C232B] rounded-[6px] flex flex-col items-center justify-center   ">
                <img
                  className=" w-[96px] h-[96px] rounded-[50%]   "
                  src={v.chanel_img}
                  alt=""
                />
                <h1 className=" text-[14px] h-[20px] overflow-hidden text-white font-600 mt-[12px] ">
                  {v.chanel_name}
                </h1>
                <p className=" text-[12px] text-[#889BAF] font-400   ">
                  {v.subscribes_text}
                </p>
              </div>
            );
          }
        })}
      </div>
      <div className=" flex flex-col mt-[16px] ">
        <div className=" flex  pb-[80px] flex-col gap-4 ">
          {chanels.length !== 0 ? (
            chanels.map((m) => (
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
            ))
          ) : (
            <div className="w-full flex justify-center text-white text-[30px] font-bold">
              <h1>Извените, но таких видео нет</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search_page;
