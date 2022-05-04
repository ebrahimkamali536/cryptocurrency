import React from "react";

const SelectButton = ({ children, selected, onClick }) => {
  return <button className="bg-yellow-500 rounded-md px-4 py-2" onClick={onClick}>{children}</button>;
};

export default SelectButton;
