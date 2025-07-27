import React from "react";

const Container = ({ children, className="" }) => {
  return (
    <div className={`absolute inset-0 top-16 flex flex-col items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

export default Container;
