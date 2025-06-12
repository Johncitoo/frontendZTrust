import { useState } from 'react';
import type { FormEvent } from 'react';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://<IP_BACKEND>:3000/auth/login', {
        username,
        password,
      });
      setMsg(res.data.message);
    } catch (error) {
      setMsg('Error en conexión o credenciales inválidas');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '80px auto', fontFamily: 'sans-serif' }}>
      <h2>Login Zero Trust</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={e => setUsername(e.target.value)}
          style={{ width: '100%', margin: '5px 0', padding: 8 }}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: '100%', margin: '5px 0', padding: 8 }}
        />
        <button type="submit" style={{ width: '100%', padding: 10, marginTop: 10 }}>
          Entrar
        </button>
      </form>
      {msg && <p style={{ marginTop: 15 }}>{msg}</p>}
    </div>
  );
}

export default App;
