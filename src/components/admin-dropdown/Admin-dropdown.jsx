import Dropdown from 'react-bootstrap/Dropdown';
import '../Header/Navbar/Navbar.css'

function AdminDropdown() {
  return (
    <Dropdown className="">
      <Dropdown.Toggle className="border-none" variant="success" id="dropdown-basic">
        Administrador
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default AdminDropdown;