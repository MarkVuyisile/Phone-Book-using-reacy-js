import React from 'react';
// import Form from './componets/form';
import { BrowserRouter, } from "react-router-dom";
import MainRoutes from './componets/MainRoutes';
// import { Artistedit } from './componets/Artistedit';
import './App.css';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <MainRoutes />

     </BrowserRouter>
    </div>
  );
}

export default App;
