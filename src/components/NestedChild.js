import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';

const NestedChild = () => {
  const data = useContext(DataContext); // Access the shared data

  return (
    <div>
      <h5>Nested Child Component</h5>
      <p>Data from Context: {data}</p>
    </div>
  );
};

export default NestedChild;
