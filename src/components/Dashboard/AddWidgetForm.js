import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWidget } from '../../redux/dashboardSlice';

const AddWidgetForm = ({ categoryIndex }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name,
      text,
    };
    dispatch(addWidget({ categoryIndex, widget: newWidget }));
    setName('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Widget Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Widget Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
