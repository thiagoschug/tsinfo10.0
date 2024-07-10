import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import styles from './Botaocontato.module.css';

function Botaocontato() {
  const handleClick = () => {
    window.open('https://contate.me/tsinfo', '_blank');
  };

  return (
    <div className={styles.botaocontato} onClick={handleClick}>
      <WhatsAppIcon style={{ color: 'white', fontSize: '24px' }} />
    </div>
  );
}

export default Botaocontato;
