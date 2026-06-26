import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Chatbot: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string }>>([
    { sender: 'bot', text: t('chat.welcome_msg') }
  ]);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Update welcome message if language changes
  useEffect(() => {
    setMessages(prev => {
      if (prev.length === 1 && prev[0].sender === 'bot') {
        return [{ sender: 'bot', text: t('chat.welcome_msg') }];
      }
      return prev;
    });
  }, [i18n.language, t]);

  const handleAsk = (key: string) => {
    const qText = t(`chat.q_${key}`);
    const aText = t(`chat.a_${key}`);

    setMessages(prev => [
      ...prev,
      { sender: 'user', text: qText },
      { sender: 'bot', text: aText }
    ]);
  };

  const questions = ['exp', 'tech', 'leader', 'ml', 'remote', 'contact'];

  return (
    <div style={{ fontFamily: 'monospace' }}>
      <div 
        className="c-chat-messages" 
        id="chat-box" 
        style={{ height: '220px', overflowY: 'auto', background: '#0F1D19', border: '1px solid currentColor', padding: '10px', marginBottom: '10px', color: 'inherit' }}
      >
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className={`c-chat-message c-chat-message--${msg.sender}`}
            style={{ marginBottom: '8px', lineHeight: '1.4' }}
          >
            {msg.sender === 'user' ? `${t('chat.name_label')} ` : '🤖 [Javier_AI]: '}
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <div className="c-chat-options" style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        {questions.map((q) => (
          <button 
            key={q} 
            className="c-chat-option js-chat-ask" 
            onClick={() => handleAsk(q)}
            style={{ textAlign: 'left', background: 'none', border: '1px solid currentColor', padding: '6px 10px', color: 'inherit', cursor: 'pointer', fontFamily: 'monospace', fontSize: '11px' }}
          >
            {t(`chat.q_${q}`)}
          </button>
        ))}
      </div>
    </div>
  );
};