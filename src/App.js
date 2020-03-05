import React from 'react';
import './App.css';
import PetComponent from './components/pet-component';

const pets = [
  {species: "doggo", noise:"awooo~", backgroundColor: "rebeccapurple", color:"#fff"},
  {species: "turtle", noise:"...", backgroundColor: "tomato", color:"#fff"},
  {species: "parrot", noise:"Artemis Fowl", backgroundColor: "mediumseagreen", color:"#fff"},
  {species: "cat", noise:"nyan", backgroundColor: "orange", color:"#000"}
];


function App(props) {
  return (
    <>
      <h1>Welcome to {props.name}'s petshop</h1>
      {
        pets.map( (pet, i) => 
        <PetComponent
          key={i}
          species={pet.species}
          noise={pet.noise}
          backgroundColor={pet.backgroundColor}
          color={pet.color}
        />
        )
      }
    </>
  );
}

export default App;
