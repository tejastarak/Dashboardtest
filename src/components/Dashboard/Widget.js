import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWidget } from '../../redux/dashboardSlice';

const Widget = ({ widget, categoryIndex }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryIndex, widgetId: widget.id }));
  };

  return (
    <div>
      <h3>{widget.name}</h3>
      <p>{widget.text}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default Widget;
