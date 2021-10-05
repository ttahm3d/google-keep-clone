import { useState } from "react";
import Header from "./components/Header/Header";
import NoteSection from "./components/NoteSection";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./utils/theme";
import Footer from "./components/Footer/Footer";
import "./App.css";

const App = () => {
	const [theme, setTheme] = useState("darkTheme");

	return (
		<ThemeProvider theme={theme === "darkTheme" ? darkTheme : lightTheme}>
			<GlobalStyles />
			<div className="app">
				<Header theme={theme} setTheme={setTheme} />
				<NoteSection />
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default App;
