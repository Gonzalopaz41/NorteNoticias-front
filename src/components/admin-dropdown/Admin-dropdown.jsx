import Dropdown from 'react-bootstrap/Dropdown';
import {useNavigate} from 'react-router-dom'



function TypesExample() {
  const navigate = useNavigate()

  return (
    <>
    <Dropdown>
      <Dropdown.Toggle className='bg-red-600 hover:bg-red-400 border-0' variant="success" id="dropdown-basic">
        Administracion
      </Dropdown.Toggle>

      <Dropdown.Menu className=''>
        <Dropdown.Item className='' href="/manageUsers">Gestionar Usuarios</Dropdown.Item>
        <Dropdown.Item href="/manageNews">Gestionar Noticias</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>  
    </>
  );
}

export default TypesExample;