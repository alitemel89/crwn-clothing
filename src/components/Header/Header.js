import React from "react";
import { Link } from "react-router-dom";
import { auth } from '../../firebase/FirebaseUtils';
import { connect } from 'react-redux';

import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = (props) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {
            props.currentUser ? (
                <div className="option" onClick={() => auth.signOut()}> SIGN OUT </div>
            ) :
            <Link className="option" to="/signIn">
                SIGN IN
            </Link>
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
      currentUser: state.user.currentUser
    }
}

export default connect(
  mapStateToProps,
  
)(Header);
