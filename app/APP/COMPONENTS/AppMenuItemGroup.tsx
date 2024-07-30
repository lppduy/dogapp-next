import React from "react";
import { MenuItemList } from "./CONSTANTS/MenuItemList";
import AppMenuItem from "./AppMenuItem";

export default function
  () {
  return <>
    {
      MenuItemList.map((item) => (
        <AppMenuItem key={item.id} text={item.title} icon={item.icon} />
      ))
    }
  </>;
}
