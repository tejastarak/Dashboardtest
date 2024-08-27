import React, { useState } from 'react';
import Widget from './Widget';
import CircularChart from './CircularChart';
import LineChart from './LineChart'; // Import the LineChart component
import './DashboardLayout.css'; // Import the CSS file for styling

const DashboardLayout = () => {
  const riskAssessmentData = {
    labels: ['High Risk', 'Medium Risk', 'Low Risk'],
    datasets: [
      {
        data: [5, 10, 15],
        backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      },
    ],
  };

  // Data for the line charts
  const imageRiskAssessmentData = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Image Risk Assessment',
        data: [9, 150, 300, 1011],
        backgroundColor: '#FF8C00',
        borderColor: '#FF8C00',
        fill: false,
      },
    ],
  };

  const imageSecurityIssuesData = {
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Image Security Issues',
        data: [2, 3, 4, 5],
        backgroundColor: '#FF4500',
        borderColor: '#FF4500',
        fill: false,
      },
    ],
  };

  // State to handle dynamic widgets
  const [widgets, setWidgets] = useState([]);

  // State to handle form input for a new widget
  const [newWidgetTitle, setNewWidgetTitle] = useState('');
  const [newWidgetText, setNewWidgetText] = useState('');

  // Function to add a new widget
  const addWidget = () => {
    if (newWidgetTitle && newWidgetText) {
      setWidgets([...widgets, { title: newWidgetTitle, text: newWidgetText }]);
      setNewWidgetTitle('');
      setNewWidgetText('');
    }
  };

  // Function to remove a widget
  const removeWidget = (index) => {
    const updatedWidgets = widgets.filter((_, i) => i !== index);
    setWidgets(updatedWidgets);
  };

  return (
    <div className="dashboard-layout">
      <Widget title="Cloud Accounts">
        <CircularChart data={riskAssessmentData} />
      </Widget>
      <Widget title="Cloud Account Risk Assessment">
        <CircularChart data={riskAssessmentData} />
      </Widget>
      <Widget title="CWPP Dashboard">
        <div className="empty-widget">+ Add Widget</div>
      </Widget>
      <Widget title="CWPP Dashboard">
        <div className="empty-widget">No Graph Data available</div>
      </Widget>
      <Widget title="CWPP Dashboard">
        <div className="empty-widget">No Graph Data available</div>
      </Widget>
      <Widget title="CWPP Dashboard">
        <div className="empty-widget">+ Add Widget</div>
      </Widget>
      <Widget title="Image Risk Assessment">
        <LineChart data={imageRiskAssessmentData} />
      </Widget>
      <Widget title="Image Security Issues">
        <LineChart data={imageSecurityIssuesData} />
      </Widget>
      <Widget title="CWPP Dashboard">
        <div className="empty-widget">+ Add Widget</div>
      </Widget>

      {/* Render dynamically added widgets */}
      {widgets.map((widget, index) => (
        <Widget key={index} title={widget.title}>
          <div>{widget.text}</div>
          <button onClick={() => removeWidget(index)}>Remove Widget</button>
        </Widget>
      ))}

      {/* Form to add a new widget */}
      <div className="add-widget-form">
        <h3>Add New Widget</h3>
        <input
          type="text"
          placeholder="Widget Title"
          value={newWidgetTitle}
          onChange={(e) => setNewWidgetTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Widget Text"
          value={newWidgetText}
          onChange={(e) => setNewWidgetText(e.target.value)}
        />
        <button onClick={addWidget}>+ Add Widget</button>
      </div>
    </div>
  );
};

export default DashboardLayout;
