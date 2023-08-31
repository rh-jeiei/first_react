import {
  faAngleDown,
  faBackward,
  faBars,
  faForward,
  faForwardStep,
  faPause,
  faRepeat,
  faShuffle,
  faSkull,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { styled } from "styled-components";

const Wrap = styled.div`
margin: 0 auto;
  width: 390px;
  height: 725px;
  background-color: dimgrey;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const Header = styled.header``;

const Section = styled.section`
box-sizing: border-box;
width: 200px;
height: 200px;
border-radius: 30px;
`;

const Footer = styled.footer`
  width: 390px;
  height: 80px;
  background-color: white;
  border-radius: 50px;
`;

const ConWrap = styled.div``;

const Con = styled.div`
float: left;
`;

export const IconEx = () => {
  return (
    <div>
      {/* <h3>메뉴 버튼 아이콘</h3>
      <FontAwesomeIcon
        icon={faBars}
        style={{
          color: "darkseagreen",
          fontSize: "80px",
        }}
      />
      <br />
      <br />

      <h3>유저 아이콘</h3>
      <FontAwesomeIcon
        icon={faSkull}
        style={{
          color: "#9BD2BC",
          fontSize: "80px",
          margin: "10px 0px",
        }}
      /> */}

      <Wrap>
        <Header>
          <FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </Header>

        <Section>
          <ConWrap>
            <Con>
              <FontAwesomeIcon icon={faShuffle} style={{
                fontSize: "20px",
              }}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faBackward}></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faPause}
                style={{
                  backgroundColor: "orange",
                  fontSize: "20px",
                  boxSizing: "border-box",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50px"
                }}
              ></FontAwesomeIcon>
              <FontAwesomeIcon icon={faForward} style={{
                fontSize: "20px",
              }}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faRepeat} style={{
                fontSize: "20px",
              }}></FontAwesomeIcon>
              <FontAwesomeIcon icon={faForwardStep} style={{
                fontSize: "20px",
              }}></FontAwesomeIcon>
            </Con>
          </ConWrap>
        </Section>

        <Footer></Footer>
      </Wrap>
    </div>
  );
};
