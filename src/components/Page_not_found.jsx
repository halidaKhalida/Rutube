import { Link } from "react-router-dom";

const Page_not_found = () => {
  return (
    <div className=" w-full h-full  flex flex-col items-center justify-center ">
      <img
        className=" w-[160px] h-[128px] "
        src="https://static.rutube.ru/static/img/svg/birds/dark/404.svg"
        alt=""
      />
      <h1 className=" text-[36px] font-600 text-[#A7B4C4]   ">
        Страница не найдена
      </h1>
      <p className=" text-[13px] font-600 text-[#A7B4C4] mt-[9px]   ">
        Нам не удалось найти указанную вами страницу на нашем сайте
      </p>
      <Link to={"/"}>
        <button className=" w-[228px] h-[58px] bg-[#00A1E7] text-[14px] text-white rounded-[8px] mt-[64px] ">
          Перейти на главную
        </button>
      </Link>
    </div>
  );
};

export default Page_not_found;
