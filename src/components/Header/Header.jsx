import { HeaderComponent, ToggleButton } from "./Header.styles"
import { Container } from "../../utils/styles"
import { FaSun, FaMoon, FaBook } from "react-icons/fa";

const Header = ({theme, setTheme}) => {

  const toggleTheme = () => {
		theme === "darkTheme" ? setTheme("lightTheme") : setTheme("darkTheme");
	};
  return (
    <HeaderComponent>
      <Container>
        <nav>
          <div className="logo">
            <FaBook /> 
            <>Keep</>
          </div>
          <ToggleButton onClick={() => toggleTheme()}>
            {theme === "lightTheme" ? (
              <FaMoon style={{ color: "#D5D8DC" }} />
            ) : (
              <FaSun style={{ color: "#f1c40f" }} />
            )}
          </ToggleButton>
        </nav>
      </Container>
    </HeaderComponent>
  )
}

export default Header
