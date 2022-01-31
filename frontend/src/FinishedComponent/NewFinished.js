import styled from "styled-components";
import "../App.css";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  addFinished,
  fetchEmployees,
  fetchPartners,
  fetchTasks
} from "../Service/Service";
import FormTextInput from "../FormTextInput";

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

const Name = styled.div`
  margin: 10px;
  color: #969292;
  font-size: 16px;
  text-align: center;
`;

const Desc = styled.div`
  margin: 20px;
  color: #969292;
  font-size: 16px;
  text-align: center;
`;

const AddNew = styled.div`
  display: flex;
  padding-left: 80px;
`;

const NewFinished = () => {
  const [newTask, setNewTask] = useState("");
  const [success, setSuccess] = useState(false);
  const [partner, setPartner] = useState();
  const [Error, setError] = useState(false);
  const [tasks, setTasks] = useState();

  const [employees, setEmployees] = useState();

  const getEmployees = async () => {
    const result = await fetchEmployees();
    setEmployees(result);
  };

  const getTasks = async () => {
    const result = await fetchTasks();
    setTasks(result);
  };

  const getPartner = async () => {
    const result = await fetchPartners();
    setPartner(result);
  };

  const submitForm = (e) => {
    addFinished(newTask, setSuccess, setError);
    e.preventdefault();
  };

  useEffect(() => {
    getEmployees();
    getTasks();
    getPartner();
  }, []);

  if (!employees || !tasks || !partner) {
    return <div>Betöltés folyamatban</div>;
  }
  return (
    <Container>
      <Wrapper>
        <Form onSubmit={submitForm}>
          <Name>
            <FormTextInput
              label="Feladat neve"
              dataObject={newTask}
              dataObjectKey="name"
              setter={setNewTask}
              required={true}
            />
          </Name>
          <Desc>
            <FormTextInput
              label="Munkaidő órában"
              dataObject={newTask}
              dataObjectKey="time"
              setter={setNewTask}
              required={true}
            />
          </Desc>
          <Desc>
            Munkatársak
            <Form.Select
              onChange={(e) => setNewTask({ ...newTask, emp: e.target.value })}
            >
              <option>Válasszon munkatársat!</option>
              {employees.map((employee) => (
                <option value={employee.name} key={employee.id}>
                  {employee.name}
                </option>
              ))}
            </Form.Select>
          </Desc>
          <Desc>
            Feladat
            <Form.Select
              onChange={(e) =>
                setNewTask({ ...newTask, project: e.target.value })
              }
            >
              <option>Válasszon feladatot!</option>
              {tasks.map((task) => (
                <option value={task.name} key={task.id}>
                  {task.name}
                </option>
              ))}
            </Form.Select>
          </Desc>
          <Desc>
            Partner
            <Form.Select
              onChange={(e) =>
                setNewTask({ ...newTask, partner: e.target.value })
              }
            >
              <option>Válasszon partnert!</option>
              {partner.map((partner) => (
                <option value={partner.name} key={partner.id}>
                  {partner.name}
                </option>
              ))}
            </Form.Select>
          </Desc>
          <AddNew>
            <Button variant="outline-secondary" className="edit" type="submit">
              Feladat hozzáadása
            </Button>
          </AddNew>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default NewFinished;
