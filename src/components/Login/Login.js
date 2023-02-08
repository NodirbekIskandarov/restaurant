import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [Girgitton, setGirgitton] = useState(null)
  const [Oshpaz, setOshpaz] = useState(null)
  const [O_Pass, setO_Pass] = useState("jasur")
  const [G_Pass, setG_Pass] = useState("nodir")

  function radioFun(props){
   if (props == "on") {
    setGirgitton(props)
    setOshpaz(null)
   }else{
    setOshpaz(props)
    setGirgitton(null)
   }
  }
  function kirishFun(props){
    if (Oshpaz || Girgitton != null) {
      if (O_Pass == props && Oshpaz != null) {
        navigate("/oshpaz")
      }else if (G_Pass == props && Girgitton != null){
        navigate("/stollar")
      }
    }else{
      alert("iltimos radioni tanlang")
    }
  }

  return (
    <div>
        <div className='row row1'>
          <div className="col-6 form-check">
            <div className="card">
              <img src="image_2.png" alt="" />
              <input onChange={(e) => radioFun("on")} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            </div>
          </div>

          <div className="col-6 form-check">
            <div className="card">
              <img src="image_3.png" alt="" />
              <input onChange={(e) => radioFun("off")} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            </div>
          </div>

          <div className="col-12">
            <input onInput={(e) => kirishFun(e.target.value)} type="password" placeholder='Parolni kiriting!' className='form-control mt-5'/>
          </div>
        </div>
    </div>
  )
}

export default Login