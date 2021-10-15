import { createContext, useReducer, useEffect } from "react";
import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from "../constants/constants";

export const NotesContext = createContext();

const notesReducer = (state, action) => {
	switch (action.type) {
		case ADD_NOTE:
			return { notes: [...state.notes, action.payload] };
		case EDIT_NOTE:
			return { notes: [...state.notes, action.payload] };
		case DELETE_NOTE:
			return { notes: [...state.notes, action.payload] };
		default:
			return state;
	}
};

export const NotesContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		notesReducer,
		{ notes: [] },
		function () {
			const notesLocalStorage = localStorage.getItem("notes");
			return notesLocalStorage ? JSON.parse(notesLocalStorage) : { notes: [] };
		}
	);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(state));
	});

	console.log(state);

	return (
		<NotesContext.Provider value={{ state, dispatch }}>
			{children}
		</NotesContext.Provider>
	);
};
