import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { mainColors } from "../../../GlobalStyled";

const Header = styled.header`
  width: 100%;
  padding: 20px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: ${mainColors.fontColor};
  }
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
`;

const Logo = styled.h3`
  font-size: 28px;
  font-weight: 700;
`;

const MenuWrap = styled.ul`
  font-size: 18px;
  font-weight: 500;
  list-style: none;
  display: flex;
  li {
    margin-left: 150px;
  }
`;

export const HeaderEx12 = () => {
  return (
    <Header>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <MenuWrap>
        <li>
          <Link to={"/sub/0"}>MENU1</Link>
        </li>
        <li>
          <Link to={"/sub/1"}>MENU2</Link>
        </li>
        <li>
          <Link to={"/sub/2"}>MENU3</Link>
        </li>
      </MenuWrap>
    </Header>
  );
};
