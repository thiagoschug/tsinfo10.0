import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material'; // Componentes do Material-UI para estilização
import { useNavigate } from 'react-router-dom'; // Hook para navegação entre rotas
import axios from 'axios'; // Biblioteca para fazer requisições HTTP
import styles from './account.module.css'; // Estilos CSS do componente

const AccountPage = () => {
  // Estado para armazenar os dados da conta
  const [account, setAccount] = useState(null);

  // Hook para navegar entre rotas
  const navigate = useNavigate();

  // Efeito colateral para buscar os dados da conta quando o componente for montado
  useEffect(() => {
    const fetchAccountData = async () => {
      try {
        // Faz a requisição para a API
        const response = await axios.get('https://api.example.com/account');
        // Atualiza o estado com os dados recebidos
        setAccount(response.data);
      } catch (error) {
        // Em caso de erro, exibe uma mensagem no console
        console.error('Erro ao buscar dados da conta:', error);
      }
    };

    // Chama a função para buscar os dados
    fetchAccountData();
  }, []); // Array vazio como segundo argumento garante que o efeito seja executado apenas uma vez

  // Função para lidar com o logout
  const handleLogout = () => {
    // Remove os dados do usuário do armazenamento local (se houver)
    localStorage.removeItem('user');
    // Redireciona para a página de login
    navigate('/login');
  };

  // Enquanto os dados da conta não forem carregados, exibe uma mensagem
  if (!account) {
    return <Typography>Carregando...</Typography>;
  }

  // Renderiza a página da conta
  return (
    <Container maxWidth="sm">
      <Box className={styles.accountBox}>
        <Typography variant="h4" component="h1" gutterBottom>
          Conta
        </Typography>
        <Typography variant="body1"><strong>Nome:</strong> {account.name}</Typography>
        <Typography variant="body1"><strong>Email:</strong> {account.email}</Typography>
        <button onClick={handleLogout}>Sair</button>
      </Box>
    </Container>
  );
};

export default AccountPage;
