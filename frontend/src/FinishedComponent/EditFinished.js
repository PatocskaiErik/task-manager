import { useNavigate, useParams } from "react-router-dom";
import {
  deleteFinishedById,
  fetchEmployees,
  fetchFinishedById,
  fetchPartners,
  fetchTasks,
  updateFinished
} from "../Service/Service";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import FormTextInput from "../FormTextInput";
import DeleteEntity from "../DeleteEntity";

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
  padding-left: 100px;
`;

const EditFinished = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [tasks, setTasks] = useState();
  const [employees, setEmployees] = useState();
  const [partner, setPartner] = useState();

  const [updatedFinished, setUpdatedFinished] = useState({});

  const getFinished = async (id) => {
    const response = await fetchFinishedById(id);
    setUpdatedFinished(response);
  };

  const getPartner = async () => {
    const result = await fetchPartners();
    setPartner(result);
  };

  const getEmployees = async () => {
    const result = await fetchEmployees();
    setEmployees(result);
  };

  const getTasks = async () => {
    const result = await fetchTasks();
    setTasks(result);
  };

  const deleteClick = (e) => {
    deleteFinishedById(id, setSuccess, setError);
  };

  const submitForm = (e) => {
    updateFinished(updatedFinished, id, setSuccess, setError);
    e.preventDefault();
  };

  useEffect(() => {
    if (id) {
      getFinished(id);
    }
  }, []);

  useEffect(() => {
    getTasks();
    getEmployees();
    getPartner();
  }, []);

  useEffect(() => {
    if (success) {
      navigate("/teljesitett");
    }
  }, [success]);

  if (!tasks || !employees || !partner) {
    return <div>Betöltés folyamatban</div>;
  }
  return (
    <Container>
      <Wrapper>
        <div key={updatedFinished.id}>
          <Form onSubmit={submitForm}>
            <Name>
              <FormTextInput
                label="Feladat neve"
                dataObject={updatedFinished}
                dataObjectKey="name"
                setter={setUpdatedFinished}
                required={true}
              />
            </Name>
            <Name>
              <FormTextInput
                label="Feladat ideje"
                dataObject={updatedFinished}
                dataObjectKey="time"
                setter={setUpdatedFinished}
                required={true}
              />
            </Name>
            <Desc>
              Munkatársak
              <Form.Select
                onChange={(e) =>
                  setUpdatedFinished({
                    ...updatedFinished,
                    emp: e.target.value
                  })
                }
              >
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
                  setUpdatedFinished({
                    ...updatedFinished,
                    project: e.target.value
                  })
                }
              >
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
                  setUpdatedFinished({
                    ...updatedFinished,
                    partner: e.target.value
                  })
                }
              >
                {partner.map((partner) => (
                  <option value={partner.name} key={partner.id}>
                    {partner.name}
                  </option>
                ))}
              </Form.Select>
            </Desc>
            <AddNew>
              <Button
                variant="outline-secondary"
                className="editButton"
                type="submit"
              >
                Szerkesztés
              </Button>
              <div className="deleteButton">
                <DeleteEntity
                  confirmationQuestion={`Biztosan kitörlöd a következő feladatot? ${updatedFinished.name}`}
                  handleDelete={deleteClick}
                  ID={updatedFinished.id}
                />
              </div>
            </AddNew>
          </Form>
        </div>
      </Wrapper>
    </Container>
  );
};
export default EditFinished;
