import styled from "styled-components";
import "../App.css";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addTask, fetchPartners } from "../Service/Service";
import FormTextInput from "../FormTextInput";
import FormTextAreaInput from "../FormTextAreaInput";

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

const NewTask = () => {
  const navigate = useNavigate();

  const [newTask, setNewTask] = useState("");
  const [partners, setPartners] = useState();
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const submitForm = (e) => {
    addTask(newTask, setSuccess, setHasError);
  };

  const getPartners = async () => {
    const result = await fetchPartners();
    setPartners(result);
  };

  useEffect(() => {
    getPartners();
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
          <Name>
            <FormTextAreaInput
              label="Feladat leírása"
              dataObject={newTask}
              dataObjectKey="description"
              setter={setNewTask}
              rows={15}
              maxLength={100}
              required={true}
              name="fullDescription"
              dataObjectKey="description"
            />
          </Name>
          <Desc>
            Partner
            <Form.Select
              onChange={(e) => setNewTask({ ...newTask, part: e.target.value })}
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
            <Button variant="outline-secondary" className="edit" type="submit">
              Feladat hozzáadása
            </Button>
          </AddNew>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default NewTask;
