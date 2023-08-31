// import "../css/constyle.css";

const conApi = [
  {
    id: 0,
    imgUrl: "https://pbs.twimg.com/media/Fy5rl8PacAAyBrR?format=jpg&name=large",
    title: "Garden",
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  },
  {
    id: 1,
    imgUrl:
      "https://i.shgcdn.com/0f502886-3dfa-4e34-9533-3cbc3ca0dc9e/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    title: "Moon",
    desc: " Aenean commodo ligula eget dolor. Aenean massa ridiculus mus.",
  },
  {
    id: 2,
    imgUrl:
      "https://i.pinimg.com/originals/a3/14/55/a31455a9b431a5aaa7e46a74b917c5d0.jpg",
    title: "Sky",
    desc: "Cum sociis natoque penatibus et magnis dis parturient montes.",
  },
];

export const ContentEx = () => {
  return (
    <div className="box_wrap">
      {conApi.map((conApi) => (
        <div className="box" key={conApi.id}>
          <div
            className="img"
            style={{
              background: `url(${conApi.imgUrl}) no-repeat center/ cover`,
            }}
          />
          <h2>{conApi.title}</h2>
          <p>{conApi.desc}</p>
        </div>
      ))}
    </div>
  );
};
