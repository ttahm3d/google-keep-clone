import styled from "styled-components";

export const NotesContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem 0;
	gap: 1rem;
	margin: 1rem;
	justify-content: space-around;
	margin: 0 auto;
`;

export const NoteCard = styled.div`
	background-color: ${(props) => props.theme.bgClrLtr};
	padding: 2rem;
	display: flex;
	flex-direction: column;
	border-radius: 0.8rem;
	overflow: hidden;
	width: 100%;
	color: ${(props) => props.theme.fontClrDkr};

	h2 {
		margin: 0 0 0.5rem 0;
		color: ${(props) => props.theme.fontClr};
	}

	p {
		color: ${(props) => props.theme.fontClrDk};
	}

	small {
		padding: 0.5rem;
		margin: 1rem 0.8rem 0 0;
		background-color: ${(props) => props.theme.bgClrLt};
		border-radius: 0.8rem;
	}
`;
