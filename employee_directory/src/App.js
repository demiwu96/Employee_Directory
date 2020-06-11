import React from 'react';
import Navbar from "./components/Navbar";
import SortAndFilter from "./components/SortAndFilter/index"

function App() {
  return (
    <div className="container">
      <Navbar />
      <SortAndFilter />
    </div>
  );
}

export default App;
