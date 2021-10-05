import { useContext } from "react";
import { NoteCard, NotesContainer } from "./NotesGrid.styles";
import { NotesContext } from "../../../context/NotesContext";

const NotesGrid = () => {
	const { state } = useContext(NotesContext);
	const notes = state.notes;

	return (
		<NotesContainer>
			{notes
				? notes.map((note, index) => (
						<NoteCard key={index} r>
							<h2>{note.title}</h2>
							<p>{note.description}</p>
							<p>
								{note.tags.map((tag, i) => (
									<small key={i}>#{tag}&nbsp;</small>
								))}
							</p>
						</NoteCard>
				  ))
				: null}
		</NotesContainer>
	);
};

export default NotesGrid;
