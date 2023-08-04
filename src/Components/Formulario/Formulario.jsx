import React, {Component} from "react";

function makeHttpObject() {
  try {return new XMLHttpRequest();}
  catch (error) {}
  try {return new ActiveXObject("Msxml2.XMLHTTP");}
  catch (error) {}
  try {return new ActiveXObject("Microsoft.XMLHTTP");}
  catch (error) {}
  throw new Error("Could not create HTTP request object.");
}
class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = { clicked: false };
    }
  
    render() {
      return (
        <div>
          <input
            id="url"
            Placeholder="Digite a URL que deseja contar as TAGS."
            style={{ width: "260px" }}
            value={this.props.url}
            onChange={this.props.handleChange_URL}
          ></input>
          <button onClick={this.props.onClick}>Contar Tags!</button>
  
          <p>
            Abaixo uma listagem das Tags feita em{" "}
            <a href={"https://react.dev/"}>React</a>.
          </p>
        </div>
      );
    }
  }

  export default Formulario;
  