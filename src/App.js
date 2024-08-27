import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, Link } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';

const HatsPage = (props) => {
  console.log(props);
  return <h1>Hats Page</h1>;
};

const TopicList = () => {
  return <h1>Topic List Page</h1>;
};

const TopicDetail = () => {
  const { topicId } = useParams(); // Get the route parameter

  return (
    <div>
      <Link to="/hats">Go to Hats Page</Link>
      <h1>Topic Detail Page: {topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
        <Route path="/topiclist" element={<TopicList />} />
        <Route path="/topicdetail/:topicId" element={<TopicDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
