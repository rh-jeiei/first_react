import { styled } from "styled-components";
import { contents } from "../apiEx";

const Wrap = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Con = styled.div`
  width: 30%;
  padding-right: 20px;
`;

const Bg = styled.div`
  height: 350px;
  background: url(${(props) => props.bgurl}) no-repeat center / cover;
`;

const Title = styled.h3``;

const Desc = styled.p``;

export const CardUi = () => {
  return (
    <div>
      <Wrap>
        {contents.map((contents) => (
          <Con key={contents.id}>
            <Bg bgurl={contents.bgUrl}/>
            <Title>{contents.title}</Title>
            <Desc>{contents.desc}</Desc>
          </Con>
        ))}
      </Wrap>
    </div>
  );
};
