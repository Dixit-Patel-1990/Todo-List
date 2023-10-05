import { useEffect, useState } from "react";
import styles from "./DisplayTotalItems.module.css";
const DisplayTotalItems = ({ state }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let c=0;
    setCount(0);
    state.forEach((element) => {
      if (!element.isCompleted) {
        c++
      }
    });
    setCount(c);
  }, [state]);

  return (
    <>
      <p>
        {count} pending {count > 1 ? "items" : "item"}
      </p>
    </>
  );
};
export default DisplayTotalItems;
