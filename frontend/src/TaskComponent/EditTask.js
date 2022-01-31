import { useNavigate, useParams } from "react-router-dom";
import {
  deleteTaskById,
  fetchPartners,
  fetchTasksById,
  updateTask
} from "../Service/Service";
import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";
import FormTextInput from "../FormTextInput";
import FormTextAreaInput from "../FormTextAreaInput";
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

const EditTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [partners, setPartners] = useState();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [updatedTask, setUpdatedTask] = useState({});

  const getTask = async (id) => {
    const response = await fetchTasksById(id);
    setUpdatedTask(response);
  };

  const deleteClick = (e) => {
    deleteTaskById(id, setSuccess, setError);
  };

  const getPartners = async () => {
    const result = await fetchPartners();
    setPartners(result);
  };

  const submitForm = (e) => {
    updateTask(updatedTask, id, setSuccess, setError);
    e.preventDefault();
  };

  useEffect(() => {
    getPartners();
  }, []);

  useEffect(() => {
    if (id) {
      getTask(id);
    }
  }, []);

  useEffect(() => {
    if (success) {
      navigate("/feladatok");
    }
  }, [success]);

  if (!partners) {
    return <div>Betöltés folyamatban</div>;
  }
  return (
    <Container>
      <Wrapper>
        <div key={updatedTask.id}>
          <Form onSubmit={submitForm}>
            <Name>
              <FormTextInput
                label="Feladat neve"
                dataObject={updatedTask}
                dataObjectKey="name"
                setter={setUpdatedTask}
                required={true}
              />
            </Name>
            <Name>
              <FormTextAreaInput
                label="Feladat leírása"
                dataObject={updatedTask}
                dataObjectKey="intro"
                setter={setUpdatedTask}
                rows={15}
                maxLength={100}
                required={true}
                name="fullDescription"
                dataObjectKey="description"
              />
            </Name>
            <Desc>
              <Form.Select
                onChange={(e) =>
                  setUpdatedTask({ ...updatedTask, part: e.target.value })
                }
              >
                <option>Válasszon partnert!</option>
                {partners.map((partner) => (
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
                  confirmationQuestion={`Biztosan kitörlöd a következő feladatot? ${updatedTask.name}`}
                  handleDelete={deleteClick}
                  ID={updatedTask.id}
                />
              </div>
            </AddNew>
          </Form>
        </div>
      </Wrapper>
    </Container>
  );
};

export default EditTask;
