import React from 'react';
import { AutoCompleteBar } from './Components/AutoCompleteBar';
import data from './data.json';

function App() {
  return (
    <AutoCompleteBar data={data} />
  );
}

export default App;
