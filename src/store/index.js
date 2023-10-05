import {configureStore, createSlice } from "@reduxjs/toolkit";

const todoListSlice = createSlice({
    name: "todoList",
    initialState: [],
    reducers: {
        Add(state, action){
            return [...state, action.payload]
        },
        Task_Completed(state, action){
            const tempCurrentState = state.map((element, index) => {
                return element.id == action.payload.id ? {
                    id: action.payload.id,
                    todoItem: action.payload.todoItem,
                    isCompleted: action.payload.isCompleted
                } : element
            });
            return tempCurrentState
        }
    }
})

const store = configureStore({
    reducer: {
        todolist: todoListSlice.reducer
    }
}); 

export { store };

export const { Add, Task_Completed }  =  todoListSlice.actions;
