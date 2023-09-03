import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderEx12 } from "./components/HeaderEx12";
import { Home12 } from "./pages/Home12";
import { Sub01 } from "./pages/Sub01";
import { Sub02 } from "./pages/Sub02";

export const Ex12 = () => {
  return (
    <BrowserRouter>
      <HeaderEx12 />
      <Routes>
        <Route path="/" element={<Home12 />} />
        <Route path="/sub/:id" element={<Sub01 />} />
      </Routes>
    </BrowserRouter>
  );
};
