import styled from "styled-components";
import "../App.css";
import { useEffect, useState } from "react";
import { fetchFinishedById } from "../Service/Service";
import { useParams } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  margin-top: 30px;
  background-color: #fff;
  width: 550px;
  height: 750px;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 0px;
  border-style: groove;
`;

const DetailsName = styled.div`
  padding-top: 60px;
  text-align: center;
  font-size: 30px;
`;

const DetailsDescription = styled.div`
  padding-top: 80px;
  text-align: center;
  font-size: 20px;
`;


const AboutFinished = () => {
  const { id } = useParams();

  const [finished, setFinished] = useState(null);

  const getFinishedById = async (id) => {
    const result = await fetchFinishedById(id);
    setFinished(result);
  };

  useEffect(() => {
    if (id) {
      getFinishedById(id);
    }
  }, []);
  return (
    <Container>
      {finished ? (
        <Wrapper>
          <DetailsName>{finished.name}</DetailsName>
          <DetailsDescription>{finished.time} óra</DetailsDescription>
          <DetailsDescription>{finished.emp}</DetailsDescription>
          <DetailsDescription>{finished.project}</DetailsDescription>
          <DetailsDescription>{finished.partner}</DetailsDescription>
        </Wrapper>
      ) : (
        <div>Betöltés folyamatban...</div>
      )}
    </Container>
  );
};

export default AboutFinished;
