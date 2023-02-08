import React from "react";
import './style.css'
function Counter(props) {
  return (

    <div>
      <div className="counter">
        <button onClick={() => {props.event.decriment(props.event.index)}}>-</button>
        <span>{props.event.count}</span>
        <button onClick={() => {props.event.increment(props.event.index)}}>+</button>
      </div>
    </div>
  );
}

export default Counter;
