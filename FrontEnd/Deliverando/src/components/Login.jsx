import React, { useContext } from 'react';
import { MyContext } from '../context/context';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../config/urlConfig';
import "../style/loginRegister.css";

export default function Login() {

  const { setUser, setShowRegister } = useContext(MyContext);
  const navigate = useNavigate();


  function showRegistation(){
    setShowRegister(false)
    }

  const loginUser = (e) => {
    e.preventDefault();
    fetch(`${BASE_URL}/api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => {
        const token = res.headers.get('token');
        if (token) {
          localStorage.setItem('token', token);
        }
        return res.json();
      })
      .then((result) => {
        console.log('Login Result:', result.foundUser); 
        setUser(result.foundUser);
        navigate('/restaurants');
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={loginUser}>
          <label htmlFor="email">E-mail:</label>
          <br />
          <input type="email" id="email" name="email"></input>
          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input type="password" id="password" name="password"></input>
          <br />
          <button>Login</button> 
        </form>
        <p>Don't have an account? <a href="#" onClick={showRegistation}>Sign Up!</a></p>
      </div>
    </>
  );
}
