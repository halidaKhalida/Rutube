import axios from "axios";
import { useEffect, useState } from "react";

const Catalog = () => {
  const [catalog, setCatalog] = useState([]);

  const getCatalog = async () => {
    try {
      const response = await axios.get(
        "https://ed7dff7529e06432.mokky.dev/catalog"
      );
      setCatalog(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCatalog();
  }, []);
    // px-110px or 147px
  return (
    <div className="grid grid-cols-5 w-full h-auto pb-[80px] overflow-x-hidden absolute gap-6   px-[110px] mt-[16px] bg-[#14191F]">
      {catalog.map((c) => (
        <div className=" catalogg flex flex-col relative items-center w-[265.59px]  h-[265.59px] bg-[#1C232B]  rounded-[6px]  ">
           <a className=" catalogg flex flex-col relative items-center w-[265.59px]  h-[265.59px] bg-[#1C232B]  rounded-[6px] " href={c.url}>
          <img className="    " src={c.img} alt="" />
          <p className=" first text-[18px] font-semibold absolute   text-[#E1E5EA] bottom-5 ">
            {c.text}
          </p>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
