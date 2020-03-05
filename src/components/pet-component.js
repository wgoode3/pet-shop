import React, { useState } from 'react';


// class PetComponent extends Component {
//   pet = (event) => {
//     console.log(event.target);
//     event.target.style.backgroundColor = this.props.backgroundColor;
//     event.target.style.color = this.props.color;
//     alert(`The ${this.props.species} says "${this.props.noise}"`);
//   }
//   render() {
//     return (
//       <fieldset>
//         <legend>{ this.props.species }</legend>
//         <button onClick={ this.pet }>Pet the { this.props.species }</button>
//       </fieldset>
//     )
//   }
// }

const PetComponent = props => {
  const [petsReceived, givePets] = useState(1);

  const pet = event => {
    event.target.style.backgroundColor = props.backgroundColor;
    event.target.style.color = props.color;
    alert(`The ${props.species} says "${props.noise}"`);
    alert(`The ${props.species} has been petted ${petsReceived} time(s)`);
    givePets( petsReceived + 1 );
  }

  return (
    <fieldset>
      <legend>{ props.species }</legend>
      <button onClick={ pet }>Pet the { props.species }</button>
    </fieldset>
  )
}

export default PetComponent;