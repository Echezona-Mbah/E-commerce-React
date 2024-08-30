import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';

// const TopicDetail = () => {
//   const { topicId } = useParams(); // Get the route parameter

//   return (
//     <div>
//      <Link to="/topicdetail/9">Go to Hats Page 9</Link>
//       <Link to="/topicdetail/4">Go to Hats Page 4</Link>
//       <Link to="/topicdetail/2">Go to Hats Page 2</Link>
//       <h1>Topic Detail Page: {topicId}</h1>
//     </div>
//   );
// };

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        {/* <Route path="/topicdetail/:topicId" element={<TopicDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
