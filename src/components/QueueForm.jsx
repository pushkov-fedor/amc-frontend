import React from "react";

export default function QueueForm() {
  return (
    <div>
      <h1>Хочу посетить заведение</h1>
      <form>
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" placeholder="Иван" />
        <label htmlFor="name">Имя</label>
        <input type="text" id="name" placeholder="Иван" />
        <div className="people-counter">
          <button>-</button>
          <input type="number" name="" id="" />
        </div>
      </form>
    </div>
  );
}
