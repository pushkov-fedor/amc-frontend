import React from "react";
import QueueLineInfo from "./QueueLineInfo";
import QueueNumber from "./QueueNumber";
import { useHistory } from "react-router";

const QueueInfo = () => {
  const history = useHistory();
  return (
    <div className="queueInfoContainer d-flex flex-column">
      <div className="queueInfoContainer__container d-flex flex-column justify-content-center align-itesms-center">
        <h1 className="text-center big-header">
          Вы заняли очередь на посещение
        </h1>
        <QueueNumber number={"F2DJS32"} />
        <QueueLineInfo label="Заведение" value="Mama Pizza" />
        <QueueLineInfo label="Время ожидания" value="~ 15 мин." />
        <QueueLineInfo label="Перед вами" value="7 чел." />
      </div>
      <div className="queueInfoContainer__controls">
        <button
          className="btn bg-purple text-white w-100 mt-3 medium"
          onClick={() => history.push("/queue-form")}
        >
          ПОКИНУТЬ ОЧЕРЕДЬ
        </button>
      </div>
    </div>
  );
};

export default QueueInfo;
