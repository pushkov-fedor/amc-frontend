import React from "react";

const QueueLineInfo = ({ label, value }) => {
  return (
    <div className="queueLineContainer">
      <div className="left w-50">
        <h3>{label}</h3>
      </div>
      <div className="right w-50">
        <h3>{value}</h3>
      </div>
    </div>
  );
};

export default QueueLineInfo;
