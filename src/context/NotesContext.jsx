import { createContext, useReducer } from "react";
import { ADD_NOTE } from "../constants/constants";

export const NotesContext = createContext();

const notesReducer = (state, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {notes: [...state.notes, action.payload]};
    default: 
      return state
  }
}

export const NotesContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(notesReducer, { notes: []})
  return (
    <NotesContext.Provider value={{state, dispatch}}>
      {children}
    </NotesContext.Provider>
  )
}