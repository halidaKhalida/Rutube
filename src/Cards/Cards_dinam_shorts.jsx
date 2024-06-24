

const Cards_dinam_shorts = ({url,chanel_img,chanel_name,text,like,comments}) => {
  return (
    <div className=" flex w-auto justify-center cursor-pointer  overflow-x-hidden ">
            <div className=" flex h-[839px] mt-[24px] ">
                <div  className=" flex relative w-[471.94px] h-[839px] items-end ">
                    <iframe width="471.94" height="839" src={url} className=" cursor-pointer absolute rounded-[6px] " allow="clipboard-write; autoplay"></iframe>
                </div>
                <div className="  my-auto  flex flex-col text-white gap-[12px] ml-[24px] ">
                    <div className=" flex flex-col items-center ">
                        <img className=" w-[30px] h-[30px]  " src="/lllike.svg" alt="" />
                        <p className=" text-[13px] font-semibold ">{like}</p>
                    </div>
                    <div className=" flex flex-col items-center ">
                        <img className=" w-[32px] h-[32px]  " src="/comments_icon.png" alt="" />
                        <p className=" text-[13px] font-semibold ">{comments}</p>
                    </div>
                    <img className=" w-[32px] h-[32px]  " src="/save_for_shorts.png" alt="" />
                </div>
            </div>
        </div>
  )
}

export default Cards_dinam_shorts