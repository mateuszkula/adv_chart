import React from "react";
import Chart from "react-apexcharts";

export const Charts = ({ dates, clicks, impressions }) => {
  const options = {
    stroke: {
      show: true,
      curve: "smooth",
      width: 2
    },
    chart: {
      id: "basic-bar",
      type: "line"
    },
    xaxis: {
      categories: dates
    },
    yaxis: [
      {
        title: {
          text: "Clicks"
        }
      },
      {
        opposite: true,
        title: {
          text: "Impressions"
        }
      }
    ]
  };
  const series = [
    {
      name: "Clicks",
      data: clicks
    },

    {
      name: "Impressions",
      data: impressions
    }
  ];
  return <Chart options={options} series={series} />;
};
