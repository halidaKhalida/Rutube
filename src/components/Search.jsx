import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {ProductContext} from "../Context/Video_context";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  let searchText = search.slice(3)
  const {searchs,setSearchs} = useContext(ProductContext)
  const handleSearchs = (e) => {
    e.preventDefault();
    let value = e.target.search.value;
    navigate(`/search?q=${value}`);
  };

  return (
    <div>
      <form onSubmit={handleSearchs} className=" flex items-center ">
        <div className=" flex w-[344px] h-[40px] items-center border border-[#29333D] rounded-[6px] px-[16px] py-[8px] ">
          <img
            onClick={() => navigate(`/search`)}
            className=" w-[24px] h-[24px] "
            src="/search.svg"
            alt="search"
          />
          <input
            className="bg-inherit w-[261px] outline-none ml-[12px]  "
            type="text"
            onChange={(e)=>setSearchs(e.target.value)}
            defaultValue={searchText}
            placeholder="Поиск"
            name="search"
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
