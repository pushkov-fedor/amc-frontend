import React from "react";
import QueueLineInfo from "./QueueLineInfo";
import QueueNumber from "./QueueNumber";

const QueueInfo = () => {
  return (
    <div className="queueInfoContainer d-flex flex-column justify-content-center align-items-center position-relative">
      <h1 className="text-center big-header mt-5">Вы заняли очередь на посещение</h1>
      <QueueNumber number={"F2DJS32"}/>
      <QueueLineInfo label="Заведение" value="Mama Pizza" />
      <QueueLineInfo label="Время ожидания" value="~ 15 мин." />
      <QueueLineInfo label="Перед вами" value="7 чел." />
      <button className="btn border-purple mt-5 text-purple w-100">Покинуть очередь</button>
    </div>
  );
};

export default QueueInfo;
