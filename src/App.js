import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom';
import './components/Stol/style.css'
function App() {
  const [items, setItems] = useState([]);

useEffect(() => {
  const items = JSON.parse(localStorage.getItem('items'));
  if (items) {
   setItems(items);
  }
}, []);
  return (
    <div>
      <div className='main'>
        <div className="container">
          <div className="row justify-content-around asosiy">
            <div className='col-2 stol'>
              <div className='rasm'>
                <img src="image_1.png" alt="" />
              </div>
              <h1>{items}</h1>
            </div>

            <div className="col-10 menu">
              <div className='types'>
                <div className='type'>
                  <Link to='taomlar' className='button' style={{textDecoration: "none"}}>
                    <img className='img1' src="taomlar.png" alt="" />
                    <h1>Taomlar</h1>
                  </Link>
                </div>

                <div className='type'>
                  <Link to='ichimliklar' className='button' style={{textDecoration: "none"}}>
                    <img className='img2' src="ichimliklar.png" alt="" />
                    <h1>Ichimliklar</h1>
                  </Link>
                </div>

                <div className='type'>
                  <Link to='salatlar' className='button' style={{textDecoration: "none"}}>
                    <img className='img2' src="salatlar.png" alt="" />
                    <h1>Salatlar</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Outlet/>
      <Link to="korzinka" className="korzinka" style={{textDecoration: "none"}}>Korzinka</Link>
    </div>
  )
}

export default App