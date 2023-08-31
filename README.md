*라이브러리
=>플러그인들의 집합체
=>플러그인은 다른 개발자가 만든 코드를 여러 유저에게 공유하여 사용하는 코드
=>코드를 가져다 쓰기 때문에 내 코드에 마음대로 커스텀할 수 있음

*프레임워크
=>이미 정해져 있는 코드를 규칙에 맞춰서 사용함
=>만들어져 있는 유용한 기능이 있기 때문에 개발 시간을 단축시킬 수 있음

*js
=>브라우저 설치하면 기본적으로 깔려있음

*node js
=>브라우저 밖에서 사용하는 자바스크립트

*서버를 open ...

1.node js 설치
lts 버전 설치

2.cmd 명령어(window)
=>dir: 어떤 파일 및 폴더가 있는지 확인
=>cd 경로명: 폴더 경로 변경

2-1.(mac)
=>ls: 어떤 파일 및 폴더가 있는지 확인
=>cd 경로명: 폴더 경로 변경

3.리액트 설치
1)cmd로 폴더 경로 지정
2)npm -g install create-react-app
3)npx create-react-app 프로젝트명

3-1.맥 기준
1)터미널로 폴더 경로 지정
2)npx create-react-app 프로젝트명

4.리액트 실행
=>컨트롤 + j 눌러서 터미널창 열기
=>npm run start

5.vscode 세팅

--------------------------

*JSX 문법
=>리액트에서 사용할 수 있는 문법으로
자바스크립트 코드 내부에 html태그를 사용할 수 있음

### 규칙

1. jsx는 반드시 태그 하나 이상 존재해야함
2. jsx는 반드시 태그가 2개 이상일땐
   부모 태그로 감싸줘야 됨
단, 부모 태그를 사용할 일이 없거나 모양만 있는게 싫다면
<></> 빈 태그를 사용해줘서 묶어줘도 됨
이 태그를 fragement태그라고 함

컴포넌트

*객체 내부에 있는 함수를 메쏘드라고 함
.앞에 있는건 객체(object), 뒤에 있는걸 전부 메쏘드라고 함
ex) name은 객체, 뒤에 ()는 메쏘드

const name = () => {
   a: "",
   b: "",
   c: "",
}
name.()


#front end
=>보이는 부분을 담당함
=>보이는 모든 기능, 인터렉티브 등등을 담당함
=>클라이언트, 클라이언트 단, 프론트 단

#back end
=>보이지 않는 부분
=>백단, 서버단