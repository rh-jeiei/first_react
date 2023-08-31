import { styled } from "styled-components";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mainColors } from "../../../GlobalStyled";
import { useState } from "react";

const SHeader = styled.div`
  display: flex;
  justify-content: space-between;
  article {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
  }
  ul {
    margin-top: 270px;
    width: 330px;
    height: 500px;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-direction: column;
    background-color: #1c1c1c;
    border-radius: 30px 30px 0 0;
    transition: 0.5s;
  }
  li {
    margin: 25px;
    font-size: 15px;
    font-weight: 600;
  }
`;

const MoreBtn = styled.article`
  background-color: white;
  color: ${mainColors.darkGrayColor};
`;

const MenuBtn = styled.article`
  border: 1px solid #f1f1f1;
`;

export const Header = () => {
  const [show, setShow] = useState(false);

  const menuToggle = () => {
    setShow(!show);
  };

  return (
    <div>
      <SHeader>
        <MoreBtn>
          <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
        </MoreBtn>
        <MenuBtn onClick={menuToggle}>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </MenuBtn>
        <ul style={{marginTop : show ? "770px":"270px"}}>
          <li>현재 재생목록에 추가</li>
          <li>보관함에 저장</li>
          <li>재생목록에 저장</li>
          <li>앨범으로 이동</li>
          <li>아티스트 페이지로 이동</li>
          <li>공유</li>
          <li>신고</li>
        </ul>
      </SHeader>
    </div>
  );
};

