import styles from "./Input_todo_item.module.css";
import { useState } from "react";

const Input_todo_item = ({ state, dispatch }) => {
  const [todoItem, setTodoItem] = useState("");

  const handleOnChange = (e) => {
    setTodoItem(e.target.value);
  };

  const handleOnClickForAddItemButton = () => {
    dispatch({
      type: "Add",
      value: {
        id: state.length + 1,
        todoItem: todoItem,
        isCompleted: false
      },
    });

    setTodoItem("");
  };

  return (
    <>
      <div className={styles.todo} role="Section to add new todo item in list">
        <input
          type="text"
          name="todo_item"
          id="todo_item"
          className={styles.input_todo_item}
          value={todoItem}
          onChange={(e) => handleOnChange(e)}
        />

        <button
          onClick={handleOnClickForAddItemButton}
          className={styles.todo_item_button}
          disabled={todoItem.length <= 0}
        >
          Add Item
        </button>
      </div>
    </>
  );
};
export default Input_todo_item;
