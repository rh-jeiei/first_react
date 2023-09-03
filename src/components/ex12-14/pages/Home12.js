import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { HeaderEx12 } from "../components/HeaderEx12";

const Banner = styled.section`
  height: 800px;
  background: url(https://pbs.twimg.com/media/FEwx_FNaAAAvdBX?format=jpg&name=medium)
    no-repeat center / cover;
`;

const Section = styled.section`
  padding: 150px 15%;
  display: flex;
  justify-content: space-between;
  a {
    width: 30%;
    height: 500px;
  }
`;

const Con = styled.div`
  height: inherit;
  background: url(${(props) => props.$bgUrl}) no-repeat center / cover;
`;

export const Home12 = () => {
  return (
    <div>
      <Banner></Banner>

      <Section>
        <Link to={"/sub/0"}>
          <Con $bgUrl="https://pbs.twimg.com/media/Fy5rl8PacAAyBrR?format=jpg&name=large"></Con>
        </Link>
        <Link to={"/sub/1"}>
          <Con $bgUrl="https://pbs.twimg.com/media/F0ulJwgaYAE2f3O?format=jpg&name=4096x4096"></Con>
        </Link>
        <Link to={"/sub/2"}>
          <Con $bgUrl="https://image1.marpple.co/files/u_2226652/2023/7/original/188c980cb2843f52f6f877c39f2de6b63954d4171.jpg?w=750&f=webp"></Con>
        </Link>
      </Section>
      {/* {data.map((con) => (
        <Link to={`/sub/${con.id}`} key={con.id}>
          <Con $bgUrl={con.img}></Con>
        </Link>
      ))} */}
    </div>
  );
};

// *git(기록)
// =>지정한 파일 및 폴더를 추적하여 각 파일, 폴더의 변화된 부분을
// 기록하는 파일 관리 툴

// *git hub(저장소)
// =>git으로 관리된 파일을 업로드하여 저장소에 저장 및 관리를 할 수 있는
// 개발자 플랫폼
