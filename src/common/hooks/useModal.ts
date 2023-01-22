import { useState } from "react";

const useModal = (initialOpenVal: boolean = false) => {
  const [isOpen, setIsOpen] = useState(initialOpenVal);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const toggleModal = () => setIsOpen((prevState) => !prevState);

  return { isOpen, openModal, closeModal, toggleModal };
};

export default useModal;
