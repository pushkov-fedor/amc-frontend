import React, { useState } from "react";
import "./queue-form.css";
import { useHistory } from "react-router";

export default function QueueForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [people, setPeople] = useState(1);
  const [timeH, setTimeH] = useState(20);
  const [timeM, setTimeM] = useState(35);

  const history = useHistory();

  return (
    <div className="queueForm d-flex flex-column">
      <form className="queueForm__form d-flex flex-column justify-content-center">
        <h1 className="text-center big-header bold pb-3">
          Хочу посетить заведение
        </h1>
        <label htmlFor="name">ИМЯ</label>
        <input
          className="mb-3"
          type="text"
          id="name"
          placeholder="Иван"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phone">ТЕЛЕФОН</label>
        <input
          className="mb-3"
          type="tel"
          id="phone"
          placeholder="89139036130"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="people-counter">СКОЛЬКО ВАС БУДЕТ?</label>
        <div id="people-counter" className="d-flex align-items-center mb-3">
          <button
            className="mr-3 border-purple text-purple bg-white d-flex align-items-center justify-content-center"
            onClick={(e) => {
              e.preventDefault();
              setPeople((prev) => prev - 1);
            }}
          >
            <i class="fas fa-minus fa-2x"></i>
          </button>
          <input
            className="text-center"
            type="number"
            name=""
            id=""
            value={people}
            onChange={(e) => setPeople(e.target.value)}
          />
          <button
            className="ml-3 bg-purple text-white d-flex align-items-center justify-content-center"
            onClick={(e) => {
              e.preventDefault();
              setPeople((prev) => prev + 1);
            }}
          >
            <i class="fas fa-plus fa-lg"></i>
          </button>
        </div>
        <label htmlFor="people-counter">ВРЕМЯ ПОСЕЩЕНИЯ</label>
        <div id="visit-time">
          <input
            className="text-center mr-2"
            type="number"
            name="timeH"
            id="timeH"
            min="0"
            max="23"
            step="1"
            value={timeH}
            onChange={(e) =>
              e.target.value >= 0 && e.target.value <= 23
                ? setTimeH(e.target.value)
                : null
            }
          />
          <span>:</span>
          <input
            className="text-center ml-2"
            type="number"
            name="timeM"
            id="timeM"
            min="0"
            max="59"
            step="1"
            value={timeM}
            onChange={(e) =>
              e.target.value >= 0 && e.target.value <= 59
                ? setTimeM(e.target.value)
                : null
            }
          />
        </div>
      </form>
      <div className="queueForm__controls d-flex flex-column">
        <button
          className="mt-3 btn bg-purple text-white medium"
          onClick={() => history.push("/queue-info")}
        >
          ВСТАТЬ В ОЧЕРЕДИ
        </button>
        <button className="mt-2 btn bg-white text-purple border-purple medium">
          НАЗАД
        </button>
      </div>
    </div>
  );
}
