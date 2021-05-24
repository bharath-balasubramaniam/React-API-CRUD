/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Areachart from "./Areachart";
import DashboardCard from "./DashboardCard";
import data from "./DashboardCardData";
import Piechart from "./Piechart";
import Projects from "./Projects";
export default function Dashboard() {
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i> Generate Report
        </a>
      </div>
      <div className="row">
        {data.map((obj) => {
          return <DashboardCard place={obj}></DashboardCard>;
        })}
      </div>
      <div className="row">
        <Areachart></Areachart>
        <Piechart></Piechart>
      </div>
      <div className="row">
        <Projects></Projects>
      </div>
    </>
  );
}
