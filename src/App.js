import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Image from './components/Image';
import MinistryofHealth from './components/MinistryofHealth'; 
import Paramedics from './components/Paramedics';
function App() {
  return (
    // <div className="App" >
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/hospital" element={<Image/>}/>
    //       <Route path="/ministry" element={<MinistryofHealth/>}/>
    //       <Route path="/paramedics" element={<Paramedics/>}/>

    //     </Routes>
    //   </BrowserRouter>
    // </div>
    <div className="wrapper">
      <Image/>
      {/* <MinistryofHealth/>
      <Paramedics/> */}
    </div>
  );
  // return <div>Hello Khubaib</div>
}

export default App;
