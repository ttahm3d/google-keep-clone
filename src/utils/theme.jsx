import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  accentClr: "hsl(209, 91%, 55%)",
  accentClrLt: "hsl(209, 91%, 75%)",
  accentClrLtr: "hsl(209, 91%, 95%)",
  accentClrDk: "hsl(209, 91%, 43%)",
  accentClrDkr: "hsl(209, 91%, 33%)",
  bgClr: "hsl(0, 0%, 100%)",
  bgClrLt: "hsl(0, 0%, 98%)",
  bgClrLtr: "hsl(0, 0%, 90%)",
  bgClrDk: "hsl(0, 0%, 85%)",
  bgClrDkr: "hsl(0, 0%, 80%)",
  fontClr: "hsl(0, 0%, 9%)",
  fontClrLt: "hsl(0, 0%, 20%)",
  fontClrLtr: "hsl(0, 0%, 25%)",
  fontClrDk: "hsl(0, 0%, 30%)",
  fontClrDkr: "hsl(0, 0%, 35%)",
  yellowClr: "hsl(52, 100%, 55%)"
}

export const darkTheme = {
  accentClr: "hsl(209, 91%, 55%)",
  accentClrLt: "hsl(209, 91%, 75%)",
  accentClrLtr: "hsl(209, 91%, 95%)",
  accentClrDk: "hsl(209, 91%, 43%)",
  accentClrDkr: "hsl(209, 91%, 33%)",
  bgClr: "hsl(0, 0%, 9%)",
  bgClrLt: "hsl(0, 0%, 15%)",
  bgClrLtr: "hsl(0, 0%, 12%)",
  bgClrDk: "hsl(0, 0%, 1%)",
  bgClrDkr: "hsl(0, 0%, 4%)",
  fontClr: "hsl(0, 0%, 100%)",
  fontClrLt: "hsl(0, 0%, 95%)",
  fontClrLtr: "hsl(0, 0%, 90%)",
  fontClrDk: "hsl(0, 0%, 85%)",
  fontClrDkr: "hsl(0, 0%, 80%)",
  yellowClr: "hsl(55, 55%, 55%)"
}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.bgClr};
    color: ${(props) => props.theme.fontClr}
	}
`;