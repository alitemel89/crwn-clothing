import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";


import Header from "./components/Header/Header";
import SignInAndSignUpPage from "./pages/SignInAndSignUp/SignInAndSignUp";
import CheckoutPage from './pages/CheckoutPage/CheckoutPage';

import { auth, createUserProfileDocument } from "./firebase/FirebaseUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from "./redux/user/userActions";
import { selectCurrentUser } from './redux/user/userSelectors';

class App extends React.Component {
  unsubscribeFromAuth = () => null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
