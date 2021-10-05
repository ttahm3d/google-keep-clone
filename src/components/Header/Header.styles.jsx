import styled from 'styled-components'

export const HeaderComponent = styled.header`
  box-shadow: 0 0px 0px 3px ${(props) => props.theme.bgClrLt};
  background-color: ${(props) => props.theme.bgClr};
  padding: 1rem; 
  position: sticky;
  top:0;
  z-index: 2;
  backdrop-filter: blur(8px);
  
  nav {
    display:flex;
    justify-content:space-between;

    .logo {
      color: ${(props) => props.theme.accentClr};
      font-size:2rem;
      font-weight: 800;
    }

  }
`

export const ToggleButton = styled.button`
  padding: 0.8rem;
  font-weight: 600;
  font-size: 1.2rem;
  background-color:  ${(props) => props.theme.bgClr};
  border: none;
  border-radius: 1rem;
  box-shadow: 2px 4px 6px ${props => props.theme.bgClrDkr},
  2px 2px 2px ${props => props.theme.bgClrDkr},
  2px 2px 2px ${props => props.theme.bgClrDkr};;
`