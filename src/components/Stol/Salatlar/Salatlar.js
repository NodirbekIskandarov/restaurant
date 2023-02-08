import React, { useEffect, useState } from "react";
import Counter from "../../Counter/Counter";
import "./style.css";


function Salatlar() {
  let savat = []
  let data = [
    {
      name: "Achichuk",
      img: "./menu/salat_1.png",
      count: 0
    },
    {
      name: "Svejiy",
      img: "./menu/salat_2.png",
      count: 0
    },
    {
      name: "Olivia",
      img: "./menu/salat_3.png",
      count: 0
    },
    {
      name: "Grechka",
      img: "./menu/salat_4.png",
      count: 0
    },
    {
      name: "Suzma",
      img: "./menu/salat_5.png",
      count: 0
    },
    {
      name: "Tarnov",
      img: "./menu/salat_6.png",
      count: 0
    },
    {
      name: "Damskiy",
      img: "./menu/salat_7.png",
      count: 0
    },
    {
      name: "Yaponcha",
      img: "./menu/salat_8.png",
      count: 0
    },
  ];
  let korzinkaArr = []
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
    localStorage.setItem('data2', JSON.stringify(savat));
  }, [savat]);
  return (
    <div>
      <div className="container">
        <div className="row">
          { 
          dataBase.map((item, index) => {
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

export default Salatlar;