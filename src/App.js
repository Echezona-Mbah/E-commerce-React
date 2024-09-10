import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shop/shop.component';
import SignInAndSignUpPage from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './component/header/header.component';
import { auth } from './firebase/firebase.utils';  // Import auth correctly

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // Listener for authentication state changes
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    // Clean up the listener
    if (this.unsubscribeFromAuth) {
      this.unsubscribeFromAuth();
    }
  }

  render() {
    return (
      <Router>
        <Header currentUser={this.state.currentUser} />  {/* Pass currentUser to Header */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUpPage />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
