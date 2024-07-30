import { link } from "fs";
import { BiSolidDog } from "react-icons/bi";
import { FaDog } from "react-icons/fa";
import { GiSittingDog } from "react-icons/gi";
import { LuDog } from "react-icons/lu";

export const MenuItemList = [
  {
    id: 0,
    title: 'Bouvier',
    link: '/Bouvier',
    icon: <FaDog />,
  },
  {
    id: 1,
    title: 'Airedale',
    link: '/Airedale',
    icon: <GiSittingDog />,
  },
  {
    id: 2,
    title: 'Aikita',
    link: '/Aikita',
    icon: <BiSolidDog />,
  },
  {
    id: 3,
    title: 'Bluetick',
    link: '/Bluetick',
    icon: <LuDog />,
  },
];