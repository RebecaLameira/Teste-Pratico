import Formulario from "./Components/Formulario/Formulario"
import React, { Component } from "react";
import ListaTags from "./Components/ListaTags/ListaTags";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange_URL = this.handleChange_URL.bind(this);
    this.state = { tags: [], teste: "teste", url: "", text_url: "<>" };
  }

  handleChange_URL(event) {
    this.setState({ url: event.target.value });
  }

  handleClick(props) {
   
    async function fetch_url(url) {
      var server_url="https://teste-place.glitch.me/text_from_url?var=";
     
     const response = await fetch(server_url + url);
  
      const text = await response.text();
      return text;
    }

    fetch_url(this.state.url).then((res) => {
      //console.log(res); // => 'Page not found'
      this.setState({ text_url: res });
    });

    let text = this.state.text_url;
    //console.log(text);

    const myArray = text.split("<");
    let tags_aux = [];
    let tags = [];
    for (let x = 0; x < myArray.length; x++) {
      let aux1 = myArray[x].split(">")[0];
      if (aux1[0] !== "/") {
        let aux2 = aux1.split(" ")[0];
        if (aux2 !== "") {
          tags_aux.push(aux2);
        }
      }
    }


    tags_aux.map((el) => conta_ocorrencia(el));
    function conta_ocorrencia(el) {
      //console.log(el);
      let index = tags.findIndex((e1) => e1.nome === el); //findIndex retorna o index do valor encontrado
      if (index === -1) {
        //se não existe grava em TAGS
        tags.push({ nome: el, qtd: 1 });
      } else {
        // Se á existe aumenta a QTD
        tags[index].qtd = tags[index].qtd + 1;
      }
      return 0;
    }

    tags.map((el) => console.log("Tag: " + el.nome + " | QTD: " + el.qtd));

    //console.log(this.state.url);
    this.setState({ tags: tags });
    //console.log(this.state.tags);
  }

  render() {
    return (
      <div>
        <Formulario
          onClick={this.handleClick.bind(this, this.state.teste)}
          handleChange_URL={this.handleChange_URL}
          url={this.state.url}
        />
        <ListaTags tags={this.state.tags} />
      </div>
    );
  }
}

export default App;
