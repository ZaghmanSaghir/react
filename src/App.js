
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
      { id: 1, name: "John", role: "Developer", img: "https://images.pexels.com/photos/3777578/pexels-photo-3777578.jpeg" },
      { id: 2, name: "John", role: "Manager", img: "https://images.pexels.com/photos/5467588/pexels-photo-5467588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 3, name: "John", role: "Software Tester", img: "https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg" },
      { id: 4, name: "John", role: "Director", img: "https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg" },
      { id: 5, name: "John", role: "Team lead", img: "https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg" }, { id: 6, name: "John", role: "System Engineer", img: "https://images.pexels.com/photos/5467588/pexels-photo-5467588.jpeg" }
    ]
  )

  // let role = 'dev';
  const showEmployee = true;

  return (
    <div  >

      {
        showEmployee ?
          <>
            <input type='text' onChange={(e) => {
              console.log(e.target.value)  // To get what typed into the output
              setRole(e.target.value);
            }} />

            <div className='flex flex-wrap justify-center '>
              {employees.map((employee) => {
                console.log(uuidv4());
                return (
                  < Employee
                    key={uuidv4()}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                  />
                )
              })}
            </div>

          </>

          :
          <p> You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
