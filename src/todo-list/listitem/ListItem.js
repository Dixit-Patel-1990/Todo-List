import { useState } from "react";
import styles from "./ListItem.module.css";
import DisplayTotalItems from "../displaytotalitems/DisplayTotalItems";
import GetRandomCityData from "../getRandomCityData/GetRandomCityData";
import { Link } from "react-router-dom";

const ListItem = ({ state, dispatch }) => {
  const handleOnClick = (element) => {
    dispatch({
      type: "Task_Completed",
      value: {
        id: element.id,
        todoItem: element.todoItem,
        isCompleted: !element.isCompleted,
      },
    });
  };

  return (
    <>
      <ul className={styles.pending_todos}>
        {state &&
          state.length > 0 &&
          state.map((element, index) => {
            return (
              <li
                className={element.isCompleted ? styles.isComplete : ""}
                key={element.id}
                onClick={() => handleOnClick(element)}
              >
                
                {element.todoItem}
              </li>
            );
          })}
      </ul>
      <div className={styles.footer}>
        <DisplayTotalItems state={state} />

        <Link className={styles.link} to="/GetRandomCityData">
          Get City Data
        </Link>
      </div>
    </>
  );
};
export default ListItem;
