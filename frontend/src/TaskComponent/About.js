import styled from "styled-components";
import "../App.css";
import { useEffect, useState } from "react";
import { fetchTasksById } from "../Service/Service";
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

const About = () => {
  const { id } = useParams();

  const [task, setTask] = useState(null);

  const getTasksById = async (id) => {
    const result = await fetchTasksById(id);
    setTask(result);
  };

  useEffect(() => {
    if (id) {
      getTasksById(id);
    }
  }, []);
  return (
    <Container>
      {task ? (
        <Wrapper>
          <DetailsName>{task.name}</DetailsName>
          <DetailsDescription>{task.description}</DetailsDescription>
          <DetailsDescription>{task.part}</DetailsDescription>
        </Wrapper>
      ) : (
        <div>Betöltés folyamatban...</div>
      )}
    </Container>
  );
};

export default About;
