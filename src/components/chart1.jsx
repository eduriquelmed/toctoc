import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";
import faker from "@faker-js/faker";
import Navbar from "./navbar";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);
let time = new Date();
let timeEndHours = time.getHours();
let timeEndMinutes = time.getMinutes();
time.setMinutes(time.getMinutes() - 30);
let hour = time.getHours();
let minutes = time.getMinutes();
let labels = [];
if (minutes < 10) {
  minutes = "0" + minutes;
}
let title = hour + ":" + minutes + " - " + timeEndHours + ":" + timeEndMinutes;
while (Number(timeEndHours) >= Number(hour)) {
  if (minutes < 10 && minutes !== "00") {
    minutes = "0" + minutes;
  }
  labels.push(hour + ":" + minutes);
  minutes = Number(minutes) + 1;
  if (minutes === 60) {
    hour = Number(hour) + 1;
    minutes = "00";
  }
  if (hour === timeEndHours) {
    if (minutes === timeEndMinutes) {
      break;
    }
  }
}

//const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Dataset 1",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
    },
    {
      type: "bar",
      label: "Dataset 2",
      backgroundColor: "rgb(75, 192, 192)",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: "white",
      borderWidth: 2,
    },
  ],
};

export default function App() {
  return (
    <>
      <Navbar />
      <h3>{title}</h3>
      <Chart type="bar" data={data} />
    </>
  );
}
