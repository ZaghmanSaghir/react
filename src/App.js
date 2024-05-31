import './index.css';
import { useState } from 'react';
import Customers from './pages/Customers';
import Employees from './pages/Employees';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dictionary from './components/Dictionary';

function App() {
  const [role, setRole] = useState('dev')
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path='/employees' element={<Employees />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/customers' element={<Customers />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>

  )
}

export default App;
