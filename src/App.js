import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from './page/homepage/homepage.component';

const HatsPage = () => <h1>Hats Page</h1>;

function App() {
  return (
    <div>
          <Route path="/" component={HomePage} />
    </div>
  );
}


export default App;
