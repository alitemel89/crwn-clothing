import React, { Children } from 'react';
import './CustomButton.scss'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => {
    return (
        <div>
            <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} btn`} {...otherProps}>{children}</button>
        </div>
    )
}

export default CustomButton;