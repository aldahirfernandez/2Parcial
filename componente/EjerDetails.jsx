import React from "react";
import "./EjerDetails.css";
import { useEffect,useState } from "react";
const EjerDetails = (props) => {
  
  // const [user, setUser] = useState({})
 const character = props.character;
  return (
    <div className="contenedor1">
      <div className="cabeza">
        <img
          className="imagenes"
          src={character.image}
          alt= ""
        ></img>
      </div>
      {/*<h1 className="nombre">{character.name}</h1>*/}
      <h1 className="nombre">Terapia 2</h1>
      <p className="descripcion">Ejercicios pelvicos</p>
    </div>
  );
};

export default EjerDetails;