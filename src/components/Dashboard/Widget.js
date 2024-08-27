import React from 'react';
import './Widget.css';

const Widget = ({ title, children, legend }) => {
  return (
    <div className="widget">
      <h3>{title}</h3>
      <div className="chart-container">{children}</div>
      {legend && (
        <div className="legend">
          {legend.map((item, index) => (
            <div key={index} className="legend-item">
              <span
                className="legend-color"
                style={{ backgroundColor: item.color }}
              ></span>
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Widget;
