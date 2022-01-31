import styled from "styled-components";
import "../App.css";
import { useEffect, useState } from "react";
import { fetchPartnersById } from "../Service/Service";
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

const AboutPartner = () => {
  const { id } = useParams();

  const [partner, setPartner] = useState(null);

  const getPartnersById = async (id) => {
    const result = await fetchPartnersById(id);
    setPartner(result);
  };

  useEffect(() => {
    if (id) {
      getPartnersById(id);
    }
  }, []);
  return (
    <Container>
      {partner ? (
        <Wrapper>
          <DetailsName>{partner.name}</DetailsName>
          <DetailsDescription>{partner.address}</DetailsDescription>
          <DetailsDescription>{partner.email}</DetailsDescription>
          <DetailsDescription>{partner.phone}</DetailsDescription>
        </Wrapper>
      ) : (
        <div>Betöltés folyamatban...</div>
      )}
    </Container>
  );
};

export default AboutPartner;
