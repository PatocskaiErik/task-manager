import styled from "styled-components";
import "../App.css";
import { useEffect, useState } from "react";
import { fetchEmployeeById } from "../Service/Service";
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

const Details = styled.div`
  padding-top: 80px;
  text-align: center;
  font-size: 20px;
`;

const AboutEmployee = () => {
  const { id } = useParams();

  const [employee, setEmployee] = useState(null);

  const getEmployeeById = async (id) => {
    const result = await fetchEmployeeById(id);
    setEmployee(result);
  };

  useEffect(() => {
    if (id) {
      getEmployeeById(id);
    }
  }, []);
  return (
    <Container>
      {employee ? (
        <Wrapper>
          <DetailsName>{employee.name}</DetailsName>
          <Details>{employee.post}</Details>
          <Details>{employee.email}</Details>
          <Details>{employee.phoneNumber}</Details>
        </Wrapper>
      ) : (
        <div>Betöltés folyamatban...</div>
      )}
    </Container>
  );
};

export default AboutEmployee;
