import axios from "axios";

export const fetchTasks = async () => {
  const url = "/api/tasks";
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load tasks");
    throw Error("Nem sikerült betölteni a feladatok listáját!");
  }
};

export const fetchTasksById = async (id) => {
  const url = "/api/tasks" + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load tasks");
    throw Error("Nem sikerült betölteni a feladatok listáját!");
  }
};

export const updateTask = async (task, id, setSuccess, setHasError) => {
  const url = "/api/tasks" + "/" + id;
  try {
    const response = await axios.put(url, task);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const deleteTaskById = async (id, setSuccess, setError) => {
  const url = "/api/tasks" + "/" + id;
  try {
    const response = await axios.delete(url);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setError(true);
  }
};

export const fetchPartners = async () => {
  const url = "/api/partners";
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load tasks");
    throw Error("Nem sikerült betölteni a feladatok listáját!");
  }
};

export const fetchPartnersById = async (id) => {
  const url = "/api/partners" + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load tasks");
    throw Error("Nem sikerült betölteni a feladatok listáját!");
  }
};

export const addPartner = async (partner, setSuccess, setHasError) => {
  const url = "/api/partners";
  try {
    const response = await axios.post(url, partner);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const updatePartner = async (
  updatedPartner,
  id,
  setSuccess,
  setHasError
) => {
  const url = "/api/partners" + "/" + id;
  try {
    const response = await axios.put(url, updatedPartner);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const deletePartnersById = async (id, setSuccess, setError) => {
  const url = "/api/partners" + "/" + id;
  try {
    const response = await axios.delete(url);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setError(true);
  }
};

export const fetchEmployees = async () => {
  const url = "/api/employees";
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load tasks");
    throw Error("Nem sikerült betölteni a feladatok listáját!");
  }
};

export const fetchEmployeeById = async (id) => {
  const url = "/api/employees" + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load tasks");
    throw Error("Nem sikerült betölteni a munkatársak listáját!");
  }
};

export const addEmployee = async (newEmployee, setSuccess, setHasError) => {
  const url = "/api/employees";
  try {
    const response = await axios.post(url, newEmployee);
    if (response.status === 201) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const updateEmployee = async (
  updatedEmployee,
  id,
  setSuccess,
  setHasError
) => {
  const url = "/api/employees" + "/" + id;
  try {
    const response = await axios.put(url, updatedEmployee);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const deleteEmployeeById = async (id, setSuccess, setError) => {
  const url = "/api/employees" + "/" + id;
  try {
    const response = await axios.delete(url);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setError(true);
  }
};

export const fetchFinished = async () => {
  const url = "/api/finished";
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load tasks");
    throw Error("Nem sikerült betölteni a feladatok listáját!");
  }
};

export const fetchFinishedById = async (id) => {
  const url = "/api/finished" + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    return data;
  } catch (error) {
    console.warn("Failed to load tasks");
    throw Error("Nem sikerült betölteni a munkatársak listáját!");
  }
};

export const updateFinished = async (
  updatedFinished,
  id,
  setSuccess,
  setHasError
) => {
  const url = "/api/finished" + "/" + id;
  try {
    const response = await axios.put(url, updatedFinished);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const deleteFinishedById = async (id, setSuccess, setError) => {
  const url = "/api/finished" + "/" + id;
  try {
    const response = await axios.delete(url);
    if (response.status === 200) {
      setSuccess(true);
    }
  } catch (error) {
    setError(true);
  }
};

export const addTask = async (task, setSuccess, setHasError) => {
  const url = "/api/tasks";
  try {
    const response = await axios.post(url, task);
    if (response.status === 201) {
      setSuccess(true);
    }
  } catch (error) {
    setHasError(true);
  }
};

export const addFinished = async (task, setSuccess, setError) => {
  const url = "/api/finished";
  try {
    const response = await axios.post(url, task);
    if (response.status === 201) {
      setSuccess(true);
    }
  } catch (error) {
    setError(true);
  }
};
