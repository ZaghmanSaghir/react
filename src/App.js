
import './index.css';
import { useState } from 'react';
import Employees from './pages/Employees';
import Header from './components/Header';

function App() {
  const [role, setRole] = useState('dev')
  return (
    <>
      <Header>
        <Employees />
      </Header>
    </>

  )
}

export default App;
