import { styled } from "styled-components";
import { Header } from "../ex10/components/Header";
import { mainColors } from "../../GlobalStyled";
import { Player } from "./components/Player";
import { Footer } from "./components/Footer";
import { Section } from "./components/Section";

const Wrap = styled.div`
  max-width: 390px;
  width: 100%;
  height: 800px;
  margin: 0 auto;
  background-color: ${mainColors.darkGrayColor};
  border-radius: 20px;
  color: white;
  padding: 30px;
`;

export const MusicApp = () => {
  return (
    <>
      <Wrap>
        <Header />

        <Section />

        <Player />

        <Footer />
      </Wrap>
    </>
  );
};
