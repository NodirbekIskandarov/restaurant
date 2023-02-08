import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function Stollar() {
  const dispatch = useDispatch();

  function getCounter(id) {
    dispatch({ type: "getCount", payload: id });
  }

  let data = [
    {
      img: "image_1.png",
      id: 1,
    },
    {
      img: "image_1.png",
      id: 2,
    },
    {
      img: "image_1.png",
      id: 3,
    },
    {
      img: "image_1.png",
      id: 4,
    },
    {
      img: "image_1.png",
      id: 5,
    },
    {
      img: "image_1.png",
      id: 6,
    },
    {
      img: "image_1.png",
      id: 7,
    },
    {
      img: "image_1.png",
      id: 8,
    },
    {
      img: "image_1.png",
      id: 9,
    },
    {
      img: "image_1.png",
      id: 10,
    },
    {
      img: "image_1.png",
      id: 11,
    },
    {
      img: "image_1.png",
      id: 12,
    },
  ];

  let nomer = []
  function run(son) {
    localStorage.setItem("items", JSON.stringify(son));
    nomer.push(son)
    console.log(nomer)
  }

  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return (
            <div
              onClick={() => run(item.id)}
              key={index}
              className="col-3 stol"
            >
              <Link to="/taomlar">
                <div className="stol-1">
                  <img src={item.img} alt="" />
                  <h2>{item.id}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stollar;
