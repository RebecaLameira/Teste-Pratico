import React, { Component } from "react";
import "./estilo.css";

class ListaTags extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
  
    render() {
      const listItems = this.props.tags.map((el) => (
        <Tag qtd={el.qtd} tag={el.nome} />
      ));
      return (
        <table>
          <tr style={{ border: "1px solid blue" }}>
            <td style={{ border: "1px solid blue" }}>TAG HTML</td>
            <td style={{ border: "1px solid blue" }}>QUANTIDADE</td>
          </tr>
          {listItems}
        </table>
      );
    }
  }

  function Tag(props) {
    return (
      <tr>
        <td>{props.tag}</td>
        <td>{props.qtd}</td>
      </tr>
    );
  }
  export default ListaTags;