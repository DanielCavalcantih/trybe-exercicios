import React from "react";
import Image from "./Image";



class Pokemon extends React.Component {
  render() {

    const { name, type, weight: value, weight: measurementUnit, image } = this.props.pokemon;

    return (
      <div className="pokemon">
        <p>{ name }</p>
        <p>{ type }</p>
        <p>Avarage Weight: { value } { measurementUnit }</p>
        <Image source={ image } alternativeText={ name }/>
      </div>

    )
  }
}

export default Pokemon;