import React, { useState, useEffect } from "react";
import QueueLineInfo from "./QueueLineInfo";
import QueueNumber from "./QueueNumber";
import { useHistory, withRouter } from "react-router";
import { URL } from "../constants";

const updateInnerQueueInfo = (
  innerQueueId,
  setBeforeYou,
  setCode,
  setWaitingTime,
  setPlace
) => {
  innerQueueId &&
    fetch(`${URL}/queue/getStatus?innerQueueId=${innerQueueId}`)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(({ response }) => {
        const { beforeYou, code, place, waitingTime } = response;
        setBeforeYou(beforeYou);
        setCode(code);
        setWaitingTime(waitingTime);
        setPlace(place);
      })
      .catch((err) => console.error(err));
};

const QueueInfo = (props) => {
  const history = useHistory();
  const innerQueueId =
    props.location && props.location.state
      ? props.location.state.queueInnerId
      : null;
  const [beforeYou, setBeforeYou] = useState(
    props.location && props.location.state ? props.location.state.beforeYou : -1
  );
  const [code, setCode] = useState("");
  const [waitingTime, setWaitingTime] = useState(0);
  const [place, setPlace] = useState("");

  useEffect(() => {
    updateInnerQueueInfo(
      innerQueueId,
      setBeforeYou,
      setCode,
      setWaitingTime,
      setPlace
    );
    const intervalId = setInterval(
      () =>
        updateInnerQueueInfo(
          innerQueueId,
          setBeforeYou,
          setCode,
          setWaitingTime,
          setPlace
        ),
      5000
    );
    return () => {
      clearInterval(intervalId);
    };
  }, [innerQueueId]);
  return (
    <div className="queueInfoContainer d-flex flex-column">
      <div className="queueInfoContainer__container d-flex flex-column justify-content-center align-itesms-center">
        <h1 className="text-center big-header bold">
          Вы заняли очередь на посещение
        </h1>
        <QueueNumber number={code} />
        <QueueLineInfo label="Заведение" value={place} />
        <QueueLineInfo label="Время ожидания" value={`~ ${waitingTime} мин.`} />
        <QueueLineInfo label="Перед вами" value={`${beforeYou} чел.`} />
      </div>
      <div className="queueInfoContainer__controls">
        <button
          className="btn bg-purple text-white w-100 mt-3 medium"
          onClick={() => {
            fetch(`${URL}/queue/leave?innerQueueId=${innerQueueId}`, {
              headers: {
                Accept: "application/json",
              },
              method: "POST",
            });
            history.push("/");
          }}
        >
          ПОКИНУТЬ ОЧЕРЕДЬ
        </button>
      </div>
    </div>
  );
};

export default withRouter(QueueInfo);
