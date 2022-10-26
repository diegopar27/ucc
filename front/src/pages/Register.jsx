import { ToastContainer, toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { registerRoute } from "../utils/APIRoutes";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import axios from "axios";
import Logo from "../assets/logo.svg";

export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error("La contraseña y la contraseña de confirmación deben ser las mismas.", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("El nombre de usuario debe tener más de 3 caracteres.", toastOptions);
      return false;
    } else if (password.length < 8) {
      toast.error("La contraseña debe ser mayor o igual a 8 caracteres.", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("Email es requerido.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(process.env.REACT_APP_LOCALHOST_KEY, JSON.stringify(data.user));
        navigate("/");
      }
    }
  };

  return (
    <>
      <FormContainer>
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            {/* <img src={Logo} alt="logo" /> */}
            <h1>Registrar cuenta</h1>
          </div>
          <input type="text" placeholder="Usuario" name="username" onChange={(e) => handleChange(e)} />
          <input type="email" placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
          <input type="password" placeholder="Contraseña" name="password" onChange={(e) => handleChange(e)} />
          <input type="password" placeholder="Confirmar Contraseña" name="confirmPassword" onChange={(e) => handleChange(e)} />
          <button type="submit">Crear usuario</button>
          <span>
            ¿Ya tienes una cuenta? <Link to="/login">Ingresar</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #f7e9fe;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 5rem;
    }
    h1 {
      color: black;
      text-transform: uppercase;
    }
  }

  form {
    box-shadow: 5px 5px 5px #4e0eff;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: #ffffff;
    border-radius: 2rem;
    padding: 3rem 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: black;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: black;
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
