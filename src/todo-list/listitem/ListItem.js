import { useState } from "react";
import styles from "./ListItem.module.css";
import DisplayTotalItems from "../displaytotalitems/DisplayTotalItems";
import GetRandomCityData from "../getRandomCityData/GetRandomCityData";
import { Link } from "react-router-dom";
import { Task_Completed } from "../../store";
const ListItem = ({ state, dispatch }) => {
  // const dispatch = useDispatch();

  const handleOnClick = (element) => {
    // dispatch({
    //   type: "Task_Completed",
    //   value: {
    //     id: element.id,
    //     todoItem: element.todoItem,
    //     isCompleted: !element.isCompleted,
    //   },
    // });

    dispatch(
      Task_Completed({
        id: element.id,
        todoItem: element.todoItem,
        isCompleted: !element.isCompleted,
      })
    );
  };

  return (
    <>
      <ul data-testid="listitem" className={styles.pending_todos}>
        {state &&
          state.length > 0 &&
          state.map((element, index) => {
            console.log(element);
            return (
              <li
                className={element.isCompleted && styles.isComplete}
                key={element.id}
                onClick={() => handleOnClick(element)}
                data-testid={"test" + element.id}
              >
                {element.todoItem}
              </li>
            );
          })}
      </ul>
      <div className={styles.footer} data-testid="footer">
        <DisplayTotalItems state={state} />

        <Link className={styles.link} to="/GetRandomCityData">
          Get City Data
        </Link>
      </div>
    </>
  );
};
export default ListItem;
