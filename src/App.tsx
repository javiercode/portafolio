import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import platform from 'platform';
import { FolderCard } from './components/FolderCard';
import { ModalWindow } from './components/ModalWindow';
import { Chatbot } from './components/Chatbot';
import { SupportForm } from './components/SupportForm';
import { PongGame } from './components/PongGame';
import { MusicPlayer } from './components/MusicPlayer';
import './assets/styles/main.css';

function App() {
  const { t, i18n } = useTranslation();

  const [activeTheme, setActiveTheme] = useState('th-browso-nine-eight');
  const [isLoading, setIsLoading] = useState(true);
  const [loadMessage, setLoadMessage] = useState('Iniciando Portafolio...');
  const [progress, setProgress] = useState(0);

  const [openWindows, setOpenWindows] = useState<Record<string, boolean>>({
    profile: false,
    education: false,
    skill: false,
    skillSoft: false,
    experience: false,
    projects: false,
    references: false,
    environment: false,
    chat: false,
    support: false,
    themeSelector: false,
    music: false,
    pong: false,
    info: false,
  });

  const [deviceDetails, setDeviceDetails] = useState({
    os: 'Unknown OS',
    colors: '24-bit',
    cookies: 'Enabled',
    flash: 'Disabled',
    adBlocker: 'Disabled',
    motion: 'No Preference',
    density: '1',
    resolution: '1920 x 1080',
    browser: 'Chrome 120.0'
  });

  // Simulated progressive loader exactly like the original jQuery timeline
  useEffect(() => {
    const timers = [
      setTimeout(() => {
        setProgress(30);
      }, 300),
      setTimeout(() => {
        setLoadMessage('Cargando Tema Random...');
        setProgress(60);
      }, 900),
      setTimeout(() => {
        setLoadMessage('Obteniendo detalles de entorno...');
        setProgress(85);
      }, 1500),
      setTimeout(() => {
        setProgress(100);
      }, 2100),
      setTimeout(() => {
        setIsLoading(false);
      }, 2500),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  // Apply body classes matching the active theme
  useEffect(() => {
    document.body.className = `s-home ${activeTheme}`;
  }, [activeTheme]);

  // Load device details on mount
  useEffect(() => {
    setDeviceDetails({
      os: platform.os?.toString() || 'Unknown OS',
      colors: screen.colorDepth + '-bit',
      cookies: navigator.cookieEnabled ? 'Enabled' : 'Disabled',
      flash: 'Disabled',
      adBlocker: 'Disabled',
      motion: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'Prefers reduced' : 'No Preference',
      density: (window.devicePixelRatio || 1).toString(),
      resolution: window.screen.width + ' x ' + window.screen.height,
      browser: (platform.name || 'Browser') + ' ' + (platform.version || '')
    });
  }, []);

  const toggleWindow = (name: string, isOpen: boolean) => {
    setOpenWindows(prev => ({
      ...prev,
      [name]: isOpen,
    }));
  };

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const yearsExperience = new Date().getFullYear() - 2013;

  // 1. Loading screen view
  if (isLoading) {
    return (
      <div className="c-page" style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="c-viewer c-loader js-move" style={{ display: 'block', width: '340px', position: 'relative' }}>
          <div className="c-loader__boot">
            <svg height="59" viewBox="0 0 100 59" width="100" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m93 35v-28h-27v-7h28v7h6v28h-6v7h-28v-7zm-58 0v7h-28v-7h27v-28h-27v-7h28v7h6v10h18v-10h7v28h-7v-11h-18v11zm-35-28h7v28h-7zm35 45h31v7h-31zm-21-38h13v14h-13zm59 0h14v14h-14z"
                fill="currentColor" fillRule="evenodd" />
            </svg>
            <p className="c-loader__message js-load-message" style={{ margin: '15px 0' }}>{loadMessage}</p>
            <div className="u-mrg-l-5 u-mrg-r-5" style={{ padding: '0 15px' }}>
              <div className="c-loader__bar">
                <span className="c-loader__progress js-progress" style={{ width: `${progress}%`, transition: 'width 0.4s ease' }}></span>
              </div>
            </div>
          </div>
          <p className="c-loader__disclaimer" style={{ marginTop: '20px', fontSize: '10px' }}>
            Portafolio &copy; {new Date().getFullYear()}. <span className="u-d-block@md">Todos los derechos reservados.</span>
          </p>
        </div>
      </div>
    );
  }

  // 2. Main Desktop UI view
  return (
    <div className="c-page" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Upper Navigation Bar */}
      <header className="c-nav">
        <nav className="c-nav__content">
          <ul className="c-nav-list o-flexy o-flexy--middle">
            {/* Logo and Language Badge (Top-Left) */}
            <li className="c-nav-list__item c-nav-list__item--inner o-flexy__item">
              <div className="o-flexy o-flexy--middle c-nav-list__height">
                <div className="o-flexy__item">
                  <a className="c-nav-list__logo" href="#/">
                    <span className="c-nav-list__svg c-nav-list__svg--logo">
                      <svg height="17" viewBox="0 0 29 17" width="29" xmlns="http://www.w3.org/2000/svg">
                        <path d="m273 44h5v-3h2v8h-2v-3h-5v3h-2v-8h2zm-12-3h2v8h-2zm27 0h2v8h-2zm-17 13h9v2h-9zm9-15h8v2h-8zm-17 0h8v2h-8zm2 4h4v4h-4zm17 0h4v4h-4zm-19 6h8v2h-8zm17 0h8v2h-8z" fill="currentColor" fillRule="evenodd" transform="translate(-261 -39)" />
                      </svg>
                    </span>
                    <span className="u-d-none">Portafolio</span>
                  </a>
                </div>
                <div className="o-flexy__item" style={{ paddingLeft: '10px' }}>
                  <div className="c-lang-indicator js-selected-lang-indicator" style={{ display: 'inline-block', verticalAlign: 'middle', cursor: 'default' }}>
                    {i18n.language.toUpperCase()}
                  </div>
                </div>
              </div>
            </li>

            {/* Language Selection Buttons (Instead of download, aligned to right) */}
            <li className="c-nav-list__item c-nav-list__item--inner c-nav-list__item--first u-mrg-l-auto o-flexy__item">
              <button 
                className="c-nav-list__link js-lang-btn" 
                onClick={() => changeLanguage('en')}
                style={{ fontFamily: 'monospace', fontWeight: 'bold', outline: 'none', opacity: i18n.language === 'en' ? 1 : 0.5, padding: '0 0.8em', minWidth: '40px', textAlign: 'center' }}
              >
                EN
              </button>
            </li>
            <li className="c-nav-list__item c-nav-list__item--inner o-flexy__item">
              <button 
                className="c-nav-list__link js-lang-btn" 
                onClick={() => changeLanguage('es')}
                style={{ fontFamily: 'monospace', fontWeight: 'bold', outline: 'none', opacity: i18n.language === 'es' ? 1 : 0.5, padding: '0 0.8em', minWidth: '40px', textAlign: 'center' }}
              >
                ES
              </button>
            </li>

            {/* Themes Selector Shortcut */}
            <li className="c-nav-list__item c-nav-list__item--inner o-flexy__item">
              <button className="c-nav-list__link js-show-themer" onClick={() => toggleWindow('themeSelector', true)} aria-label="Change Theme">
                <span className="c-nav-list__svg">
                  <svg height="22" viewBox="0 0 20 22" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="m47 39v1h-14v-1h-1v-1h16v1zm-7-9h-1v-1h1v-3h1v4zm-8-12h16v1h-16zm-2 2h1v17h-1zm5 3h10v1h-10zm0 9h10v2h-10zm2-6h1v2h-1zm5 0h1v2h-1zm-11 11h1v1h-1zm0-18h1v1h-1zm17 18h1v1h-1zm0-18h1v1h-1zm-14 5h1v8h-1zm11 0h1v8h-1zm4-4h1v17h-1z" fill="currentColor" fillRule="evenodd" transform="translate(-30 -18)" />
                  </svg>
                </span>
              </button>
            </li>

            {/* Pong Game Shortcut */}
            <li className="c-nav-list__item c-nav-list__item--inner c-nav-list__item--game o-flexy__item">
              <button className="c-nav-list__link js-show-pong" onClick={() => toggleWindow('pong', true)} aria-label="Game">
                <span className="c-nav-list__svg">
                  <svg height="20" viewBox="0 0 16 20" width="16" xmlns="http://www.w3.org/2000/svg">
                    <path d="m9 10v4h2v-4zm-1 0h-1v-1h-1v-1h8v1h-1.5.5v1h-1v4h5v1h-14v-1h5zm8 9v1h-12v-1h-1v-1h14v1zm-2-18h1v7h-1zm-9 0h1v7h-1zm1-1h8v1h-8zm11 15h1v3h-1zm-15 0h1v3h-1z" fill="currentColor" fillRule="evenodd" transform="translate(-2)" />
                  </svg>
                </span>
              </button>
            </li>

            {/* Site Info Popup Shortcut */}
            <li className="c-nav-list__item o-flexy__item">
              <button className="c-nav-list__link js-show-info" onClick={() => toggleWindow('info', true)} aria-label="Site Info">
                <span className="c-nav-list__svg">
                  <svg height="20" viewBox="0 0 18 20" width="18" xmlns="http://www.w3.org/2000/svg">
                    <path d="m15 19v1h-12v-1h-1v-1h14v1zm-13-19h14v1h-14zm-1 17h1v1h-1zm0-16h1v1h-1zm15 16h1v1h-1zm0-16h1v1h-1zm-16 1h1v15h-1zm17 0h1v15h-1zm-9 2h2v2h-2zm0 4h2v6h-2z" fill="currentColor" fillRule="evenodd" />
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Desktop Container matching archived/ exactly */}
      <main className="u-pos-relative u-zi-10">
        <section className="c-window">
          <div className="o-container u-pos-repative u-zi-10">
            <div className="o-row">
              <div className="o-col-12 u-pos-relative">
                {/* Central Main static window enclosing all the cards */}
                <div className="c-viewer c-viewer--margin c-viewer--main" id="viewer-main">
                  <div className="c-viewer__address-bar">
                    <div className="o-flexy o-flexy--middle">
                      <div className="o-flexy__block"><i></i> <i></i> <i></i> <i></i> <i></i> <i></i></div>
                      <div className="o-flexy__item">
                        <span className="c-viewer__desc-text">
                          About_<span className="u-d-none@lg">Device</span><span className="u-d-none u-d-inline@lg">Me</span>
                        </span>
                      </div>
                      <div className="o-flexy__block"><i></i> <i></i> <i></i> <i></i> <i></i> <i></i></div>
                    </div>
                  </div>
                  <div className="c-viewer__content" id="printer">
                    <div className="c-card__wrapper" style={{ padding: '20px 15px' }}>
                      {/* Primera Fila (Cover Letter 50%, Technical 25%, Soft 25%) */}
                      <div className="c-card-row">
                        <div className="c-card-col-50">
                          <FolderCard 
                            id="profile" 
                            title={t('cards.profile.title')} 
                            entry={t('cards.profile.entry')} 
                            onOpen={() => toggleWindow('profile', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                        <div className="c-card-col-25">
                          <FolderCard 
                            id="skill" 
                            title={t('cards.technical.title')} 
                            entry={t('cards.technical.entry')} 
                            onOpen={() => toggleWindow('skill', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                        <div className="c-card-col-25">
                          <FolderCard 
                            id="skill-soft" 
                            title={t('cards.soft.title')} 
                            entry={t('cards.soft.entry')} 
                            onOpen={() => toggleWindow('skillSoft', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                      </div>

                      {/* Segunda Fila (Contact 25%, Education 25%, Experience 50%) */}
                      <div className="c-card-row">
                        <div className="c-card-col-25">
                          <FolderCard 
                            id="contact" 
                            title={t('cards.contact.title')} 
                            entry={t('cards.contact.entry')} 
                            onOpen={() => toggleWindow('support', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                        <div className="c-card-col-25">
                          <FolderCard 
                            id="education" 
                            title={t('cards.education.title')} 
                            entry={t('cards.education.entry')} 
                            onOpen={() => toggleWindow('education', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                        <div className="c-card-col-50">
                          <FolderCard 
                            id="experience" 
                            title={t('cards.experience.title')} 
                            entry={`${yearsExperience} ${t('cards.experience.entry')}`} 
                            onOpen={() => toggleWindow('experience', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                      </div>

                      {/* Tercera Fila (Projects 50%, References 25%, Environment 25%) */}
                      <div className="c-card-row" style={{ marginBottom: 0 }}>
                        <div className="c-card-col-50">
                          <FolderCard 
                            id="projects" 
                            title={t('cards.projects.title')} 
                            entry={t('cards.projects.entry')} 
                            onOpen={() => toggleWindow('projects', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                        <div className="c-card-col-25">
                          <FolderCard 
                            id="references" 
                            title={t('cards.references.title')} 
                            entry={t('cards.references.entry')} 
                            onOpen={() => toggleWindow('references', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                        <div className="c-card-col-25">
                          <FolderCard 
                            id="environment" 
                            title={t('cards.environment.title')} 
                            entry={t('cards.environment.entry')} 
                            onOpen={() => toggleWindow('environment', true)} 
                            className="c-card--half-height"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* 3. Modal Windows (Draggable) opening higher up correctly */}
      
      {/* Profile (Cover Letter) modal */}
      <ModalWindow 
        id="profile" 
        title={t('cards.profile.title')} 
        isOpen={openWindows.profile} 
        onClose={() => toggleWindow('profile', false)}
      >
        <div style={{ fontFamily: 'monospace', color: 'inherit', lineHeight: '1.5', maxHeight: '300px', overflowY: 'auto' }}>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '14px', textDecoration: 'underline' }}>{t('cards.profile.title')}</h3>
          <p><strong>De:</strong> Javier Elvis Canqui Llusco</p>
          <p><strong>Para:</strong> Reclutador Corporativo / Equipo de Ingeniería</p>
          <p style={{ marginTop: '10px' }}>
            Hola, soy Ingeniero de Sistemas, desarrollador full-stack y apasionado por la Inteligencia Artificial y Machine Learning. Con más de 12 años de trayectoria profesional, tengo amplia experiencia liderando equipos técnicos y construyendo arquitecturas asíncronas y distribuidas de gran envergadura.
          </p>
          <p style={{ marginTop: '10px' }}>
            He diseñado y puesto en producción de modelos de aprendizaje automático para el sector bancario, motores masivos de cobros recurrentes y completas aplicaciones móviles e híbridas. Mi foco principal es resolver problemas complejos de negocio a través de la excelencia técnica y código limpio.
          </p>
        </div>
      </ModalWindow>

      {/* Support / Contact Form modal */}
      <ModalWindow 
        id="support" 
        title={t('chat.contact_tab')} 
        isOpen={openWindows.support} 
        onClose={() => toggleWindow('support', false)}
      >
        <SupportForm />
      </ModalWindow>

      {/* Q&A Chatbot modal */}
      <ModalWindow 
        id="chat" 
        title={t('chat.title')} 
        isOpen={openWindows.chat} 
        onClose={() => toggleWindow('chat', false)}
      >
        <Chatbot />
      </ModalWindow>

      {/* Technical Skills modal */}
      <ModalWindow 
        id="skill" 
        title={t('cards.technical.title')} 
        isOpen={openWindows.skill} 
        onClose={() => toggleWindow('skill', false)}
      >
        <ul style={{ fontFamily: 'monospace', paddingLeft: '15px', lineHeight: '1.6', maxHeight: '250px', overflowY: 'auto' }}>
          <li><strong>Lenguajes:</strong> Node.js, C#, Java, Python, PHP, TypeScript</li>
          <li><strong>Frameworks:</strong> React, Angular, Spring Boot, .NET Core, Express</li>
          <li><strong>Bases de Datos:</strong> Oracle, SQL Server, PostgreSQL, MongoDB, MySQL</li>
          <li><strong>DevOps & Cloud:</strong> Docker, Kubernetes, Jenkins, Grafana, AWS</li>
        </ul>
      </ModalWindow>

      {/* Soft Skills modal */}
      <ModalWindow 
        id="skill-soft" 
        title={t('cards.soft.title')} 
        isOpen={openWindows.skillSoft} 
        onClose={() => toggleWindow('skillSoft', false)}
      >
        <ul style={{ fontFamily: 'monospace', paddingLeft: '15px', lineHeight: '1.6' }}>
          <li>Liderazgo de Equipos Técnicos</li>
          <li>Pensamiento Crítico y Analítico</li>
          <li>Resolución de Problemas Complejos</li>
          <li>Trabajo Colaborativo en Equipos Distribuidos</li>
          <li>Metodologías Ágiles (Scrum, Kanban)</li>
        </ul>
      </ModalWindow>

      {/* Education modal */}
      <ModalWindow 
        id="education" 
        title={t('cards.education.title')} 
        isOpen={openWindows.education} 
        onClose={() => toggleWindow('education', false)}
      >
        <div style={{ fontFamily: 'monospace', lineHeight: '1.5' }}>
          <p>🎓 <strong>Ingeniería de Sistemas</strong></p>
          <p style={{ opacity: 0.8, fontSize: '11px', marginBottom: '8px' }}>Universidad Mayor de San Simón - UMSS</p>
          
          <p>🧠 <strong>Postgrado en Machine Learning & Deep Learning</strong></p>
          <p style={{ opacity: 0.8, fontSize: '11px' }}>Universidad Católica Boliviana San Pablo</p>
        </div>
      </ModalWindow>

      {/* Work Experience modal */}
      <ModalWindow 
        id="experience" 
        title={t('cards.experience.title')} 
        isOpen={openWindows.experience} 
        onClose={() => toggleWindow('experience', false)}
      >
        <div style={{ fontFamily: 'monospace', lineHeight: '1.5', maxHeight: '300px', overflowY: 'auto' }}>
          <p>💼 <strong>Líder Técnico Full Stack / IA</strong></p>
          <p style={{ opacity: 0.8, fontSize: '11px', marginBottom: '6px' }}>Sector Financiero y Telecomunicaciones (2018 - Presente)</p>
          <ul style={{ paddingLeft: '15px', fontSize: '11px' }}>
            <li>Lideré la arquitectura de microservicios de cobranzas distribuidas.</li>
            <li>Diseñé e implementé el pipeline de ML para segmentación predictiva de clientes.</li>
          </ul>

          <p style={{ marginTop: '10px' }}>💼 <strong>Senior Software Engineer</strong></p>
          <p style={{ opacity: 0.8, fontSize: '11px', marginBottom: '6px' }}>Consultoras e Instituciones de Gobierno (2013 - 2018)</p>
        </div>
      </ModalWindow>

      {/* Projects modal */}
      <ModalWindow 
        id="projects" 
        title={t('cards.projects.title')} 
        isOpen={openWindows.projects} 
        onClose={() => toggleWindow('projects', false)}
      >
        <div style={{ fontFamily: 'monospace', lineHeight: '1.5', maxHeight: '250px', overflowY: 'auto' }}>
          <p>🤖 <strong>Conversational Chatbot AI</strong></p>
          <p style={{ fontSize: '11px', opacity: 0.8 }}>Integración inteligente con Dialogflow e i18n dinámico.</p>
          
          <p style={{ marginTop: '8px' }}>📈 <strong>Predictive Scoring Engine</strong></p>
          <p style={{ fontSize: '11px', opacity: 0.8 }}>Modelo predictivo de comportamiento de pago bancario usando Scikit-Learn.</p>
        </div>
      </ModalWindow>

      {/* References modal */}
      <ModalWindow 
        id="references" 
        title={t('cards.references.title')} 
        isOpen={openWindows.references} 
        onClose={() => toggleWindow('references', false)}
      >
        <ul style={{ fontFamily: 'monospace', paddingLeft: '15px', lineHeight: '1.6' }}>
          <li>Disponible bajo requerimiento confidencial de reclutadores corporativos certificados.</li>
        </ul>
      </ModalWindow>

      {/* Environment details modal */}
      <ModalWindow 
        id="environment" 
        title={t('cards.environment.title')} 
        isOpen={openWindows.environment} 
        onClose={() => toggleWindow('environment', false)}
      >
        <ul style={{ fontFamily: 'monospace', paddingLeft: '15px', lineHeight: '1.6', fontSize: '11px' }}>
          <li><strong>Sistema Operativo:</strong> {deviceDetails.os}</li>
          <li><strong>Profundidad de Color:</strong> {deviceDetails.colors}</li>
          <li><strong>Navegador Web:</strong> {deviceDetails.browser}</li>
          <li><strong>Resolución de Pantalla:</strong> {deviceDetails.resolution}</li>
          <li><strong>Densidad de Pixeles:</strong> {deviceDetails.density}</li>
          <li><strong>Ad Blocker:</strong> {deviceDetails.adBlocker}</li>
        </ul>
      </ModalWindow>

      {/* SoundCloud Music Player modal */}
      <ModalWindow 
        id="music" 
        title={t('nav.music')} 
        isOpen={openWindows.music} 
        onClose={() => toggleWindow('music', false)}
      >
        <MusicPlayer />
      </ModalWindow>

      {/* Pong game modal */}
      <ModalWindow 
        id="pong" 
        title={t('nav.game')} 
        isOpen={openWindows.pong} 
        onClose={() => toggleWindow('pong', false)}
      >
        <PongGame />
      </ModalWindow>

      {/* Info modal */}
      <ModalWindow 
        id="info" 
        title={t('nav.info')} 
        isOpen={openWindows.info} 
        onClose={() => toggleWindow('info', false)}
      >
        <div style={{ fontFamily: 'monospace', lineHeight: '1.5' }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Javier Canqui Llusco</h3>
          <p style={{ fontSize: '12px' }}>
            Este portafolio es un entorno de escritorio virtual interactivo diseñado y construido desde cero para simular sistemas operativos clásicos. Ahora completamente migrado a **React + TypeScript** con un motor dinámico de idiomas, chatbot inteligente, Pong y reproductor de música integrado.
          </p>
        </div>
      </ModalWindow>

      {/* Theme selector modal */}
      <ModalWindow 
        id="themeSelector" 
        title={t('nav.themes')} 
        isOpen={openWindows.themeSelector} 
        onClose={() => toggleWindow('themeSelector', false)}
        width="300px"
      >
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontFamily: 'monospace' }}>
          <button 
            className="c-themer__button js-browso-nine-eight"
            onClick={() => setActiveTheme('th-browso-nine-eight')}
            style={{ padding: '6px', cursor: 'pointer', fontFamily: 'monospace' }}
          >
            Browso 98
          </button>
          <button 
            className="c-themer__button js-sunset-drive"
            onClick={() => setActiveTheme('th-moonlight-drive')}
            style={{ padding: '6px', cursor: 'pointer', fontFamily: 'monospace' }}
          >
            Sunset Drive
          </button>
          <button 
            className="c-themer__button js-coastal-shores"
            onClick={() => setActiveTheme('th-coastal-shores')}
            style={{ padding: '6px', cursor: 'pointer', fontFamily: 'monospace' }}
          >
            Coastal Shores
          </button>
          <button 
            className="c-themer__button js-alpine-nights"
            onClick={() => setActiveTheme('th-alpine-nights')}
            style={{ padding: '6px', cursor: 'pointer', fontFamily: 'monospace' }}
          >
            Alpine Nights
          </button>
          <button 
            className="c-themer__button js-red-dawn"
            onClick={() => setActiveTheme('th-red-dawn')}
            style={{ padding: '6px', cursor: 'pointer', fontFamily: 'monospace' }}
          >
            Red Dawn
          </button>
          <button 
            className="c-themer__button js-browso"
            onClick={() => setActiveTheme('th-browso')}
            style={{ padding: '6px', cursor: 'pointer', fontFamily: 'monospace' }}
          >
            Classic
          </button>
        </div>
      </ModalWindow>

      {/* 4. Floating Action Buttons (At bottom of the screen, theme-matched) */}
      <button 
        className="c-floating-chat js-toggle-window" 
        onClick={() => toggleWindow('chat', true)}
        aria-label="Ask Javier"
        style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999, display: 'block' }}
      >
        <span className="c-floating-chat__icon">
          {t('nav.ask_me')}
        </span>
      </button>

      <button 
        className="c-floating-beacon js-toggle-window" 
        onClick={() => toggleWindow('support', true)}
        aria-label="Soporte Chat"
        style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 9999, display: 'block' }}
      >
        <span className="c-floating-beacon__icon">
          {t('nav.support_chat')}
        </span>
      </button>

      {/* Decorative scanline overlay */}
      <div className="c-noise" style={{ pointerEvents: 'none' }}></div>
    </div>
  );
}

export default App;