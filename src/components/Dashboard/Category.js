import React from 'react';
import Widget from './Widget';
import AddWidgetForm from './AddWidgetForm';

const Category = ({ category, categoryIndex }) => {
  return (
    <div>
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} categoryIndex={categoryIndex} />
      ))}
      <AddWidgetForm categoryIndex={categoryIndex} />
    </div>
  );
};

export default Category;
