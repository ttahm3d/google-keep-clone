import { Container } from "../../utils/styles";
import AddNote from "./AddNote.js/AddNote";
import NotesGrid from "./NotesGrid/NotesGrid";
import {NotesContextProvider } from "../../context/NotesContext";

const NoteSection = () => {

	return (
		<Container>
			<NotesContextProvider>
				<AddNote  />
				<NotesGrid />
			</NotesContextProvider>
		</Container>
	);
};

export default NoteSection;
