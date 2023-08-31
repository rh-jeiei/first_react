const intro = [
  {
    id: 0,
    name: "기상호",
    age: 16,
  },
  {
    id: 1,
    name: "박병찬",
    age: 21,
  },
  {
    id: 2,
    name: "최종수",
    age: 19,
  },
];

export const MapEx02 = () => {
  return (
    <div>
      {intro.map((intro) => (
        <div key={intro.id}>
          <h3>소개</h3>
          <h4>이름: {intro.name}</h4>
          <h4>나이: {intro.age}</h4>
          <hr />
        </div>
      ))}
    </div>
  );
};
