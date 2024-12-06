import React from 'react';
import { DataProvider } from './context/DataContext';
import Child1 from './components/Child1';

const App = () => {
  return (
    <DataProvider>
      <div>
        <h1>Parent App Component</h1>
        <Child1 />
      </div>
    </DataProvider>
  );
};

export default App;
