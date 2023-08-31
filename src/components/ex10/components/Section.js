import { styled } from "styled-components";

const SSection = styled.div`
  justify-content: space-between;
  text-align: center;
  margin: 20px 0;
`;

const Album = styled.div`
  img {
    width: 90%;
    height: 300px;
    border-radius: 30px;
    margin: 30px auto 30px auto;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;

const Text1 = styled.h3`
  font-size: 25px;
  font-weight: 600;
  margin: 10px;
`;

const Text2 = styled.h3`
color: #dbdbdb;
  font-weight: 300;
  margin-bottom: 40px;
`;

const AudioBar = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 5px;
`;

const ColorBar = styled.div`
  width: 10%;
  height: 5px;
  background-color: salmon;
  border-radius: 2px 0 0 2px;
`;

const WhiteBar = styled.div`
  width: 90%;
  height: 5px;
  background-color: gray;
  border-radius: 0 2px 2px 0;
`;

const Audio = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text3 = styled.div`
  font-size: 14px;
  color: #dbdbdb;
`;

export const Section = () => {
  return (
    <div>
      <SSection>
        <Album>
          <img src="https://i0.wp.com/anitrendz.net/news/wp-content/uploads/2023/04/millenium-parade-sheena-ringo-work-cover.jpg?resize=500%2C500&ssl=1"></img>
          <Text1>WORK</Text1>
          <Text2>millennium parade</Text2>
        </Album>

        <AudioBar>
          <ColorBar></ColorBar>
          <WhiteBar></WhiteBar>
        </AudioBar>

        <Audio>
          <Text3>00:17</Text3>
          <Text3>03:22</Text3>
        </Audio>
      </SSection>
    </div>
  );
};
