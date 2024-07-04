import { useState } from 'react';
import "./App.css";
import { useNavigate } from 'react-router-dom';

function App() {

  const navigate = useNavigate();

  const [users, setUsers] = useState({ uname: "", email: "", password: "" });

  const [data, setData] = useState(JSON.parse(localStorage.getItem("ind")) || []);

  const handleChange = (e) => {
    setUsers({ ...users, [e.target.name]: e.target.value });
  }
  console.log(users);

  const handleSubmit = () => {
    setData([...data, users]);
    localStorage.setItem("ind", JSON.stringify([...data, users]));
    navigate('/Submit', { state: users });
  }
  console.log(data);

  return (
    <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/digital-camera-keyboard-felt-tip-pens-stationery-pink-background_23-2147880688.jpg)", backgroundSize: "cover", height: "100vh" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "50px", marginRight:"50%" }}>

        <div className='main' style={{ marginTop: "25%", }}>
          <label htmlFor='uname'>User Name:-</label>
          <input type='text' id='uname' name='uname' value={users.uname} onChange={(e) => handleChange(e)} />
        </div>

        <div className='main'>
          <label htmlFor='email'>E-mail:-</label>
          <input type='email' id='email' name='email' value={users.email} onChange={(e) => handleChange(e)} />
        </div>

        <div className='main'>
          <label htmlFor='password'>Password:-</label>
          <input type='password' id='password' name='password' value={users.password} onChange={(e) => handleChange(e)} />
        </div>

        <div>
          <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>

      </div >
    </div>
  );
}

export default App;
