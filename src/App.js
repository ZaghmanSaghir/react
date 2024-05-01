
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
  const [role, setRole] = useState('dev')
  // let role = 'dev';
  const showEmployee = true;

  return (
    <div className='bg-red-300' >

      {
        showEmployee ?
          <>
            <input type='text' onChange={(e) => {
              console.log(e.target.value)  // To get what typed into the output
              setRole(e.target.value);
            }} />
            <Employee name="John" role="Intern" />
            <Employee name="Mark" role={role} />
          </>

          :
          <p> You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
