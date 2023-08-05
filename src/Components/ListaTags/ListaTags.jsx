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
        <table className="table">
          <tr className="tr">
            <td className="td">TAG HTML</td>
            <td className="td"> QUANTIDADES</td>
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