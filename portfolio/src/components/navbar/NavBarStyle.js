import styled from "styled-components";
import logo from "../../assets/Logo1.png"

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`
export const LogoImage = styled.img`
  padding: 20px;
  width: 100px;
`
export const NavLinks = styled.ul`
  display: flex;
  list-style-type: none;
  padding-right: 20px;
  gap: 20px;
`

export const Link = styled.li`
  color: white;
  font-size: 1.3rem;
  decoration: none;
`;

export const Logo = () => {
  return <LogoImage src={logo} />
}