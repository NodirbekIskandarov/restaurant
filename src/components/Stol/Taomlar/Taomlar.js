import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Counter from "../../Counter/Counter";
import "./style.css";
function Taomlar() {
  console.log(useLocation)
  let savat = []
  let data = [
    {
      name: "Osh",
      img: "./menu/osh.png",
      count: 0,
    },
    {
      name: "Kabob",
      img: "./menu/kabob.png",
      count: 0,
    },
    {
      name: "Sho'rva",
      img: "./menu/shorva.png",
      count: 0,
    },
    {
      name: "Mastava",
      img: "./menu/mastava.png",
      count: 0,
    },
    {
      name: "Xash",
      img: "./menu/xash.png",
      count: 0,
    },
    {
      name: "Norin",
      img: "./menu/norin.png",
      count: 0,
    },
    {
      name: "Qozon kabob",
      img: "./menu/qozonk.png",
      count: 0,
    },
    {
      name: "Bifshteks",
      img: "./menu/bifsh.png",
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
    if(item.count > 0){
      savat.push({
        name: item.name,
        count: item.count
      })
    }
  })
  console.log(savat)
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(savat));
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
                    name: item.name
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

export default Taomlar;
