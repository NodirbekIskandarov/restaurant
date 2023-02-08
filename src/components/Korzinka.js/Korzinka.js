import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Korzinka() {
  const [items, setItems] = useState([]);
  // const [stol, setStol] = useState([]);
  const [items1, setItems1] = useState([]);
  const [items2, setItems2] = useState([]);

  // useEffect(() => {
  //   const element = JSON.parse(localStorage.getItem('items'));
  //   if (element) {
  //    setStol(element);
  //   }
  // }, []);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('data'));
  if (items) {
   setItems(items);
  }
}, []);
useEffect(() => {
  const items1 = JSON.parse(localStorage.getItem('data1'));
  if (items1) {
   setItems1(items1);
  }
}, []);
useEffect(() => {
  const items2 = JSON.parse(localStorage.getItem('data2'));
  if (items2) {
   setItems2(items2);
  }
}, []);
console.log(items)
console.log(items1)
console.log(items2)
  return (
    <div className='container'>
      {/* <div className='stol'>
        <h1>{stol}</h1>
        <img src="image_1.png" alt="" />
      </div> */}
      <div>
        <h1>Taomlar</h1>
      {
        items.length > 0 && items.map((item, index) => {
          return (
            <div key={index} className="taomlar">
              <p>{index+1}.</p>
              <p>{item.name}:</p>
              <p>{item.count} ta</p>
            </div>
          )
        })
      }
      </div>

      <div>
        <h1>Ichimliklar</h1>
      {
        items1.length > 0 && items1.map((item, index) => {
          return (
            <div key={index} className="taomlar">
              <p>{index+1}.</p>
              <p>{item.name}:</p>
              <p>{item.count} ta</p>
            </div>
          )
        })
      }
      </div>

      <div>
        <h1>Salatlar</h1>
      {
        items2.length > 0 && items2.map((item, index) => {
          return (
            <div key={index} className="taomlar">
              <p>{index+1}.</p>
              <p>{item.name}:</p>
              <p>{item.count} ta</p>
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default Korzinka