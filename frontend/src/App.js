import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Menu";
import All from "./TaskComponent/All";
import Partners from "./PartnerComponent/Partners";
import Employees from "./EmployeeComponent/Employees";
import Finished from "./FinishedComponent/Finished";
import Statistics from "./StatisticsComponent/Statistics";
import About from "./TaskComponent/About";
import NewTask from "./TaskComponent/NewTask";
import EditTask from "./TaskComponent/EditTask";
import AboutPartner from "./PartnerComponent/AboutPartner";
import NewPartner from "./PartnerComponent/NewPartner";
import EditPartner from "./PartnerComponent/EditPartner";
import NewEmployee from "./EmployeeComponent/NewEmployee";
import AboutEmployee from "./EmployeeComponent/AboutEmployee";
import EditEmployee from "./EmployeeComponent/EditEmployee";
import AboutFinished from "./FinishedComponent/AboutFinished";
import EditFinished from "./FinishedComponent/EditFinished";
import NewFinished from "./FinishedComponent/NewFinished";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/feladatok">
            <Route index element={<All />} />
            <Route path="reszletek/:id" element={<About />} />
            <Route path="uj" element={<NewTask />} />
            <Route path="szerkesztes/:id" element={<EditTask />} />
          </Route>
          <Route path="/partnerek">
            <Route index element={<Partners />} />
            <Route path="reszletek/:id" element={<AboutPartner />} />
            <Route path="uj" element={<NewPartner />} />
            <Route path="szerkesztes/:id" element={<EditPartner />} />
          </Route>
          <Route path="/dolgozok">
            <Route index element={<Employees />} />
            <Route path="reszletek/:id" element={<AboutEmployee />} />
            <Route path="uj" element={<NewEmployee />} />
            <Route path="szerkesztes/:id" element={<EditEmployee />} />
          </Route>
          <Route path="/teljesitett">
            <Route index element={<Finished />} />
            <Route path="uj" element={<NewFinished />} />
            <Route path="reszletek/:id" element={<AboutFinished />} />
            <Route path="szerkesztes/:id" element={<EditFinished />} />
          </Route>
          <Route path="/statisztika">
            <Route index element={<Statistics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
