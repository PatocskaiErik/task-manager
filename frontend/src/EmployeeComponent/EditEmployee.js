import { useNavigate, useParams } from "react-router-dom";
import {
  deleteEmployeeById,
  fetchEmployeeById,
  updateEmployee,
} from "../Service/Service";
import { useState, useEffect } from "react";
import styled from "styled-components";
import FormTextInput from "../FormTextInput";
import { Button, Form } from "react-bootstrap";
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

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [updatedEmployee, setUpdatedEmployee] = useState({});

  const getEmployee = async (id) => {
    const response = await fetchEmployeeById(id);
    setUpdatedEmployee(response);
  };

  const deleteClick = (e) => {
    deleteEmployeeById(id, setSuccess, setError);
  };

  const submitForm = (e) => {
    updateEmployee(updatedEmployee, id, setSuccess, setError);
    e.preventDefault();
  };

  useEffect(() => {
    if (id) {
      getEmployee(id);
    }
  }, []);

  useEffect(() => {
    if (success) {
      navigate("/dolgozok");
    }
  }, [success]);

  return (
    <Container>
      <Wrapper>
        <div key={updatedEmployee.id}>
          <Form onSubmit={submitForm}>
            <Name>
              <FormTextInput
                label="Munkatárs neve"
                dataObject={updatedEmployee}
                dataObjectKey="name"
                setter={setUpdatedEmployee}
                required={true}
              />
            </Name>
            <Name>
              <FormTextInput
                label="Munkatárs beosztása"
                dataObject={updatedEmployee}
                dataObjectKey="post"
                setter={setUpdatedEmployee}
                required={true}
              />
            </Name>
            <Name>
              <FormTextInput
                label="Munkatárs email címe"
                dataObject={updatedEmployee}
                dataObjectKey="email"
                setter={setUpdatedEmployee}
                required={true}
              />
            </Name>
            <Name>
              <FormTextInput
                label="Munkatárs telefonszáma"
                dataObject={updatedEmployee}
                dataObjectKey="phoneNumber"
                setter={setUpdatedEmployee}
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
                  confirmationQuestion={`Biztosan kitörlöd a következő munkatársat? ${updatedEmployee.name}`}
                  handleDelete={deleteClick}
                  ID={updatedEmployee.id}
                />
              </div>
            </AddNew>
          </Form>
        </div>
      </Wrapper>
    </Container>
  );
};
export default EditEmployee;
