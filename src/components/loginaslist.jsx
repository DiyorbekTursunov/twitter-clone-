import React from "react";

const Loginaslist = ({item}) => {
  return (
    <>
        <div className="rounded-[9px] w-[145px] h-[164px] flex flex-col items-center justify-center bg-[#EFF8FF]">
            <img src={item.userImg} alt="" className="mb-[7px]"/>
            <h2 className="text-[18px] font-medium">{item.name}</h2>
            <h2 className="text-[15px] font-medium text-[#ADADAD]">{item.Date}</h2>
        </div>
    </>
  );
};

export default Loginaslist;
