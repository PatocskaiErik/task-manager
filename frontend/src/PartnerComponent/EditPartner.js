import { useNavigate, useParams } from "react-router-dom";
import {
  deletePartnersById,
  fetchPartnersById,
  updatePartner,
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

const AddNew = styled.div`
  display: flex;
  padding-left: 100px;
`;

const EditPartner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [updatedPartner, setUpdatedPartner] = useState({});

  const getPartner = async (id) => {
    const response = await fetchPartnersById(id);
    setUpdatedPartner(response);
  };

  const deleteClick = (e) => {
    deletePartnersById(id, setSuccess, setError);
  };

  const submitForm = (e) => {
    updatePartner(updatedPartner, id, setSuccess, setError);
    e.preventDefault();
  };

  useEffect(() => {
    if (id) {
      getPartner(id);
    }
  }, []);

  useEffect(() => {
    if (success) {
      navigate("/partnerek");
    }
  }, [success]);

  return (
    <Container>
      <Wrapper>
        <div key={updatedPartner.id}>
          <Form onSubmit={submitForm}>
            <Name>
              <FormTextInput
                label="Partner neve"
                dataObject={updatedPartner}
                dataObjectKey="name"
                setter={setUpdatedPartner}
                required={true}
              />
            </Name>
            <Name>
              <FormTextInput
                label="Partner címe"
                dataObject={updatedPartner}
                dataObjectKey="address"
                setter={setUpdatedPartner}
                required={true}
              />
            </Name>
            <Name>
              <FormTextInput
                label="Partner e-mail címe"
                dataObject={updatedPartner}
                dataObjectKey="email"
                setter={setUpdatedPartner}
                required={true}
              />
            </Name>
            <Name>
              <FormTextInput
                label="Partner telefonszáma"
                dataObject={updatedPartner}
                dataObjectKey="phone"
                setter={setUpdatedPartner}
                required={true}
              />
            </Name>
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
                  confirmationQuestion={`Biztosan kitörlöd a következő partnert? ${updatedPartner.name}`}
                  handleDelete={deleteClick}
                  ID={updatedPartner.id}
                />
              </div>
            </AddNew>
          </Form>
        </div>
      </Wrapper>
    </Container>
  );
};
export default EditPartner;
