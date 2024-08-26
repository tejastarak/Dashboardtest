import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';

const Dashboard = () => {
  const categories = useSelector(state => state.dashboard.categories);

  console.log('Categories:', categories); // Debugging statement

  return (
    <div>
      {categories.map((category, index) => (
        <Category key={index} category={category} categoryIndex={index} />
      ))}
    </div>
  );
};

export default Dashboard;
