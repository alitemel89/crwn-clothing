import React, { Children } from "react";
import "./CustomButton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <div>
      <button
        className={`${isGoogleSignIn ? "google-sign-in" : ""} ${
          inverted ? "inverted" : ""
        } btn`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
