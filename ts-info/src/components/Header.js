import React, { useState, useEffect } from 'react';
import { 
  AppBar, Box, Toolbar, Typography, IconButton,
  Avatar, Button, Tooltip, Menu, MenuItem, 
  Container, Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'; // Ícone de usuário
import Logo from './TS.svg';
import styles from './header.module.css';


const pages = ['Home', 'Serviços', 'Sobre'];
const settings = ['Perfil', 'Conta', 'Sair'];

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de login

  useEffect(() => {
    // Verificar se o usuário está logado (carregar do localStorage, por exemplo)
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if (storedLoginStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []); // Executa apenas uma vez ao montar o componente

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginClick = () => {
    // Lógica para redirecionar para a página de login (ex: history.push('/login'))
  };

  const handleLogoutClick = () => {
    // Lógica para deslogar (ex: localStorage.removeItem('isLoggedIn'); history.push('/'))
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setIsScrolled(!isTop);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AppBar
      position="fixed"
      sx={{
        height: '75px',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
        textAlign: 'center',
        zIndex: 1000,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          {/* Logo */}
          <Typography variant="h6" noWrap component="a" href="#app-bar-with-responsive-menu">
            <img src={Logo} alt="Logo" className={styles.logo} />
          </Typography>

          {/* Ícone do Menu para Navegação Responsiva */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Botões de Navegação */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 20 }}>
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                className={styles.button}
                sx={{
                  '&:hover': { backgroundColor: 'rgba(0, 0, 255, 0.1)' },
                  color: isScrolled ? 'black' : 'white',
                  textTransform: 'none',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

          {/* Botão de Login/Menu do Usuário */}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={isLoggedIn ? handleOpenUserMenu : handleLoginClick}
              startIcon={isLoggedIn ? <Avatar /> : <AccountCircleIcon />}
              sx={{ color: isScrolled ? 'black' : 'white', textTransform: 'none' }}
            >
              {isLoggedIn ? 'Perfil' : 'Entrar'}
            </Button>

            {isLoggedIn && ( // Mostrar menu apenas se estiver logado
              <Menu
                anchorEl={anchorElUser}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem onClick={handleCloseUserMenu} component={Link} href="/profile">
                  Perfil
                </MenuItem>
                <MenuItem onClick={handleCloseUserMenu} component={Link} href="/account">
                  Conta
                </MenuItem>
                <MenuItem onClick={handleLogoutClick}>Sair</MenuItem>
              </Menu>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
