import React, { useEffect, useState } from "react";
import "./style.css";

function Korzinka() {
  const [items, setItems] = useState([]);
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("data"));
    if (items) {
      setItems(items);
    }
  }, []);
  useEffect(() => {
    const items1 = JSON.parse(localStorage.getItem("data1"));
    if (items1) {
      setItems1(items1);
    }
  }, []);
  useEffect(() => {
    const items2 = JSON.parse(localStorage.getItem("data2"));
    if (items2) {
      setItems2(items2);
    }
  }, []);
  console.log(items);
  console.log(items1);
  console.log(items2);
  return (
    <div className="container">
      <div>
        <h1>Taomlar</h1>
        {items.length > 0 &&
          items.map((item, index) => {
            return (
              <div key={index} className="taomlar">
                <p>{index + 1}.</p>
                <p>{item.name}:</p>
                <p>{item.count} ta</p>
              </div>
            );
          })}
      </div>

      <div>
        <h1>Ichimliklar</h1>
        {items1.length > 0 &&
          items1.map((item, index) => {
            return (
              <div key={index} className="taomlar">
                <p>{index + 1}.</p>
                <p>{item.name}:</p>
                <p>{item.count} ta</p>
              </div>
            );
          })}
      </div>

      <div>
        <h1>Salatlar</h1>
        {items2.length > 0 &&
          items2.map((item, index) => {
            return (
              <div key={index} className="taomlar">
                <p>{index + 1}.</p>
                <p>{item.name}:</p>
                <p>{item.count} ta</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Korzinka;
