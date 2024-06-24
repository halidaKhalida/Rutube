import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";




import Sidebar from "../components/Sidebar";
import Dinamik_Home from "../Dinamik_Pages/Dinamik_Home";
import Dinamic_Yappy from "../Dinamik_Pages/Dinamic_Yappy";
import Dinamic_Shorts from "../Dinamik_Pages/Dinamic_Shorts";
import Shorts from "../Pages/Shorts";
import In_Top from "../Pages/In_Top";
import Films from "../Pages/Films";
import Soccer from "../Pages/Soccer";
import Catalog from "../Pages/Catalog";
import Originals from "../Pages/Originals";
import Page_not_found from "../components/Page_not_found";
import Search_page from "../Pages/Search_page";
import Subscribes from "../Pages/Subscribes";
import My from "../Pages/My";
import See_later from "../Pages/See_later";
import Navbar from "../components/Navbar";
import Summer_with_rutube from "../Pages/Summer_with_rutube";
import Home from "../Pages/Home";
import History from "../Pages/History";

const PrivateRoutest = () => {
  
  return (
    <div className=" w-full mx-auto h-screen overflow-y-hidden bg-[#14191F]">
      <Navbar />
      <div className="flex relative ">
        <div className=" max-w-[310px] relative overflow-x-hidden h-auto flex">
          <Routes>
            <Route path="/" element={<Sidebar />} />
            <Route path="/shorts" element={<Sidebar />} />
            <Route path="/Yappy/:id" element={<Sidebar />} />
            <Route path="/Shorts/:id" element={<Sidebar />} />
            <Route path="/In_Top" element={<Sidebar />} />
            <Route path="/Films" element={<Sidebar />} />
            <Route path="/Soccer" element={<Sidebar />} />
            <Route path="/Catalog" element={<Sidebar />} />
            <Route path="/Originals" element={<Sidebar/>} />
            <Route path="/Summer_with_rutube" element={<Sidebar />} />
            <Route path="/subscribes" element={<Sidebar/>} />
            <Route path="/my" element={<Sidebar />} />
            <Route path="/see_later" element={<Sidebar />} />
            <Route path="/history" element={<Sidebar />} />
            <Route path="/search" element={<Sidebar />} />
            {/* <Route path="/*" element={<Sidebar />}/> */}
          </Routes>
        </div>
        <div className="flex relative h-screen overflow-x-hidden w-full bg-[#14191F]">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/shorts" element={<Shorts />} />
            <Route path="/in_top" element={<In_Top />} />
            <Route path="/films" element={<Films />} />
            <Route path="/soccer" element={<Soccer />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/originals" element={<Originals />} />
            <Route path="/search" element={<Search_page />} />
            <Route path="/subscribes" element={<Subscribes />} />
            <Route path="/my" element={<My />} />
            <Route path="/see_later" element={<See_later />} />
            <Route path="/history" element={<History />} />
            <Route
              path="/summer_with_rutube"
              element={<Summer_with_rutube />}
            />
            <Route path="/Yappy/:id" element={<Dinamic_Yappy />} />
            <Route path="/Shorts/:id" element={<Dinamic_Shorts />} />
            <Route path="/video/:id" element={<Dinamik_Home />} />
            <Route path="/In_Top/:id" element={<Dinamik_Home />} />
            <Route path="/Films/:id" element={<Dinamik_Home/>} />
            <Route path="/Soccer/:id" element={<Dinamik_Home />} />
            <Route path="/Originals/:id" element={<Dinamik_Home />} />
            <Route path="/*" element={<Page_not_found />} />
            <Route path="/search" element={<Search_page />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default PrivateRoutest;
