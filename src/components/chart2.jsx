import React, { useState, useEffect } from "react";
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

export default function App() {
  const [chartData, setChartData] = useState({});
  const [chartData2, setChartData2] = useState({});
  const [listo, setListo] = useState(false);
  const [etiquetas, setEtiquetas] = useState([]);
  const [etiquetas2, setEtiquetas2] = useState([]);
  const [frame, setFrame] = useState(60);
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");

  useEffect(() => {
    getEtiquetas(frame);

    setChartData({
      labels: etiquetas,
      datasets: [
        {
          type: "line",
          label: "Dataset 1",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          fill: false,
          data: etiquetas.map(() =>
            faker.datatype.number({ min: 0, max: 1000 })
          ),
        },
        {
          type: "bar",
          label: "Dataset 2",
          backgroundColor: "rgb(75, 192, 192)",
          data: etiquetas.map(() =>
            faker.datatype.number({ min: 0, max: 1000 })
          ),
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    });
    setChartData2({
      labels: etiquetas2,
      datasets: [
        {
          type: "line",
          label: "Dataset 1",
          borderColor: "rgb(255, 99, 132)",
          borderWidth: 2,
          fill: false,
          data: etiquetas.map(() =>
            faker.datatype.number({ min: 0, max: 1000 })
          ),
        },
        {
          type: "bar",
          label: "Dataset 2",
          backgroundColor: "rgb(75, 192, 192)",
          data: etiquetas.map(() =>
            faker.datatype.number({ min: 0, max: 1000 })
          ),
          borderColor: "white",
          borderWidth: 2,
        },
      ],
    });
    setListo(true);
  }, [listo]);

  const getEtiquetas = (tiempo) => {
    let time = new Date();
    let timeEndHours = time.getHours();
    let timeEndMinutes = time.getMinutes();
    time.setMinutes(time.getMinutes() - 15);
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let labels = [];
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    setTitle(
      hour + ":" + minutes + " - " + timeEndHours + ":" + timeEndMinutes
    );

    while (Number(timeEndHours) >= Number(hour)) {
      if (minutes < 10 && minutes != "00") {
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

    setEtiquetas(labels);

    let time2 = new Date();
    time2.setMinutes(time2.getMinutes() - tiempo);
    let timeEndHours2 = time2.getHours();
    let timeEndMinutes2 = time2.getMinutes();
    time2.setMinutes(time2.getMinutes() - 15);
    let hour2 = time2.getHours();
    let minutes2 = time2.getMinutes();
    let labels2 = [];
    if (minutes2 < 10) {
      minutes2 = "0" + minutes2;
    }
    setTitle2(
      hour2 + ":" + minutes2 + " - " + timeEndHours2 + ":" + timeEndMinutes2
    );

    while (Number(timeEndHours2) >= Number(hour2)) {
      if (minutes2 < 10 && minutes2 != "00") {
        minutes2 = "0" + minutes2;
      }
      labels2.push(hour2 + ":" + minutes2);
      minutes2 = Number(minutes2) + 1;
      if (minutes2 === 60) {
        hour2 = Number(hour2) + 1;
        minutes2 = "00";
      }
      if (hour2 === timeEndHours2) {
        if (minutes2 === timeEndMinutes2) {
          break;
        }
      }
    }

    setEtiquetas2(labels2);
  };

  const handleChange = (e) => {
    setFrame(e.target.value);
    setListo(false);
  };

  return (
    <>
      <Navbar />
      <select
        defaultValue={frame}
        onChange={(e) => handleChange(e)}
        className="form-select">
        <option value="30">30 minutos</option>
        <option value="60">1 hora</option>
        <option value="120">2 horas</option>
        <option value="180">3 horas</option>
      </select>
      {listo ? (
        <div>
          <h3>{title}</h3>
          <Chart type="bar" data={chartData} style={{ maxHeight: "40vh" }} />
          <h3>{title2}</h3>

          <Chart type="bar" data={chartData2} style={{ maxHeight: "40vh" }} />
        </div>
      ) : null}
    </>
  );
}
