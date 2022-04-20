import React from "react";
import FormPage from "./Pages/FormPage/FormPage";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CollegeList from './Containers/collegeList/index';
import Clear from "./Components/Clear";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/userlist" element={<Homepage />}></Route>
        <Route path="/userform" element={<FormPage />}></Route> 
        <Route path="/colleges" element={<CollegeList />}></Route> 
        <Route path="/clear" element={<Clear/>}></Route> 
        <Route path={"*"} element={<Navigate replace to ="/userlist"/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
