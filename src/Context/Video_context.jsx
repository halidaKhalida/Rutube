import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

const Video_context = ({children}) => {
  const [items,setItems] = useState([])
  const [searchs,setSearchs] = useState("")
  
  const getData = async ()=>{
    try {
      const response = await axios.get("https://ed7dff7529e06432.mokky.dev/swipper_home")
      setItems(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  const onSearch = (text) =>{
    const newData = items.some((value) => value.text !== text);
    setItems(newData)
  };

  useEffect(()=>{
    getData();
  },[])
  return (
    <ProductContext.Provider value={{ items,searchs,setSearchs,onSearch }}>
      {children}
    </ProductContext.Provider>
  );

}

export default Video_context