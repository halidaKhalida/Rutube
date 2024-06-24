const Cards_chanels = ({ chanel_name, chanel_img }) => {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className=" flex   overflow-hidden border-4 border-white rounded-[50%] w-[116px] h-[116px]  ">
        <img src={chanel_img} alt="" />
      </div>
      <div className="flex  relative overflow-hidden">
        <p className=" w-[116px] text-white absolute ">{chanel_name}</p>
      </div>
    </div>
  );
};

export default Cards_chanels;
