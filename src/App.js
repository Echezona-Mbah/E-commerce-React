import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';

const HatsPage = () =>{
  <h1>Hats Page</h1>
};

const TopicList = () =>{
  <h1>Topic List Page</h1>
};

const TopicDeteil = () =>{
  <h1>Topic Detail Page</h1>
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/topiclist" element={<TopicList />} />
        <Route path="/topicdetail/:topicId" element={<TopicDeteil />} />
      </Routes>
    </Router>
  );
}

export default App;
