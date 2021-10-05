import { createGlobalStyle } from "styled-components";

export const lightTheme = {
	accentClr: "hsl(209, 91%, 55%)",
	accentClrLt: "hsl(209, 91%, 75%)",
	accentClrLtr: "hsl(209, 91%, 95%)",
	accentClrDk: "hsl(209, 91%, 43%)",
	accentClrDkr: "hsl(209, 91%, 33%)",
	bgClr: "hsl(0, 0%, 100%)",
	bgClrLt: "hsla(0, 0%, 10%, 10%)",
	bgClrLtr: "hsla(0, 0%, 90%, 25%)",
	bgClrDk: "hsl(0, 0%, 85%)",
	bgClrDkr: "hsla(0, 0%, 80%, 30%)",
	fontClr: "hsl(0, 0%, 9%)",
	fontClrLt: "hsl(0, 0%, 20%)",
	fontClrLtr: "hsl(0, 0%, 25%)",
	fontClrDk: "hsl(0, 0%, 30%)",
	fontClrDkr: "hsl(0, 0%, 35%)",
	yellowClr: "hsl(52, 100%, 55%)",
};

export const darkTheme = {
	accentClr: "hsl(209, 91%, 55%)",
	accentClrLt: "hsl(209, 91%, 75%)",
	accentClrLtr: "hsl(209, 91%, 95%)",
	accentClrDk: "hsl(209, 91%, 43%)",
	accentClrDkr: "hsl(209, 91%, 33%)",
	bgClr: "hsl(0, 0%, 9%)",
	bgClrLt: "hsla(0, 0%, 25%, 80%)",
	bgClrLtr: "hsla(0, 0%, 12%, 75%)",
	bgClrDk: "hsl(0, 0%, 1%)",
	bgClrDkr: "hsl(0, 0%, 4%)",
	fontClr: "hsl(0, 0%, 100%)",
	fontClrLt: "hsl(0, 0%, 95%)",
	fontClrLtr: "hsl(0, 0%, 90%)",
	fontClrDk: "hsla(0, 0%, 85%, 70%)",
	fontClrDkr: "hsla(0, 0%, 80%, 50%)",
	yellowClr: "hsl(55, 55%, 55%)",
};

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.bgClr};
    color: ${(props) => props.theme.fontClr}
	}
`;
