import React from "react";

const Container = ({ children }) => {
  return (
    <div className="absolute inset-0 top-16 flex flex-col items-center justify-center">
      {children}
    </div>
  );
};

export default Container;
