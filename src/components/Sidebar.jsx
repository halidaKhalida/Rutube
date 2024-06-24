import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" w-[310px] relative   text-white ">
      <div className="flex flex-col absolute bg-[#1C232B] pr-[10px] h-[1200px] w-full  ">
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "#29333D",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          className=" w-full h-[40px]"
          to="/"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img className="w-[24px] h-[24px]" src="/home.svg" alt="" />
            <p className="text-[14px]">Главная</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "#29333D",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/shorts"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img className="w-[24px] h-[24px]" src="/shorts_icon.svg" alt="" />
            <p className="text-[14px]">Shorts</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "#29333D",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/in_top"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img className="w-[24px] h-[24px]" src="/top_icon.svg" alt="" />
            <p className="text-[14px]">В топе</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "#29333D",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/films"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img className="w-[24px] h-[24px]" src="/films_icon.svg" alt="" />
            <p className="text-[14px]">Фильмы</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "#29333D",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/soccer"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img
              className="w-[24px] h-[24px]"
              src="/football_icon.svg"
              alt=""
            />
            <p className="text-[14px]">Футбол</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "#29333D",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/catalog"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img className="w-[24px] h-[24px]" src="/catalog.svg" alt="" />
            <p className="text-[14px]">Каталог</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/subscribes"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img className="w-[24px] h-[24px]" src="/subscribes.svg" alt="" />
            <p className="text-[14px]">Подписки</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/my"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img className="w-[24px] h-[24px]" src="/My.svg" alt="" />
            <p className="text-[14px]">Моё</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "#29333D",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/originals"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img className="w-[24px] h-[24px]" src="/original.svg" alt="" />
            <p className="text-[14px]">Originals</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "#29333D",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/summer_with_rutube"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px]">
            <img
              className="w-[24px] h-[24px]"
              src="/summer_with_rutube.svg"
              alt=""
            />
            <p className="text-[14px]">Лето с RUTUBE!</p>
          </div>
        </NavLink>
        <div className="border-b border-[#29333D] w-full h-4"></div>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
          to="/see_later"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px] mt-[16px] ">
            <img className="w-[29px] h-[27px]" src="/save_icon.png" alt="" />
            <p className="text-[14px]">Смотреть позже</p>
          </div>
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return isActive
              ? {
                  backgroundColor: "",
                  borderTopRightRadius: "6px",
                  borderBottomRightRadius: "6px",
                  width: "252px",
                }
              : { backgroundColor: "#1C232B" };
          }}
        to="/history"
        >
          <div className="flex w-[252px] h-[40px] hover:bg-[#29333D] items-center pl-[24px] rounded-r-[6px] gap-[24px] ">
            <img className="w-[29px] h-[27px]" src="/history.png" alt="" />
            <p className="text-[14px]">История просмотра</p>
          </div>
        </NavLink>
        <div className="border-b border-[#29333D] w-full h-4"></div>
        <div className=" pl-[24px] mt-[16px]  ">
          <p className=" text-[12px] text-[#5A6877] ">
            Приложение всегда с собой
          </p>
          <div className="flex  mt-[8px] gap-[8px] ">
            <div className=" w-[56px]  h-[54px] rounded-[8px]  bg-[#29333D]  ">
              <a
                href="https://apps.apple.com/ru/app/rutube-%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8-%D0%B2%D0%B8%D0%B4%D0%B5%D0%BE-%D0%B7%D0%B4%D0%B5%D1%81%D1%8C/id966511294"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://pic.rutubelist.ru/links/bc/8a/bc8ae317baa3bf47b192880eed828863.svg"
                  alt=""
                />
              </a>
            </div>
            <div className=" w-[56px]  h-[54px] rounded-[8px]  bg-[#29333D] ">
              <a
                href="https://play.google.com/store/apps/details?id=ru.rutube.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://pic.rutubelist.ru/links/a0/07/a007296a974427b5863915a4763ff0ae.svg"
                  alt=""
                />
              </a>
            </div>
            <div className=" w-[56px]  h-[54px] rounded-[8px]  bg-[#29333D] ">
              <a
                href="https://trk.mail.ru/c/me10h4?bundle_id=ru.rutube.app"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://pic.rutubelist.ru/links/34/6b/346bb117c093bb07b21c783f04768089.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div className=" w-[56px]  h-[54px] rounded-[8px]  bg-[#29333D] mt-[8px] ">
            <a
              href="https://appgallery.huawei.ru/app/C101701719"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://pic.rutubelist.ru/links/88/ca/88cae10b135b78a610d7a83ef9983d23.svg"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className=" pl-[24px] mt-[16px]  ">
          <p className=" text-[12px] text-[#5A6877] ">Больше от RUTUBE</p>
          <div className=" mt-[8px]  ">
            <div className="flex">
              <div className=" flex items-center justify-center w-[85.17px] h-[40px] bg-[#29333D] rounded-[8px] ">
                <a
                  href="https://rutube.ru/smarttv/"
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer text-[14px] text-[#BFC9D6] font-300 name "
                >
                  SMART TV
                </a>
              </div>
              <div className="flex items-center justify-center w-[119.27px] h-[40px] bg-[#29333D] rounded-[8px] ml-[8px]  ">
                <a
                  href="https://rutube.ru/rutube_for_kids/"
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer text-[14px] text-[#BFC9D6] font-300 name  "
                >
                  RUTUBE Детям
                </a>
              </div>
            </div>
            <div className="flex mt-[8px] ">
              <div className="flex items-center justify-center w-[112.66px] h-[40px] bg-[#29333D] rounded-[8px]  ">
                <a
                  href="https://rutube.ru/smarttv/"
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer text-[14px] text-[#BFC9D6] font-300 name  "
                >
                  ТВ-приставки
                </a>
              </div>
              <div className="flex items-center justify-center w-[77.08px] h-[40px] bg-[#29333D] rounded-[8px] ml-[8px]  ">
                <a
                  href="https://rutube.ru/smarttv/"
                  target="_blank"
                  rel="noreferrer"
                  className=" cursor-pointer text-[14px] text-[#BFC9D6] font-300 name  "
                >
                  Apple TV
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center w-[118.31px] h-[40px] bg-[#29333D] rounded-[8px] mt-[8px]  ">
              <a
                href="https://rutube.sport/"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer text-[14px] text-[#BFC9D6] font-300 name  "
              >
                RUTUBE Спорт
              </a>
            </div>
            <div className="flex items-center justify-center w-[134.63px] h-[40px] bg-[#29333D] rounded-[8px] mt-[8px]  ">
              <a
                href="https://rutube.news/"
                target="_blank"
                rel="noreferrer"
                className=" cursor-pointer text-[14px] text-[#BFC9D6] font-300 name  "
              >
                RUTUBE Новости
              </a>
            </div>
          </div>
        </div>
        <div className=" mt-[16px] pl-[24px] ">
          <p className=" text-[12px] text-[#5A6877]  ">
            RUTUBE в других соцсетях
          </p>
          <div className="flex  gap-[8px] mt-[8px]  ">
            <div className=" flex items-center w-[26px] h-[26px] bg-[#29333D] rounded-[8px]  ">
              <a href="https://vk.com/rutube" target="_blank" rel="noreferrer">
                <img
                  src="https://pic.rutubelist.ru/links/0f/ec/0fecf4650a55c53268771feb7339a6bf.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-[26px] h-[26px] bg-[#29333D] rounded-[8px] ">
              <a href="https://ok.ru/rutube" target="_blank" rel="noreferrer">
                <img
                  src="https://pic.rutubelist.ru/links/a8/b2/a8b2bc7ce17b03beae2824bedd05c06e.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-[26px] h-[26px] bg-[#29333D] rounded-[8px] ">
              <a href="https://t.me/rutube" target="_blank" rel="noreferrer">
                <img
                  src="https://pic.rutubelist.ru/links/73/0a/730a393b40003b9c62a610bfc30e1942.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-[26px] h-[26px] bg-[#29333D] rounded-[8px] ">
              <a
                href="https://invite.viber.com/?g2=AQB5Rgxm%2BTFpukzaGQs5hmE2MY4f3aw6rDJdwfvTw9BIhtdCCVdVJsAdr5zRwmQt_&lang=ru"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://pic.rutubelist.ru/links/0c/b1/0cb1d57ced42c632c5dc1c76e24c5ad3.svg"
                  alt=""
                />
              </a>
            </div>
            <div className="flex items-center justify-center w-[26px] h-[26px] bg-[#29333D] rounded-[8px] ">
              <a href="https://dzen.ru/rutube" target="_blank" rel="noreferrer">
                <img
                  src="https://pic.rutubelist.ru/links/fa/86/fa86b22abd100f2365922ca0b3f60856.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="border-b border-[#29333D] w-full h-4"></div>
        <div className=" pl-[24px] ">
          <a
            href="https://rutube.ru/brand/"
            className=" cursor-pointer text-[11px] font-400 text-[#BFC9D6] name "
            target="_blank"
            rel="noreferrer"
          >
            Фирменный стиль
          </a>
          <p className=" text-[11px] font-400 text-[#BFC9D6] mt-[8px] ">
            © 2024, RUTUBE
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
