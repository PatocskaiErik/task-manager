import styled from "styled-components";
import "../App.css";
import { Button, Form } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addPartner } from "../Service/Service";
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

const NewPartner = () => {
  const navigate = useNavigate();

  const [newPartner, setNewPartner] = useState("");
  const [success, setSuccess] = useState(false);
  const [hasError, setHasError] = useState(false);

  const submitForm = (e) => {
    addPartner(newPartner, setHasError, setSuccess);
  };

  useEffect(() => {
    if (success) {
      navigate("/partnerek");
    }
  }, [success]);

  return (
    <Container>
      <Wrapper>
        <Form onSubmit={submitForm}>
          <Name>
            <FormTextInput
              label="Partner neve"
              dataObject={newPartner}
              dataObjectKey="name"
              setter={setNewPartner}
              required={true}
            />
          </Name>
          <Name>
            <FormTextInput
              label="Partner címe"
              dataObject={newPartner}
              dataObjectKey="address"
              setter={setNewPartner}
              required={true}
            />
          </Name>
          <Name>
            <FormTextInput
              label="Partner e-mail címe"
              dataObject={newPartner}
              dataObjectKey="email"
              setter={setNewPartner}
              required={true}
            />
          </Name>
          <Name>
            <FormTextInput
              label="Partner telefonszáma"
              dataObject={newPartner}
              dataObjectKey="phone"
              setter={setNewPartner}
              required={true}
            />
          </Name>
          <AddNew>
            <Button variant="outline-secondary" className="edit" type="submit">
              Partner hozzáadása
            </Button>
          </AddNew>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default NewPartner;
