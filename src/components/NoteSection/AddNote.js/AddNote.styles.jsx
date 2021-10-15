import styled from "styled-components";

export const AddNoteContainer = styled.div`
	width: 90%;
	border-radius: 0.5rem;
	box-shadow: 3px 6px 6px ${(props) => props.theme.bgClrDkr},
		3px 6px 6px ${(props) => props.theme.bgClrDkr};
	margin: 2rem auto;

	form {
		display: flex;
		gap: 1rem;
		flex-direction: column;
		padding: 2rem 2rem 4rem;
		align-items: center;
	}

	input {
		font-family: inherit;
		font-size: 1rem;
		padding: 0.8rem 0.5rem;
		border: none;
		background-color: ${(props) => props.theme.bgClrLtr};
		color: ${(props) => props.theme.fontClrDk};
		width: 100%;

		:focus {
			outline: none;
		}
	}
`;

export const AddNoteButton = styled.button`
	background-color: inherit;
	color: ${(props) => props.theme.yellowClr};
	border: 0;
	font-size: 2rem;
`;
