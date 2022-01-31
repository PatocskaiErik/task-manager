import styled from "styled-components";
import { Button } from "react-bootstrap";
import "../App.css";
import { useEffect, useState } from "react";
import ErrorBody from "../ErrorBody";
import { fetchPartners } from "../Service/Service";
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

const Partners = () => {
  const [partners, setPartners] = useState([]);
  const [error, setError] = useState(null);

  const getPartners = async () => {
    const result = await fetchPartners();
    setPartners(result);
  };

  useEffect(() => {
    getPartners().catch((err) => setError(err.massage));
  }, []);

  return (
    <div>
      <Link to={`/partnerek/uj`}>
        <Button variant="outline-secondary" className="new" type="submit">
          Új partner
        </Button>
      </Link>
      <div className="note">
        {error ? (
          <ErrorBody error={error} />
        ) : (
          partners.map((partner) => {
            return (
              <div key={partner.id}>
                <Note>
                  <TaskName>{partner.name}</TaskName>
                  <Partner>{partner.email}</Partner>
                  <Link to={`/partnerek/reszletek/${partner.id}`}>
                    <Button variant="outline-secondary" className="about">
                      Részletek megjelenítése
                    </Button>
                  </Link>
                  <Link to={`/partnerek/szerkesztes/${partner.id}`}>
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

export default Partners;
