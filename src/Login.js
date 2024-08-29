// src/Login.js
import React, { useState } from 'react';

const Login = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Fazendo a requisição para o servidor Node.js
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cpf, senha }),
        mode: 'cors' // Adicione explicitamente o modo CORS
      });
      
      if (response.ok) {
        // Se o login for bem-sucedido
        setIsLoggedIn(true);
        setError('');
      } else {
        // Se o login falhar
        setError('CPF ou senha incorretos!');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setError('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Bem-vindo!</h2>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <label>CPF:</label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Senha:</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
      )}
    </div>
  );
};

export default Login;
