import styled from "styled-components";

export const NotesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	margin: 1rem;
	justify-content: space-around;
	margin: 0 auto;
`;

export const NoteCard = styled.div`
	background-color: ${(props) => props.theme.bgClrLtr};
	padding: 1rem;
	display: flex;
	flex-direction: column;
	border-radius: 0.8rem;
	overflow: hidden;
	width: 100%;

	h3 {
		margin-bottom: 0.5rem;
	}

	p {
		color: ${(props) => props.theme.fontClrLtr};
	}
`;
