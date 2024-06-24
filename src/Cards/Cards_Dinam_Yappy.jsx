import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Cards_Dinam_Yappy = ({
    url,
    chanel_img,
    chanel_name,
    text,
    like,
    comments,
    yappy_url,
}) => {
    return (
        <div className=" flex w-auto justify-center cursor-pointer  overflow-x-hidden ">
            <div className=" flex h-[839px] mt-[24px] ">
                <div className=" flex relative w-[471.94px] h-[839px] items-end ">
                    <iframe
                        width="471.94"
                        height="839"
                        src={url}
                        className=" cursor-pointer absolute rounded-[6px] "
                        allow="clipboard-write; autoplay"
                    ></iframe>
                    <div className="absolute w-full  px-4 mb-[60px] justify-center flex flex-col  max-h-[100px] ">
                        <div className="flex w-full justify-between text-[white]">
                            <div className="flex gap-[8px] ">
                                <a
                                    className=" flex gap-[8px] items-center "
                                    href={yappy_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        className=" w-[32px] h-[32px] rounded-[8px] "
                                        src={chanel_img}
                                        alt=""
                                    />
                                    <p className=" text-[13px] font-semibold ">
                                        {chanel_name}
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a
                                    href={yappy_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <button className=" w-[102px] h-[33.7px] bg-[#00A1E7] text-[white] text-[11px] rounded-[8px] ">
                                        subscribe
                                    </button>
                                </a>
                            </div>
                        </div>
                        <h1 className=" text-white mt-[12px] max-w-[437.688px] overflow-hidden">
                            {text}
                        </h1>
                    </div>
                </div>
                <div className="  my-auto  flex flex-col text-white gap-[12px] ml-[24px] ">
                    <div className=" flex flex-col items-center ">
                        <a
                            className=" flex flex-col items-center   "
                            href={yappy_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className=" w-[27px] h-[27px]  "
                                src="/lllike.svg"
                                alt=""
                            />
                            <p className=" text-[13px] font-semibold ">
                                {like}
                            </p>
                        </a>
                    </div>
                    <div className=" flex flex-col items-center ">
                        <a
                            className="  flex flex-col items-center  "
                            href={yappy_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                className=" w-[32px] h-[32px]  "
                                src="/comments_icon.png"
                                alt=""
                            />
                            <p className=" text-[13px] font-semibold ">
                                {comments}
                            </p>
                        </a>
                    </div>
                    <a href={yappy_url} target="_blank" rel="noreferrer">
                        <img
                            className=" w-[32px] h-[32px]  "
                            src="/save_for_shorts.png"
                            alt=""
                        />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Cards_Dinam_Yappy;
