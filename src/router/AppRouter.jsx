import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "../App";
import RFP from "../page/RFP";
import Dashboard from "../page/Dashboard";



export default function AppRouter() {


  return (
    <div className="h-screen">
      <BrowserRouter >
        <Routes>
          <Route path="/" Component={App} />
          <Route path='/rfp' Component={RFP} />
          <Route path="/dashboard" Component={Dashboard} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
