import React from "react";
import '../styles/Login.css'
import { Link } from "react-router-dom";

const Login: React.FC = () => {
    return (
        <div className="background">
            <div className="login-container">
                <div className="image-container">
                    <img src="" alt="Logo Senac" />
                </div>
                <div className="input-data">
                    <input placeholder="Username"></input>
                    <input placeholder="Password"></input>
                    <Link to="/home">
                        <button>Fazer Login</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;