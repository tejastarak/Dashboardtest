import React from 'react';
import DashboardLayout from './DashboardLayout';
import Widget from './Widget';
import CircularChart from './CircularChart';

import LineChart from './LineChart';
import './Dashboard.css';

const Dashboard = () => {
  const cloudAccountsData = {
    labels: ['Connected', 'Not Connected'],
    datasets: [
      {
        data: [2, 2],
        backgroundColor: ['#36A2EB', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  const riskAssessmentData = {
    labels: ['Failed', 'Warning', 'Passed'],
    datasets: [
      {
        data: [1689, 681, 7253],
        backgroundColor: ['#FF6384', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const imageRiskAssessmentData = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Image Risk Assessment',
        data: [9, 150, 300, 1011],
        backgroundColor: ['#FF0000', '#FF4500', '#FF8C00', '#FFD700'],
        hoverBackgroundColor: ['#FF6347', '#FF7F50', '#FFA07A', '#FFD700'],
      },
    ],
  };

  const imageSecurityIssuesData = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Image Security Issues',
        data: [2, 3, 4, 5],
        backgroundColor: ['#FF0000', '#FF4500', '#FF8C00', '#FFD700'],
        hoverBackgroundColor: ['#FF6347', '#FF7F50', '#FFA07A', '#FFD700'],
      },
    ],
  };

  return (
    <DashboardLayout>
      <Widget title="Cloud Accounts">
        <CircularChart data={cloudAccountsData} />
      </Widget>
      <Widget title="Cloud Account Risk Assessment">
        <CircularChart data={riskAssessmentData} />
      </Widget>
      {/* Adding two new line charts */}
      <Widget title="Image Risk Assessment">
        <LineChart data={imageRiskAssessmentData} />
      </Widget>
      <Widget title="Image Security Issues">
        <LineChart data={imageSecurityIssuesData} />
      </Widget>
      {/* Additional widgets */}
    </DashboardLayout>
  );
};

export default Dashboard;
