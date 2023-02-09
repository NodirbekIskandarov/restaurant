import React, { useEffect, useState } from "react";
import Counter from "../../Counter/Counter";
import "./style.css";
function Ichimliklar() {
  let savat = [];
  let data = [
    {
      name: "Coca Cola",
      img: "./menu/cola.png",
      count: 0,
    },
    {
      name: "Fanta",
      img: "./menu/fanta.png",
      count: 0,
    },
    {
      name: "Suv",
      img: "./menu/suv.png",
      count: 0,
    },
    {
      name: "Pepsi",
      img: "./menu/pepsi.png",
      count: 0,
    },
  ];
  const [dataBase, setDataBase] = useState([...data]);
  function decriment(index) {
    let currentData = [...dataBase];
    if (currentData[index].count > 0) {
      currentData[index].count -= 1;
      setDataBase([...currentData]);
    }
  }
  function increment(index) {
    let currentData = [...dataBase];
    currentData[index].count += 1;
    setDataBase([...currentData]);
  }
  dataBase.forEach((item, index) => {
    if (item.count > 0) {
      savat.push({
        name: item.name,
        count: item.count,
      });
    }
  });
  console.log(savat);
  useEffect(() => {
    localStorage.setItem("data1", JSON.stringify(savat));
  }, [savat]);
  return (
    <div>
      <div className="container">
        <div className="row">
          {dataBase.map((item, index) => {
            return (
              <div key={index} className="col-3 quti1">
                <div className="quti2">
                  <img src={item.img} alt="" />
                </div>
                <h2>{item.name}</h2>
                <Counter
                  event={{
                    decriment: decriment,
                    increment: increment,
                    count: item.count,
                    index: index,
                    name: item.name,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ichimliklar;
