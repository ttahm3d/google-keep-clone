import styled from "styled-components";

export const FooterComponent = styled.footer`
	margin-top: 2rem;
	background-color: ${(props) => props.theme.bgClrDkr};
	padding: 2rem 0;

	ul {
		display: flex;
		flex-direction: column;
		padding: 0;
		gap: 1.5rem;

		li {
			list-style: none;
			gap: 1rem;
			display: flex;
			align-items: center;

			svg {
				padding: 0;
			}
		}

		a {
			text-decoration: none;
			color: inherit;
		}
	}
`;
