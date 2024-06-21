import React, { useState } from "react";

interface PanelProps {
  title: string;
  children: string;
  isActive: boolean;
  onShow: () => void;
}

const Panel: React.FC<PanelProps> = ({ title, children, isActive, onShow }) => {
  return (
    <>
      {" "}
      <h3>{title} </h3>
      {title === title && isActive ? (
        <>
          <p>{children}</p>
        </>
      ) : (
        <>
          <button onClick={onShow}>show</button>
        </>
      )}
    </>
  );
};

export default Panel;
