import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

// Register the ArcElement which is required for Doughnut charts
Chart.register(ArcElement);

const CircularChart = ({ data }) => {
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="circular-chart">  {/* Apply the circular-chart class */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CircularChart;
