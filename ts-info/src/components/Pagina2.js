import React, { useState, useEffect } from 'react';
import styles from './pagina2.module.css';

function Pagina2() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 50) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.pagina2} id="sobre">
      <main className={styles.main}>
        <h1>Sobre</h1>
        <p className={styles.textosobre}>
          Fundada em 2023, a Ts Info é a sua parceira para soluções completas em informática. Oferecemos serviços especializados em manutenção de hardware, consultoria estratégica e desenvolvimento de sites personalizados para impulsionar o seu negócio. Com uma equipe apaixonada por tecnologia e comprometida com a excelência, entregamos resultados que superam expectativas. Conte conosco para manter seus equipamentos funcionando perfeitamente, otimizar seus processos e construir uma presença online marcante. Você conectado ao futuro. Conecte-se à Ts Info.
        </p>
        <div className={styles.content}>
          {/* Adicione mais conteúdo aqui para garantir que a página possa rolar */}
        </div>
      </main>
      <footer className={showFooter ? styles.showFooter : styles.hideFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.copyright}>
            <p>Ts Info © 2023 | Desenvolvido por: Thiago Schug</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Pagina2;
