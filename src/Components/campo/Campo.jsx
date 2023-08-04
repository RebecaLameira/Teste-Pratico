import React, {Component} from "react";
import "./estilo.css";

class Campo extends Component {
  render(label, placeholder ){
    return (
      <div className="campo">
        <label>{label}</label>
        <input placeholder={placeholder}></input>
      </div>
    );
  }
}


export default Campo;