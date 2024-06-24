

const Cards_shorts = ({img,w,prosmotre,text2,chanel_name}) => {
    return (
        <div>
            <div className={`max-w-[${w}] w-full`}>
                <img className="rounded-[6px] w-full" src={img} alt="" />
                <div>
                    <h1 className=" font-semibold text-white mt-[10px]  ">{text2}</h1>
                    <p className="  text-[12px] text-[#A7B4C4]  ">{chanel_name}</p>
                    <div className="flex items-center mt-[2px]">
                        <img className=" w-[15px] h-[15px]   " src="/eye_icon.png" alt="" />
                        <p className=" text-[12px] text-[#A7B4C4] ml-[4px] ">{prosmotre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards_shorts