import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function AddEmployee(props) {
    const [name, setName] = useState('');
    const [role, setRole] = useState();
    const [img, setImg] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button onClick={handleShow} className="block mx-auto mt-2 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
                + Add Employee
            </button>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        setName('')
                        setRole('')
                        setImg('')
                        props.newEmployee(name, role, img)
                    }}

                        id='editmodal' className="max-w-sm w-full">
                        <div className="mb-5">
                            <label htmlfor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Full Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder='Zaghman Saghir'
                                class="bg-gray-50 border border-gray-300 text-gray-900 px-3 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={name}
                                onChange={(e) => { setName(e.target.value) }}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlfor="role" class="block px-3 mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                            <input
                                value={role}
                                type="text" id="role"
                                placeholder='Front End Developer'
                                className="bg-gray-50 px-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => { setRole(e.target.value) }}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlfor="img" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image URL</label>
                            <input
                                value={img}
                                type="text" id="img"
                                placeholder='https://tailwindcss.com/docs'
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                onChange={(e) => { setImg(e.target.value) }}
                            />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>

                    <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                        onClick={handleClose}>
                        Close
                    </button>
                    <button

                        className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                        onClick={handleClose}
                        form='editmodal'>
                        Add
                    </button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddEmployee;