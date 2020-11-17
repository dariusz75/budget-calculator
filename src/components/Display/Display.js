import React from "react";

const Display = ({ totalBudget }) => {
  return (
    <div className="alert alert-secondary">
      Your budget for this month is
      <span className="badge badge-primary">£{totalBudget}</span>
    </div>
  );
};

export default Display;
