import { useState } from "react";
import styles from "./Like.module.css";
import { BsHeart } from "react-icons/bs";

interface LikeProps {
  onClick: () => void;
  clicked: boolean;
}

const Like = () => {
  const [clickedState, setClickedState] = useState(false);
  return (
    <>
      <BsHeart
        fontSize={"5rem"}
        onClick={() => {
          setClickedState(!clickedState);
          console.log(clickedState);
        }}
        style={{
          color: clickedState === false ? "black" : "red",
        }}
      />
    </>
  );
};

export default Like;
