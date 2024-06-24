const Dinamic_card_home = ({
  img,
  img_age,
  chanel_img,
  text,
  chanel_name,
  prosmotri,
  time,
  long_time,
}) => {
  return (
    <div className="flex gap-3">
      <div className="relative w-[180px] text-white text-[11px]">
        <div className="flex absolute justify-between left-[6px] bottom-[6px] right-[6px]">
          <div className="  z-30 bg-[rgba(0,0,0,0.5)] w-[32px] h-[16px] flex justify-center  items-center rounded-[2px]  ">
            <p className="">{img_age}</p>
          </div>
          <div className="z-30 bg-[rgba(0,0,0,0.5)] px-[3px] h-4 flex justify-center  items-center rounded-[2px] ">
            <p>{long_time}</p>
          </div>
        </div>
        <img
          className="w-full h-auto cursor-pointer rounded-[6px]"
          src={img}
          alt="image"
        />
      </div>
      <div>
        <div className=" w-full h-[40px] relative overflow-hidden flex  mt-[8px]  ">
          <h1 className="text-[18px] font-semibold text-white  absolute leading-[20px] ">
            {text}
          </h1>
        </div>
        <div className="flex items-center mt-[8px]  ">
          <img
            className=" w-[32px] h-[32px] rounded-[6px] "
            src={chanel_img}
            alt=""
          />
          <div className="pl-[10px]">
            <div className="flex justify-between w-full items-center">
              <div className="w-[199px] h-[12px] flex  relative overflow-hidden  ">
                <h2 className=" w-[150px] text-[#A7B4C4] absolute text-[14px] leading-[12px] ">
                  {chanel_name}
                </h2>
              </div>
              {/* <img
              className="w-[14px] h-[14px]  "
              src="public/check_icon.png"
              alt=""
            /> */}
            </div>
            <div className="flex text-[#A7B4C4] text-[12px] items-center mt-[3px]  ">
              <img
                className=" w-[15px] h-[15px]  "
                src="/eye_icon.png"
                alt=""
              />
              <p className=" ml-[4px] ">{prosmotri}</p>
              <div className=" w-[4px] h-[4px] bg-[#A7B4C4] rounded-[50%] ml-[5px] "></div>
              <p className="w-[110px] pl-[5px]">{time}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dinamic_card_home;
