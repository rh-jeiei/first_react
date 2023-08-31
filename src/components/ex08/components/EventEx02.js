import { useState } from "react";
import { styled } from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.$changeColor};
`;

export const EventEx02 = () => {
  const [color, setColor] = useState("salmon");
  const [num, setNum] = useState(0);

  // const isColor = () => {
  //   setColor("bisque");
  // }

  const onColor = () => {
    if (num === 0){
      setColor("bisque");
      setNum(num + 1);
    }else if (num === 1){
      setColor("salmon");
      setNum(num - 1);
    }
  };

  return (
    <div>
      <Box onClick={onColor} $changeColor={color}></Box>
      {/* <Box onClick={isColor} $changeColor={color}></Box> */}
    </div>
  );
};

// 숨김메뉴만들기 