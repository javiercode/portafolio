import React, { useState, useEffect, useRef } from 'react';
import anime from 'animejs';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songTitle, setSongTitle] = useState('Chill Retro Beats');
  const [songArtist, setSongArtist] = useState('Lo-Fi Synthesizer');
  const barsRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);

  // SoundCloud Widget Controller mockup (works offline, can be synced easily with SC widget script)
  const togglePlay = () => {
    setIsPlaying(prev => !prev);
  };

  useEffect(() => {
    if (!barsRef.current) return;

    if (isPlaying) {
      // Start anime.js visualizer bars animation
      const animateBars = () => {
        const randomHeight = () => anime.random(4, 50) + "px";
        animationRef.current = anime({
          targets: barsRef.current?.querySelectorAll('.c-music__bar'),
          height: randomHeight,
          duration: 300,
          delay: anime.stagger(50),
          easing: 'easeInOutQuad',
          complete: () => {
            if (isPlaying) animateBars();
          }
        });
      };
      animateBars();
    } else {
      // Stop and reset visualizer bars
      if (animationRef.current) {
        animationRef.current.pause();
      }
      anime({
        targets: barsRef.current?.querySelectorAll('.c-music__bar'),
        height: '4px',
        duration: 200,
        easing: 'linear'
      });
    }

    return () => {
      if (animationRef.current) animationRef.current.pause();
    };
  }, [isPlaying]);

  return (
    <div style={{ fontFamily: 'monospace', color: 'inherit', textAlign: 'center' }}>
      <div 
        ref={barsRef} 
        style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', gap: '4px', height: '60px', marginBottom: '12px', background: '#0F1D19', border: '1px solid currentColor', padding: '10px' }}
      >
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className="c-music__bar" 
            style={{ width: '8px', height: '4px', background: 'currentColor', transition: 'height 0.1s' }} 
          />
        ))}
      </div>

      <div style={{ marginBottom: '10px' }}>
        <div className="js-radio-song" style={{ fontWeight: 'bold', fontSize: '12px' }}>{songTitle}</div>
        <div className="js-radio-artist" style={{ fontSize: '10px', opacity: 0.7 }}>{songArtist}</div>
      </div>

      {/* Hidden SoundCloud Widget iframe for streaming (or can be visible retro style!) */}
      <iframe 
        width="100%" 
        height="100" 
        scrolling="no" 
        frameBorder="no" 
        allow="autoplay" 
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/293214220&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        style={{ display: 'none' }}
      />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button 
          className="c-btn"
          style={{ background: 'none', border: '1px solid currentColor', padding: '4px 10px', fontFamily: 'monospace', fontWeight: 'bold', color: 'inherit', cursor: 'pointer' }}
          onClick={() => { setSongTitle('Synthwave Dreams'); setSongArtist('Retro-Wave'); }}
        >
          &lt;&lt; Prev
        </button>
        <button 
          className="c-btn"
          style={{ background: 'none', border: '1px solid currentColor', padding: '4px 14px', fontFamily: 'monospace', fontWeight: 'bold', color: 'inherit', cursor: 'pointer' }}
          onClick={togglePlay}
        >
          {isPlaying ? 'Pause ⏸️' : 'Play ▶️'}
        </button>
        <button 
          className="c-btn"
          style={{ background: 'none', border: '1px solid currentColor', padding: '4px 10px', fontFamily: 'monospace', fontWeight: 'bold', color: 'inherit', cursor: 'pointer' }}
          onClick={() => { setSongTitle('Late Night Lo-Fi'); setSongArtist('Beatmaker'); }}
        >
          Next &gt;&gt;
        </button>
      </div>
    </div>
  );
};