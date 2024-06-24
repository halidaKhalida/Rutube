

const Cards_films = ({img,text}) => {
  return (
    <div>
      <img className=" w-[204px] h-[285px] rounded-[6px] object-cover " src={img} alt="" />
      <p className="text-white text-[14px]  mt-[8px]  ">{text}</p>
    </div>
  )
}

export default Cards_films