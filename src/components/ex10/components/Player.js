import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBackward,
  faForward,
  faPause,
  faRepeat,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";

const SPlayer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0 30px 0;
  div {
    font-size: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ShuffleBtn = styled.div`
  margin-right: 10px;
`;

const BackwardBtn = styled.div`
  margin-right: 10px;
`;

const PauseBtn = styled.div`
  background-color: salmon;
  width: 60px;
  height: 60px;
`;

const ForwardBtn = styled.div`
  margin-left: 10px;
`;

const RepeatBtn = styled.div`
  margin-left: 10px;
`;

export const Player = () => {
  return (
    <div>
      <SPlayer>
        <ShuffleBtn>
          <FontAwesomeIcon icon={faShuffle} />
        </ShuffleBtn>
        <BackwardBtn>
          <FontAwesomeIcon icon={faBackward} />
        </BackwardBtn>
        <PauseBtn>
          <FontAwesomeIcon icon={faPause} />
        </PauseBtn>
        <ForwardBtn>
          <FontAwesomeIcon icon={faForward} />
        </ForwardBtn>
        <RepeatBtn>
          <FontAwesomeIcon icon={faRepeat} />
        </RepeatBtn>
      </SPlayer>
    </div>
  );
};
