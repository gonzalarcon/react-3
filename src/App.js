import React, {useState} from "react";
import { BaseColaboradores } from "./components/Data.js";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

const [users, setUsers] = useState([...BaseColaboradores]);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, user]);
    setUser({ name: '', email: '' });
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
        <div className="Filtro">
          <h3>Buscador de Colaboradores</h3>
          <input
        type="text"
        placeholder="Filtra por nombre o correo"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
      />
        </div>
        <div className="inputs">
          <form onSubmit={handleSubmit}>
            <div className="input user">
              <label>Nombre del Colaborador</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Ingresa el nombre del Colaborador"
              />
            </div>
            <div className="input user">
              <label> Correo del Colaborador</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Correo del Colaborador"
              />
            </div>
            <button type="submit">Agregar Colaborador</button>
          </form>
        </div>
        <div className="List">
          <h2>Listado de Colaboradores</h2>
          <ul>
            {filteredUsers.map((user, index) => (
              <li key={index}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
    </div>  
  );
}

export default App;
