import React, { Children } from 'react';
import './CustomButton.scss'

export const CustomButton = ({ children, isGoogleSignIn, ...otherProps}) => {
    return (
        <div>
            <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} btn`} {...otherProps}>{children}</button>
        </div>
    )
}