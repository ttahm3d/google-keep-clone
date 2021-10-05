import { useContext, useState } from "react";
import { AddNoteContainer, AddNoteButton } from "./AddNote.styles";
import { FaPlusCircle } from "react-icons/fa";
import { NotesContext } from "../../../context/NotesContext";
import { ADD_NOTE } from "../../../constants/constants";

const initialState = { title: "", description: "", tags: [] };

const AddNote = () => {
	const [form, setForm] = useState(initialState);

	const { state, dispatch } = useContext(NotesContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: ADD_NOTE, payload: form });
		setForm(initialState);
	};

	console.log(state);

	return (
		<AddNoteContainer>
			<form>
				<input
					type="text"
					value={form.title}
					placeholder="Title"
					onChange={(e) => setForm({ ...form, title: e.target.value })}
				/>
				<input
					type="text"
					value={form.description}
					placeholder="Description"
					onChange={(e) => setForm({ ...form, description: e.target.value })}
				/>
				<input
					type="text"
					placeholder="Tags"
					onChange={(e) =>
						setForm({ ...form, tags: e.target.value.split(" ") })
					}
				/>

				<AddNoteButton type="submit" onClick={handleSubmit}>
					<FaPlusCircle />
				</AddNoteButton>
			</form>
		</AddNoteContainer>
	);
};

export default AddNote;
