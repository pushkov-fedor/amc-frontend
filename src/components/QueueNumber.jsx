import React from "react";

const QueueNumber = ({ number }) => {
  return (
    <div className="queueNumberContainer text-center my-5">
      <h3>Ваш номер</h3>
      <h1>{number}</h1>
    </div>
  );
};

export default QueueNumber;
