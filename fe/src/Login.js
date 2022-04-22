import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';

function Login(props) {
  sessionStorage.clear();
  const [loading, setLoading] = useState(false);
  const password = useFormInput('');
  const [error, setError] = useState(null);

  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:8080/api/auth/login', { password: password.value }).then(response => {
      setLoading(false);
      setUserSession(password.value);
      props.history.push('/');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again!");
    });
  }

  return (
    <div class="container1">
      <div class="brand-logo"></div>
      <div class="brand-title">GITHUB</div>
      <div class="inputs">
        
        <label>GitHub Personal Access Token</label>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input type="password" {...password} autoComplete="new-password" />
        <button type="submit" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} >LOGIN</button>
      </div>
    </div>
  );
}

const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}

export default Login;