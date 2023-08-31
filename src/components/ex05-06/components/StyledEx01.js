import { styled } from "styled-components";

const Box = styled.div`
  width: ${(props) => props.w};
  height: ${(props) => props.h};
  background-color: ${(props) => props.bgColor};
  /* margin-bottom: 30px; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.r};
`;

// export const StyledEx01 = () => {
//   return (
//     <div>
//       <Box bgColor="darkseagreen"></Box>
//       <Box bgColor="beige"></Box>
//     </div>
//   );
// };

export const StyledEx01 = () => {
  return (
    <div>
      <Box w="500px" h="500px" r="30px" bgColor="darkseagreen">
        <Box w="200px" h="200px" r="50%" bgColor="beige">
        <Box w="100px" h="100px" r="20%" bgColor="lightgray"></Box>
        </Box>
      </Box>
    </div>
  );
};
