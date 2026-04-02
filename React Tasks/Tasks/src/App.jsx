import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Login from "./Tasks 9/Login";
import Dashboard from "./Tasks 9/Dashboard";
import ForgotPW from "./Tasks 9/ForgotPW";
import ChangePW from "./Tasks 9/ChangePW";
import Form from "./Task 7/Form";
import Display from "./Task 7/Display";
import TodoForm from "./Task 8/TodoForm";
import Signup from "./Tasks 9/Signup";
import TaskList from "./TaskList";
import Home from "./Task1/Home";
import About from "./Task1/About";
import Contact from "./Task1/Contact";
import Upperlower from "./Task  2/Upperlower";
import CharCount from "./Task  3/CharCount";
import CounterApp from "./Task 4/CounterApp";
import CountdownTimer from "./Task 5/CountDownTimer";
import PasswordToggle from "./Task 6/passwordToggle";
import WeatherAPIDemo from "./Task 11/weatherAPIDemo";
import MovieSearch from "./Task 13/movieSearch";
import NewsApp from "./Task 14/newsApi";
import CurrencyConvertor from "./Task 15/CurrencyConvertor";
import DarkLight from "./Task 16/DarkLight";
import DemoPage from "./Task 16/DemoPage";
import { ThemeProvider } from "./Task 16/context/ThemeContext";

const ApiDemo = lazy(() => import("./Task 10/ApiDemo"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div style={{ textAlign: "center", padding: "50px" }}>Loading Component...</div>}>
          <ThemeProvider>
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/upperlower" element={<Upperlower />} />
              <Route path="/charcount" element={<CharCount />} />
              <Route path="/counterapp" element={<CounterApp />} />
              <Route path="/countdowntimer" element={<CountdownTimer />} />
              <Route path="/passwordtoggle" element={<PasswordToggle />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/ForgotPassword" element={<ForgotPW />} />
              <Route path="/Change-Password" element={<ChangePW />} />
              <Route path="/form" element={<Form />} />
              <Route path="/displayFormData" element={<Display />} />
              <Route path="/Todo" element={<TodoForm />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/ApiDemo" element={<ApiDemo />} />
              <Route path="/weatherAPIDemo" element={<WeatherAPIDemo />} />
              <Route path="/movieSearch" element={<MovieSearch />} />
              <Route path="/news" element={<NewsApp />} />
              <Route path="/currencyConvertor" element={<CurrencyConvertor />} />
              <Route path="/darklight" element={<DarkLight />} />
              <Route path="/demopage" element={<DemoPage />} />
            </Routes>
          </ThemeProvider>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
