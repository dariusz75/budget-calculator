import React from "react";

const Display = ({ totalBudget }) => {
  return (
    <div
      className={totalBudget > 0 ? "alert alert-primary" : "alert alert-danger"}
    >
      <h6 style={{ margin: "0px" }}>
        The budget left for this month is{" "}
        <span
          style={{ fontSize: "20px" }}
          className={
            totalBudget > 0 ? "badge badge-primary" : "badge badge-danger"
          }
        >
          £{totalBudget.toFixed(2)}
        </span>
      </h6>
    </div>
  );
};

export default Display;
