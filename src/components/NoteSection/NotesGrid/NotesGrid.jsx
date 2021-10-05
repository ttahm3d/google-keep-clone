import { useContext } from "react";
import { NoteCard, NotesContainer } from "./NotesGrid.styles";
import { NotesContext } from "../../../context/NotesContext";

const NotesGrid = () => {

	const {state} = useContext(NotesContext);
	const notes = state.notes

	return (
		<NotesContainer>
			{notes
				? notes.map((note, index) => (
						<NoteCard key={index}r>
							<h3>{note.title}</h3>
							<p>{note.description}</p>
						</NoteCard>
				  ))
				: null}
		</NotesContainer>
	);
};

export default NotesGrid;
