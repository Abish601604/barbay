
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Mainbar from './main.jsx';
import BarcodeGenerator from './normalbarcode.jsx';
import Barcode from './barcode.jsx';
// export const URL=process.env.SERVER_URL;
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Mainbar/>}></Route>
        <Route path='/nbarcode' element={<BarcodeGenerator/>}></Route>
        <Route path='/BarCode' element={<Barcode/>}></Route>


      </Routes>
    </div>
  );
}

export default App;

