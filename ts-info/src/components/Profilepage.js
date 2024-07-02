import React, { useState, useEffect } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import styles from './profile.module.css'; // Use o nome correto do seu arquivo de estilos

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [account, setAccount] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (isLoggedIn) {
      const userData = JSON.parse(localStorage.getItem('user'));
      setAccount(userData);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(response.data));
      setAccount(response.data);
      setIsLoggedIn(true);
      setError('');
    } catch (err) {
      setError('Email ou senha incorretos');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setAccount(null);
  };

  return (
    <Container maxWidth="sm">
      {isLoggedIn ? (
        <Box className={styles.profileBox}> {/* Use a classe de estilo do ProfilePage */}
          <Typography variant="h4" component="h1" gutterBottom>Perfil</Typography>
          <Typography variant="body1"><strong>Nome:</strong> {account.name}</Typography>
          <Typography variant="body1"><strong>Email:</strong> {account.email}</Typography>
          <Button onClick={handleLogout}>Sair</Button>
        </Box>
      ) : (
        <Box className={styles.loginBox}>
          <Typography variant="h4" component="h1" gutterBottom>Login</Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleLogin}>
            {/* ... (campos do formulário de login) ... */}
          </form>
        </Box>
      )}
    </Container>
  );
}

export default App;
