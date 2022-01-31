import styled from "styled-components";
import "../App.css";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addEmployee } from "../Service/Service";
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

const AddNew = styled.div`
  display: flex;
  padding-left: 80px;
`;

const NewEmployee = () => {
  const navigate = useNavigate();

  const [newEmployee, setNewEmployee] = useState("");
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const submitForm = (e) => {
    addEmployee(newEmployee, setHasError, setSuccess);
  };

  useEffect(() => {
    if (success) {
      navigate("/dolgozok");
    }
  }, [success]);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={submitForm}>
          <Name>
            <FormTextInput
              label="Munkatárs neve"
              dataObject={newEmployee}
              dataObjectKey="name"
              setter={setNewEmployee}
              required={true}
            />
          </Name>
          <Name>
            <FormTextInput
              label="Munkatárs beosztása"
              dataObject={newEmployee}
              dataObjectKey="post"
              setter={setNewEmployee}
              required={true}
            />
          </Name>
          <Name>
            <FormTextInput
              label="Munkatárs e-mail címe"
              dataObject={newEmployee}
              dataObjectKey="email"
              setter={setNewEmployee}
              required={true}
            />
          </Name>
          <Name>
            <FormTextInput
              label="Munkatárs telefonszáma"
              dataObject={newEmployee}
              dataObjectKey="phoneNumber"
              setter={setNewEmployee}
              required={true}
            />
          </Name>
          <AddNew>
            <Button variant="outline-secondary" className="edit" type="submit">
              Munkatárs hozzáadása
            </Button>
          </AddNew>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default NewEmployee;
