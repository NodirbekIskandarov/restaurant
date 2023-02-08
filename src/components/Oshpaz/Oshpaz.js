import React, { useEffect, useState } from 'react'
import Korzinka from '../Korzinka.js/Korzinka'
import Sidebar from '../Sidebar/Sidebar.js'

function Oshpaz() {
  // const [nomer, setNomer] = useState([])
  // const [items, setItems] = useState([]);

  // let newArr = [...nomer]

  // useEffect(() => {
  //   const items = JSON.parse(localStorage.getItem('items'));
  //   if (items) {
  //    setItems(items);
  //   }
  // }, []);
  // console.log(items)

  // nomer.push(items)
  // // setNomer(newArr)
  // console.log(nomer)
  return (
    <div>
      <Sidebar/>
    </div>
  )
}

export default Oshpaz