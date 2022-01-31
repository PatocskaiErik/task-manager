import styled from "styled-components";
import { Button } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";
import ErrorBody from "../ErrorBody";
import { fetchEmployees } from "../Service/Service";
import { Link } from "react-router-dom";

const Note = styled.div`
  text-decoration: none;
  margin: 20px 20px 20px 20px;
  align-items: center;
  color: #000;
  background: white;
  height: 220px;
  width: 300px;
  padding: 1em;
  border-style: groove;
`;

const TaskName = styled.div`
  text-align: center;
  font-size: 30px;
`;

const Partner = styled.div`
  text-align: center;
  font-size: 20px;
  margin-top: 10px;
`;

const Employees = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  const getEmployees = async () => {
    const result = await fetchEmployees();
    setEmployees(result);
  };

  useEffect(() => {
    getEmployees().catch((err) => setError(err.massage));
  }, []);

  return (
    <div>
      <Link to={`/dolgozok/uj`}>
        <Button variant="outline-secondary" className="new" type="submit">
          Új munkatárs
        </Button>
      </Link>
      <div className="note">
        {error ? (
          <ErrorBody error={error} />
        ) : (
          employees.map((employee) => {
            return (
              <div key={employee.id}>
                <Note>
                  <TaskName>{employee.name}</TaskName>
                  <Partner>{employee.email}</Partner>
                  <Link to={`/dolgozok/reszletek/${employee.id}`}>
                    <Button variant="outline-secondary" className="about">
                      Részletek megjelenítése
                    </Button>
                  </Link>
                  <Link to={`/dolgozok/szerkesztes/${employee.id}`}>
                    <Button variant="outline-secondary" className="edit">
                      Szerkesztés
                    </Button>
                  </Link>
                </Note>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Employees;
