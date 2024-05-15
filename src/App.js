
import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
  const [role, setRole] = useState('dev')
  const [employees, setEmployees] = useState(
    [
      { id: 1, name: "John", role: "Developer", img: "https://images.pexels.com/photos/3777578/pexels-photo-3777578.jpeg" },
      { id: 2, name: "Jam", role: "Manager", img: "https://images.pexels.com/photos/5467588/pexels-photo-5467588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
      { id: 3, name: "Joi", role: "Software Tester", img: "https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg" },
      { id: 4, name: "Max", role: "Director", img: "https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg" },
      { id: 5, name: "David", role: "Team lead", img: "https://images.pexels.com/photos/3771813/pexels-photo-3771813.jpeg" }, { id: 6, name: "Stefan", role: "System Engineer", img: "https://images.pexels.com/photos/5467588/pexels-photo-5467588.jpeg" }
    ]
  )

  function updateEmployee(id, newName, newRole) {
    const updatedEmployees = employees.map((employee) => {
      if (id == employee.id) {
        // return new
        return { ...employee, name: newName, role: newRole }
      }
      return employee
    })
    setEmployees(updatedEmployees)
  }

  const newEmployee = (name, role, img) => {
    const newEmployee = {
      id: uuidv4(),
      name: name,
      role: role,
      img: img
    }
    setEmployees([...employees, newEmployee])
  }

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
                const editEmployee = (
                  <EditEmployee id={employee.id} name={employee.name} role={employee.role} updateEmployee={updateEmployee} />
                )

                return (
                  < Employee
                    key={employee.id}
                    id={employee.id}
                    name={employee.name}
                    role={employee.role}
                    img={employee.img}
                    editEmployee={editEmployee}
                  />
                )
              })}
            </div>
            <AddEmployee newEmployee={newEmployee} />
          </>

          :
          <p> You cannot see the employees</p>
      }
    </div>
  );
}

export default App;
