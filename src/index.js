import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Chart1 from "./components/chart1";
import Chart2 from "./components/chart2";
import Chart3 from "./components/chart3";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="chart1" element={<Chart1 />} />
      <Route path="chart2" element={<Chart2 />} />
      <Route path="chart3" element={<Chart3 />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
