import React, { Component } from "react";
import valueService from "./services/valueService";
//Componente con estado
class Values extends Component {
  state = {
    values: []
  };
  //OnLoad
  async componentDidMount() {
    const response = await valueService.getValues();
    console.log('Values', response);
  }
  render() {
    return <div>Componente Values</div>;
  }
}
export default Values;
