import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const SupportForm: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const validate = () => {
    if (!name.trim() || !email.trim() || !msg.trim()) {
      alert(t('chat.error_msg') || "Por favor completa todos los campos del formulario.");
      return false;
    }
    return true;
  };

  const handleSendEmail = () => {
    if (!validate()) return;

    const subject = "Contacto Portafolio - " + name;
    const body = `Hola Javier,

Mi nombre es ${name} (${email}).

Te escribo para lo siguiente:
--------------------------------------------------
${msg}
--------------------------------------------------

Quedo atento a tus comentarios. Saludos cordiales.`;

    const mailtoUrl = "mailto:javier.elvis.code@gmail.com" +
                      "?subject=" + encodeURIComponent(subject) +
                      "&body=" + encodeURIComponent(body);
                      
    window.location.href = mailtoUrl;
  };

  const handleSendWhatsApp = () => {
    if (!validate()) return;

    const text = `Hola Javier, mi nombre es ${name} (${email}).

Te escribo por lo siguiente:
--------------------------------------------------
${msg}
--------------------------------------------------`;

    const whatsappUrl = "https://wa.me/59160609024?text=" + encodeURIComponent(text);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="c-support-form">
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="contact-name">{t('chat.name_label')}</label>
        <input 
          type="text" 
          id="contact-name" 
          className="c-support-input" 
          placeholder={t('chat.placeholder_name')}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="contact-email">{t('chat.email_label')}</label>
        <input 
          type="email" 
          id="contact-email" 
          className="c-support-input" 
          placeholder={t('chat.placeholder_email')}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label htmlFor="contact-message">{t('chat.message_label')}</label>
        <textarea 
          id="contact-message" 
          rows={4} 
          className="c-support-input" 
          placeholder={t('chat.placeholder_msg')}
          style={{ resize: 'none' }}
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
      </div>
      <button 
        className="c-chat-option js-contact-send" 
        onClick={handleSendEmail}
        style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', marginBottom: '8px', border: '1px solid currentColor', background: 'none', color: 'inherit', padding: '8px', cursor: 'pointer', fontFamily: 'monospace' }}
      >
        {t('chat.send_btn')}
      </button>
      <button 
        className="c-chat-option js-contact-whatsapp" 
        onClick={handleSendWhatsApp}
        style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', border: '1px solid currentColor', background: 'none', color: 'inherit', padding: '8px', cursor: 'pointer', fontFamily: 'monospace' }}
      >
        {t('chat.whatsapp_btn')}
      </button>
    </div>
  );
};