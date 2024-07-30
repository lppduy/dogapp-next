import React from "react";



export default function AppMenuItem({ text, icon }: TitleIcon) {
  return <div className="hover:bg-[#8A6032] text-white hover:cursor-pointer 
   w-[90px] h-[35px] gap-2 CENTER rounded-md">
    {icon} <span>{text}</span>
  </div>;
}
