import { useState } from "react";
import { styled } from "styled-components";

const Wrap = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  max-width: 450px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
`;

const Header = styled.header`
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  ul,
  li {
    list-style: none;
  }

  .ul {
    width: 100%;
    height: 100vh;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  li {
    margin-top: 50px;
    font-size: 15px;
    font-weight: 600;
  }
`;

const Button = styled.button`
  font-size: 20px;
  font-weight: 900;
  width: 45px;
  height: 30px;
  position: fixed;
`;

export const Menu = () => {
  const [show, setshow] = useState(false);

  const menuToggle = () => {
    setshow(!show);
  }

  return (
    <div>
      <Wrap>
        <Header>

          <Button onClick={menuToggle}>=</Button>

          <ul style={{display: show ? "block":"none"}}>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
          </ul>

        </Header>

      </Wrap>
    </div>
  );
};
