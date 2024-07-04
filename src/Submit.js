import "./App.css";
import { useLocation } from "react-router-dom";

const Submit = () => {

    const location = useLocation();

    const users = location.state;

    return (
        <div style={{ backgroundImage: "url(https://img.freepik.com/free-photo/bunch-lavender-flowers-cellphone-diary-pink-backdrop_23-2147880542.jpg)", backgroundSize: "cover", height: "100vh" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "100px", marginLeft:"50%" }}>

                <div className="main" style={{ marginTop: "30%" }}>
                    <label htmlFor='uname'>User Name:-</label>
                    <input type='text' id='uname' name='uname' value={users.uname} />
                </div>

                <div className="main">
                    <label htmlFor='email'>E-mail:-</label>
                    <input type='email' id='email' name='email' value={users.email} />
                </div>

            </div>
        </div>
    )
}

export default Submit;