import React, {Component} from "react";
import "./estilo.css";
class Formulario extends Component {
    constructor(props) {
      super(props);
      this.state = { clicked: false };
    }
  
    render() {
      return (
        <div className="div">
            <h1>Contador de tags HTML</h1>
            <h2>NUTI - Teste de Entrevista</h2>
            <p>Insira a URL abaixo para obter a quantidade de TAGS do site desejado.</p>
            <div className="custom-search-input">
                <div class="input-group col-md-12">      
                  <input
                    className="form-control input-lg"
                    id="url"
                    type="text"
                    placeholder="Digite a URL que deseja contar as TAGS."
                    style={{ width: "260px" }}
                    value={this.props.url}
                    onChange={this.props.handleChange_URL}
                  />
                   <span class="input-group-btn"></span>
                   <button onClick={this.props.onClick} className="btn btn-info btn-lg" type="button">{this.props.is_wait?"Aguarde!":"Contar Tags"}</button>
                </div>
            </div>
      </div>
      );
    }
  }

  export default Formulario;
  