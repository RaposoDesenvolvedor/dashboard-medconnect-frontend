/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "./PatientDemography.css";
import { patientsSexChartConfig, patientsAgeChartConfig } from "./chartsConfig";
import InformationPlaceholder from "../../InformationPlaceholder/InformationPlaceholder";



function PatientsSexChart({ data }) {
  const patientsSexChartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (patientsSexChartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    }

    const chart = patientsSexChartRef.current.getContext("2d");

    chartInstance.current = new Chart(chart, patientsSexChartConfig(data));
  }, []);

  return <canvas ref={patientsSexChartRef} className="chart"></canvas>;
}

function PatientsAgeChart({ data }) {
  const patientsAgeChartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (patientsAgeChartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    }

    const chart = patientsAgeChartRef.current.getContext("2d");

    chartInstance.current = new Chart(chart, patientsAgeChartConfig(data));
  }, []);

  return <canvas ref={patientsAgeChartRef} className="chart"></canvas>;
}

export default function PatientDemography({data}) {
  return (
    <InformationPlaceholder width="auto" height="500px" title="Demografia dos pacientes" flexGrow={1}>
        <div className="charts-placeholder">
          <div className="chart-div">
            <PatientsSexChart data={data.patientsSexData} />
          </div>

          <div className="chart-div">
            <PatientsAgeChart data={data.patientsAgeData} />
          </div>
        </div>
    </InformationPlaceholder>
  );
}
