import React from "react";
import { PersonData } from "../../types/PersonData/";
import { Item } from "./style";

const PersonComponent = ({ name, species, status, image }: PersonData) => {
  return (
    <>
      <Item>
        <h2>{name}</h2>
        <img src={image} alt={name} />
        <p>Espécie: {species === "Human" ? "Humanoide" : "Alienígena"}</p>
        {status === "Alive" ? (
          <p style={{ color: "#55cc44" }}>Vivo(a)</p>
        ) : (
          <p style={{ color: "#d63d2e" }}>Morto(a)</p>
        )}
      </Item>
    </>
  );
};

export default PersonComponent;
