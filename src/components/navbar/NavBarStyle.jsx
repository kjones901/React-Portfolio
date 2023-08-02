import styled from "styled-components";
import logo from "../../assets/Logo1.png"

export const NavBarContainer = styled.div`
  z-index: 2;
  position: fixed;
`

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`
export const LogoImage = styled.img`
  margin-left: 10px;
  padding: 20px;
  width: 105px;
`
export const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
`

export const Link = styled.li`
  font-family: Comic Sans MS;
  font-size: 1.5rem;
  decoration: none;
  padding-left: 80px;
`;

export const Logo = () => {
  return <LogoImage src={logo} />
}