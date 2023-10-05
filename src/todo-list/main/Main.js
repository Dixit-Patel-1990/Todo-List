import styles from "./main.module.css"
import {useEffect, useReducer} from "react";
import Input_todo_item from "../input_todo_item/Input_todo_item";
import ListItem from "../listitem/ListItem";


const initialState = [];
const reducer = (currentState, action) => {

    switch(action.type){
        case "Add":
            return [...currentState, action.value]
        case "Task_Completed":
            const tempCurrentState = currentState.map((element, index) => {
                return element.id == action.value.id ? {
                    id: action.value.id,
                    todoItem: action.value.todoItem,
                    isCompleted: action.value.isCompleted
                } : element
            });
            return tempCurrentState
    }
}

const Main = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        console.log("State => ", state);
    }, [state]);
    
    return(
        <>
            <main className={styles.main}>

                <section className={styles.header} role="Header">
                    <h1> To Do Application</h1>
                 </section>
                 
                 <Input_todo_item state={state} dispatch={dispatch} />

                 <ListItem state={state} dispatch={dispatch}></ListItem>

            </main>

        </>
    );
}

export default Main;