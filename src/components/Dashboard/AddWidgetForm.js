import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../../redux/dashboardSlice';

const AddWidgetForm = () => {
  const [widgetName, setWidgetName] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addWidget({ id: Date.now(), name: widgetName }));
    setWidgetName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={widgetName}
        onChange={(e) => setWidgetName(e.target.value)}
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
