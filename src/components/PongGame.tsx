import React, { useEffect, useRef, useState } from 'react';

export const PongGame: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [aiScore, setAiScore] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    
    // Game dimensions
    const width = 300;
    const height = 180;
    canvas.width = width;
    canvas.height = height;

    // Game state
    const ball = { x: width / 2, y: height / 2, vx: 2.5, vy: 1.5, radius: 4 };
    const paddleWidth = 6;
    const paddleHeight = 35;
    const player = { x: 10, y: height / 2 - paddleHeight / 2, score: 0 };
    const ai = { x: width - 10 - paddleWidth, y: height / 2 - paddleHeight / 2, score: 0 };

    // Mouse control
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const relativeY = e.clientY - rect.top;
      player.y = Math.max(0, Math.min(height - paddleHeight, relativeY - paddleHeight / 2));
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    const resetBall = (direction: number) => {
      ball.x = width / 2;
      ball.y = height / 2;
      ball.vx = direction * 2.5;
      ball.vy = (Math.random() * 2 - 1) * 2;
    };

    const gameLoop = () => {
      if (!isPlaying) return;

      // Move ball
      ball.x += ball.vx;
      ball.y += ball.vy;

      // Wall collisions (top / bottom)
      if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= height) {
        ball.vy = -ball.vy;
      }

      // AI simple tracking
      const aiSpeed = 1.8;
      const aiTargetY = ball.y - paddleHeight / 2;
      if (ai.y < aiTargetY) {
        ai.y += Math.min(aiSpeed, aiTargetY - ai.y);
      } else if (ai.y > aiTargetY) {
        ai.y -= Math.min(aiSpeed, ai.y - aiTargetY);
      }
      ai.y = Math.max(0, Math.min(height - paddleHeight, ai.y));

      // Ball and paddle collisions
      // Player paddle
      if (ball.vx < 0 && ball.x - ball.radius <= player.x + paddleWidth && ball.y >= player.y && ball.y <= player.y + paddleHeight) {
        ball.vx = -ball.vx * 1.05; // speed up slightly
        ball.x = player.x + paddleWidth + ball.radius;
      }

      // AI paddle
      if (ball.vx > 0 && ball.x + ball.radius >= ai.x && ball.y >= ai.y && ball.y <= ai.y + paddleHeight) {
        ball.vx = -ball.vx * 1.05;
        ball.x = ai.x - ball.radius;
      }

      // Score tracking
      if (ball.x < 0) {
        ai.score++;
        setAiScore(ai.score);
        resetBall(1);
      } else if (ball.x > width) {
        player.score++;
        setUserScore(player.score);
        resetBall(-1);
      }

      // Render
      ctx.fillStyle = '#0F1D19';
      ctx.fillRect(0, 0, width, height);

      // Mid-line
      ctx.strokeStyle = 'currentColor';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(width / 2, 0);
      ctx.lineTo(width / 2, height);
      ctx.stroke();

      // Render paddles and ball
      ctx.fillStyle = 'currentColor';
      ctx.fillRect(player.x, player.y, paddleWidth, paddleHeight);
      ctx.fillRect(ai.x, ai.y, paddleWidth, paddleHeight);

      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(gameLoop);
    };

    if (isPlaying) {
      animationId = requestAnimationFrame(gameLoop);
    } else {
      // Draw initial screen
      ctx.fillStyle = '#0F1D19';
      ctx.fillRect(0, 0, width, height);
      ctx.fillStyle = 'currentColor';
      ctx.font = '10px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('CLICK "NEW GAME" TO START', width / 2, height / 2);
    }

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isPlaying]);

  const handleStart = () => {
    setUserScore(0);
    setAiScore(0);
    setIsPlaying(true);
  };

  return (
    <div style={{ fontFamily: 'monospace', textAlign: 'center', color: 'inherit' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '12px', fontWeight: 'bold', marginBottom: '8px' }}>
        <span>PLAYER: {userScore}</span>
        <span>AI: {aiScore}</span>
      </div>
      <canvas 
        ref={canvasRef} 
        style={{ border: '1px solid currentColor', background: '#0F1D19', cursor: 'none', display: 'block', margin: '0 auto 10px', maxWidth: '100%' }} 
      />
      <button 
        className="c-btn" 
        onClick={handleStart}
        style={{ background: 'none', border: '1px solid currentColor', padding: '6px 14px', fontFamily: 'monospace', fontWeight: 'bold', color: 'inherit', cursor: 'pointer' }}
      >
        New Game
      </button>
    </div>
  );
};