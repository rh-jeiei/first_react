import { Intro } from "./Intro";
import { FoodMenu } from "./ex/FoodMenu";

export const PropsEx = () => {
  return (
    <div>
      <Intro name="최종수" age="18" />
      <hr />
      <Intro name="박병찬" age="21" />
      <hr />
      <Intro name="기상호" age="16" />
      <FoodMenu />
    </div>
  );
};

// export const PropsEx02 = () => {
//   return <div>두번째 컴포넌트</div>;
// };

// export const PropsEx03 = () => {
//   return <div>세번째 컴포넌트</div>;
// };

// export default PropsEx;
// export default PropsEx02;
// =>export는 컴포넌트 내부에 단 하나만 존재해야됨

// *props
// =>함수 매개변수 역할
// =>프롭스는 오브젝트로 반환함
