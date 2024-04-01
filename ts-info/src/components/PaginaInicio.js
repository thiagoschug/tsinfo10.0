// PaginaInicio.jsx

import React from 'react';
import styles from './PaginaInicio.module.css';
import Logo from './imagem/paginainicio.png'

function PaginaInicio() {
  return (
    <div className={styles.bg1}>
      <div className={styles.titulo01}>
        <div className={styles.contentWrapper}>
     
          <h1>
            TS <span>Info</span> Tecnologia <span>A Solução</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default PaginaInicio;
