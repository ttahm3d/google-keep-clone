import { useState } from "react";
import Header from "./components/Header/Header";
import NoteSection from "./components/NoteSection";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./utils/theme";

const App = () => {
	const [theme, setTheme] = useState("darkTheme");

	return (
		<ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
			<GlobalStyles />
			<Header theme={theme} setTheme={setTheme} />
			<NoteSection />
		</ThemeProvider>
	);
};

export default App;
