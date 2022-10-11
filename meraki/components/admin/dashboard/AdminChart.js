import React from "react";
import { Bar } from "react-chartjs-2";

function AdminChart({ summary }) {
  return (
    <Bar
      data={{
        labels: summary.salesData.map((x) => x._id),
        datasets: [
          {
            label: "Sales",
            backgroundColor: "#0891b2",
            data: summary.salesData.map((x) => x.totalSales),
          },
        ],
      }}
      options={{
        legend: { display: true, position: "right" },
      }}
    />
  );
}

export default AdminChart;
