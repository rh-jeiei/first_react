import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { mainColors } from "../../../GlobalStyled";

const SFooter = styled.div`
  height: 70px;
  background-color: white;
  color: ${mainColors.darkGrayColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 50px;
  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;

const Text5 = styled.h4`
  display: flex;
  margin-right: 130px;
  color: #a4a4a4;
  font-size: 15px;
`;

const StepBtn = styled.div`
  width: 45px;
  height: 45px;
  font-size: 15px;
  background-color: #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Footer = () => {
  return (
    <div>
      <SFooter>
        <img src="https://m.media-amazon.com/images/I/41C+zeSm8ZL._UF1000,1000_QL80_.jpg"></img>
        <Text5>Marigold</Text5>
        <StepBtn>
          <FontAwesomeIcon icon={faForwardStep}></FontAwesomeIcon>
        </StepBtn>
      </SFooter>
    </div>
  );
};
