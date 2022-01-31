import styled from "styled-components";
import "../App.css";
import { useEffect, useState } from "react";
import {
  fetchEmployees,
  fetchFinished,
  fetchPartners,
  fetchTasks
} from "../Service/Service";
import { Table } from "react-bootstrap";

const Note = styled.div`
  text-decoration: none;
  margin: 20px 20px 20px 20px;
  text-align: center;
  padding-top: 33px;
  color: #000;
  background: white;
  height: 100px;
  width: 300px;
  border-style: groove;
`;

const Title = styled.div`
  font-size: 30px;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 20px;
`;

const TableStyle = styled.div`
  padding-left: 70px;
  padding-right: 70px;
`;

const Statistics = () => {
  const [task, setTasks] = useState([]);
  const [partners, setPartners] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [finished, setFinished] = useState([]);
  const [error, setError] = useState(null);

  const getTasks = async () => {
    const result = await fetchTasks();
    setTasks(result);
  };

  const getPartners = async () => {
    const result = await fetchPartners();
    setPartners(result);
  };

  const getEmployees = async () => {
    const result = await fetchEmployees();
    setEmployees(result);
  };

  const getFinished = async () => {
    const result = await fetchFinished();
    setFinished(result);
  };

  useEffect(() => {
    getTasks().catch((err) => setError(err.massage));
    getPartners().catch((err) => setError(err.massage));
    getEmployees().catch((err) => setError(err.massage));
    getFinished().catch((err) => setError(err.massage));
  }, []);

  return (
    <div>
      <div className="note">
        <Note>Feladatok száma: {task.length}</Note>
        <Note>Partnerek száma: {partners.length}</Note>
        <Note>Dolgozók száma: {employees.length}</Note>
        <Note>Elvégzett feladatok száma: {finished.length}</Note>
      </div>
      <Title>Munkaidők száma:</Title>
      <TableStyle>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Munkatárs neve</th>
              <th>Dolgozott órák száma</th>
            </tr>
          </thead>
          <tbody>
            {finished.map((finished) => {
              return (
                <tr key={finished.id}>
                  <td>{finished.emp}</td>
                  <td>{finished.time} óra</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableStyle>
      <Title>Munkaidők száma partnerenként:</Title>
      <TableStyle>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Partner neve</th>
              <th>Dolgozott órák száma</th>
            </tr>
          </thead>
          <tbody>
            {finished.map((finished) => {
              return (
                <tr key={finished.id}>
                  <td>{finished.partner}</td>
                  <td>{finished.time} óra</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableStyle>
      <Title>Feladatok:</Title>
      <TableStyle>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Feladat neve</th>
              <th>Partner</th>
            </tr>
          </thead>
          <tbody>
            {task.map((task) => {
              return (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.name}</td>
                  <td>{task.part}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableStyle>
      <Title>Partnerek:</Title>
      <TableStyle>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Partner neve</th>
              <th>E-mail cím</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((partner) => {
              return (
                <tr key={partner.id}>
                  <td>{partner.id}</td>
                  <td>{partner.name}</td>
                  <td>{partner.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableStyle>
      <Title>Dolgozók:</Title>
      <TableStyle>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Munkatárs neve</th>
              <th>Beosztás</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.post}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableStyle>
      <Title>Elvégzett feladatok:</Title>
      <TableStyle>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Feladat neve</th>
              <th>Munkatárs</th>
            </tr>
          </thead>
          <tbody>
            {finished.map((finished) => {
              return (
                <tr key={finished.id}>
                  <td>{finished.id}</td>
                  <td>{finished.name}</td>
                  <td>{finished.emp}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </TableStyle>
    </div>
  );
};

export default Statistics;
