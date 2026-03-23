import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Validation from "./Tasks/Signup";
import Login from "./Tasks/Login";
import Dashboard from "./Tasks/Dashboard";
import ForgotPW from "./Tasks/ForgotPW";
import ChangePW from "./Tasks/ChangePW";
import Form from "./Task 2/Form";
import Display from "./Task 2/Display";
import TodoForm from "./Task 3/TodoForm";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Validation />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/ForgotPassword" element={<ForgotPW />} />
          <Route path="/Change-Password" element={<ChangePW />} />
          <Route path="/form" element={<Form />} />
          <Route path="/displayFormData" element={<Display />} />
          <Route path="/Todo" element={<TodoForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
