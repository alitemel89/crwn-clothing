import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import SignInAndSignUpPage from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/FirebaseUtils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/userActions';

class App extends React.Component {

  unsubscribeFromAuth = () => null;

  componentDidMount() {

    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            })
        })
      } else {
        setCurrentUser({ currentUser: userAuth })
      }
    })
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
          <Route path="/signIn" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      setCurrentUser: user => dispatch(setCurrentUser(user))
    }
}


export default connect(
  null, 
  mapDispatchToProps
)(App);