import React from "react";
import Button from "../button";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setItemInModal } from "../../redux/introProduct/introSlice";

const Eye = ({product, openModal}) => {

    const dispatch = useDispatch();

    const items = useSelector((state) => state.intro.itemsInModal);
    const isitemInCart = items.some((el) => el.id === product.id);

    const heandalClick = (event) => {
        event.stopPropagation();
        if(!isitemInCart){
          dispatch(setItemInModal(product));
        }
      };


  return (
    <Button onClick={heandalClick} type="secondary" product={product}>
      <IoEyeSharp onClick={openModal} size={32} />
    </Button>
  );
};

export default Eye;
