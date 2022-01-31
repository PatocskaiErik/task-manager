import styled from "styled-components";
import { Button } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";
import ErrorBody from "../ErrorBody";
import { fetchTasks } from "../Service/Service";
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

const All = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const getTasks = async () => {
    const result = await fetchTasks();
    setTasks(result);
  };

  useEffect(() => {
    getTasks().catch((err) => setError(err.massage));
  }, []);

  return (
    <div>
      <Link to={`/feladatok/uj`}>
        <Button variant="outline-secondary" className="new" type="submit">
          Új feladat
        </Button>
      </Link>
      <div className="note">
        {error ? (
          <ErrorBody error={error} />
        ) : (
          tasks.map((task) => {
            return (
              <div key={task.id}>
                <Note>
                  <TaskName>{task.name}</TaskName>
                  <Partner>{task.part}</Partner>
                  <Link to={`/feladatok/reszletek/${task.id}`}>
                    <Button
                      variant="outline-secondary"
                      className="about"
                      type="submit"
                    >
                      Részletek megjelenítése
                    </Button>
                  </Link>
                  <Link to={`/feladatok/szerkesztes/${task.id}`}>
                    <Button
                      variant="outline-secondary"
                      className="edit"
                      type="submit"
                    >
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

export default All;
