import React, { useState, useEffect } from "react";
import axios from "axios";
import { PersonData } from "../../types/PersonData";
import LoadComponent from "../LoadComponent/";
import PersonComponent from "../PersonComponent";
import { Container } from "./style";

const Main = () => {
  const [data, setData] = useState<PersonData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    let response = await axios.get("https://rickandmortyapi.com/api/character");
    let json = await response.data.results;
    setLoading(false);
    setData(json);
  };
  console.log(data);
  return (
    <>
      {loading && <LoadComponent />}
      {!loading && (
        <Container>
          {data.map((item, index) => (
            <PersonComponent
              key={index}
              name={item.name}
              status={item.status}
              species={item.species}
              image={item.image}
            />
          ))}
        </Container>
      )}
    </>
  );
};

export default Main;
