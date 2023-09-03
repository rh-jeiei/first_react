import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { data } from "../api";

const Section = styled.section`
  padding: 150px 20%;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 50%;
  height: 500px;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;
const TitleWrap = styled.div`
  width: 45%;
  h3 {
    font-size: 40px;
    font-weight: 700;
  }
`;

export const Sub02 = () => {

  const { id } = useParams();

  return (
    <Section>
      <Bg $bgUrl={data[id].image} />
      <TitleWrap>
        <h3>{data[id].title}</h3>
        <p>{data[id].desc}</p>
      </TitleWrap>
    </Section>
  );
};
