import styled from "styled-components";
import { Button } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";
import ErrorBody from "../ErrorBody";
import { fetchFinished } from "../Service/Service";
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

const Finished = () => {
  const [finished, setFinished] = useState([]);
  const [error, setError] = useState(null);

  const getFinished = async () => {
    const result = await fetchFinished();
    setFinished(result);
  };

  useEffect(() => {
    getFinished().catch((err) => setError(err.massage));
  }, []);

  return (
    <div>
      <Link to={`/teljesitett/uj`}>
        <Button variant="outline-secondary" className="new" type="submit">
          Új feladat
        </Button>
      </Link>
      <div className="note">
        {error ? (
          <ErrorBody error={error} />
        ) : (
          finished.map((finished) => {
            return (
              <div key={finished.id}>
                <Note>
                  <TaskName>{finished.name}</TaskName>
                  <Partner>{finished.time} óra</Partner>
                  <Link to={`/teljesitett/reszletek/${finished.id}`}>
                    <Button variant="outline-secondary" className="about">
                      Részletek megjelenítése
                    </Button>
                  </Link>
                  <Link to={`/teljesitett/szerkesztes/${finished.id}`}>
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

export default Finished;
