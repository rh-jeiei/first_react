import { Menus } from "./Menus";
import { WeekMenu } from "./WeekMenu";

const menus = [
  {
    week: "월요일",
    breakfast: "그릭요거트",
    lunch: "베이글 샌드위치",
    dinner: "순대국밥",
  },
  {
    week: "화요일",
    breakfast: "프렌치 토스트",
    lunch: "치킨 타코",
    dinner: "바질 페스토 파스타",
  },
  {
    week: "수요일",
    breakfast: "에그 베네딕트",
    lunch: "프랭크버거",
    dinner: "연어 포케",
  },
];

export const FoodMenu = () => {
  return (
    <div>
      {/* *문제
    ul, li 태그를 활용하여 아침, 점심, 저녁 메뉴 제작
    단, props를 활용할 것 */}
      {/* <Menus breakfast="꿔바로우" lunch="마라탕" dinner="마라 치즈 타코야끼" /> */}
      <WeekMenu menuList={menus} />
    </div>
  );
};