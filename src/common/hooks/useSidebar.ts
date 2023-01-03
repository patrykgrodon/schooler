import { useState } from "react";
import { getLSItem, saveLSItem } from "utils/webStorage";

const useSidebar = () => {
  const sidebarLsName = "isSidebarOpen";
  const sidebarLsValue = getLSItem<boolean>(sidebarLsName);
  const [isOpen, setIsOpen] = useState(
    sidebarLsValue === undefined ? true : sidebarLsValue
  );

  const toggleSidebar = () => {
    setIsOpen((prevState) => {
      saveLSItem(sidebarLsName, !prevState);
      return !prevState;
    });
  };
  return { isOpen, toggleSidebar };
};

export default useSidebar;
