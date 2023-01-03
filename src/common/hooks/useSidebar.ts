import { useState } from "react";

const useSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };
  return { isOpen, toggleSidebar };
};

export default useSidebar;
