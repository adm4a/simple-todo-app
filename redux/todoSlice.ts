import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

export interface TodoItem {
  id: number;
  title: string;
  category: string;
  date: string;
  time: string;
  notes: string;
  completed: boolean;
}

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as TodoItem[],
  reducers: {
    addItem: (state, action: PayloadAction<TodoItem>) => {
      state.push(action.payload);
    },
    editItem: (
      state,
      action: PayloadAction<{ id: number; updatedItem: Partial<TodoItem> }>
    ) => {
      const { id, updatedItem } = action.payload;
      const index = state.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedItem };
      }
    },
    deleteItem: (state, action: PayloadAction<number>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addItem, editItem, deleteItem } = todoSlice.actions;

const rootReducer = combineReducers({
  todoReducer: todoSlice.reducer,
});

export default todoSlice.reducer;
