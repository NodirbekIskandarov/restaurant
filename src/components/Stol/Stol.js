import React from 'react'
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import './style.css'

function Stol() {
  const selector = useSelector(state=>state)


  console.log(selector)

  return (
    <div>
      <div className='main'>
        <div className="container">
          <div className="row justify-content-around asosiy">
            <div className='col-2 stol'>
              <div className='rasm'>
                <img src="image_1.png" alt="" />
              </div>
              <h1>{selector.count}</h1>
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
    </div>
  )
}

export default Stol