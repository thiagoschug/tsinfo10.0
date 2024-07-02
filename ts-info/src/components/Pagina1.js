// Pagina1.jsx
import React, { useState } from 'react';
import styles from './pagina1.module.css';

function Pagina1() {
    const [activeTab, setActiveTab] = useState('manutenção');

    const handleTabClick = (tab, event) => {
        event.preventDefault();
        setActiveTab(tab);
    };

    return (
        <div className={styles.pagina1}>
            <div className="container">
                <div className={styles.titulo}>
                    <small>Serviços</small>
                    <h3>A solução ao seu alcance</h3>
                </div>

                <ul className="nav nav-tabs nav-justified" role="tablist">
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeTab === 'manutenção' ? 'active' : ''}`}
                            data-bs-toggle="tab"
                            href="manutenção"
                            onClick={(event) => handleTabClick('manutenção', event)}
                        >
                            Manutenção
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeTab === 'schedule' ? 'active' : ''}`}
                            data-bs-toggle="tab"
                            href="#schedule"
                            onClick={(event) => handleTabClick('schedule', event)}
                        >
                            Desenvolvimento
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className={`nav-link ${activeTab === 'messages' ? 'active' : ''}`}
                            data-bs-toggle="tab"
                            href="#messages"
                            onClick={(event) => handleTabClick('messages', event)}
                        >
                            Consultoria
                        </a>
                    </li>
                </ul>

                <div className="tab-content">
                    <div className={`tab-pane fade ${activeTab === 'manutenção' ? 'show active' : ''}`} id="manutenção">
                        <div className="d-flex flex-column flex-lg-row">
                            <img src="https://cdn.packzin.com.br/landing_page_assets/lp_insta_nova/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                            <div>
                                <h2>Seu sistema merece o melhor cuidado.</h2>
                                <p className="lead">"Manutenção ágil para performance máxima do seu sistema."</p>
                            <p>
                                    "Oferecemos serviços completos de manutenção de hardware, garantindo diagnósticos precisos, reparos rápidos e suporte contínuo para a longevidade e eficiência dos seus equipamentos."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 'schedule' ? 'show active' : ''}`} id="Desenvolvimento Web">
                        <div className="d-flex flex-column flex-lg-row">
                            <h2>Sob medida cada detalhe pensado para você.</h2>
                            <p className="lead">
                                "Criação de sites dinâmicos, responsivos e seguros com tecnologias modernas e frameworks robustos."
                            </p>
                            
                            <div>
                                
                            </div>
                            <img src="https://cdn.packzin.com.br/landing_page_assets/lp_insta_nova/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                        </div>
                    </div>

                    <div className={`tab-pane fade ${activeTab === 'messages' ? 'show active' : ''}`} id="messages">
                        <div className="d-flex flex-column flex-lg-row">
                            <div>
                                <h2>Sua TI ideal</h2>
                                <p className="lead"></p>
                                <p>"Elevamos sua TI a um novo patamar com soluções personalizadas para otimizar processos, integrar sistemas, garantir segurança e impulsionar a inovação."</p>
                               
                            </div>
                            <img src="https://cdn.packzin.com.br/landing_page_assets/lp_insta_nova/images/graphic.png" alt="graphic" className="img-fluid rounded align-self-start mr-lg-5 mb-5 mb-lg-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pagina1;
