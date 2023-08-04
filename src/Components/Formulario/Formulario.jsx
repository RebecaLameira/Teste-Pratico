import React, {Component} from "react";
class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = { clicked: false };
    }
  
    render() {
      return (
        <div>
            <h1>Contador de tags HTML</h1>
            <h2>NUTI - Teste de Entrevista</h2>

            <p>Insira a URL abaixo para obter a quantidade de TAGS do site desejado.</p>
          <input
            id="url"
            Placeholder="Digite a URL que deseja contar as TAGS."
            style={{ width: "260px" }}
            value={this.props.url}
            onChange={this.props.handleChange_URL}
          />
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
  