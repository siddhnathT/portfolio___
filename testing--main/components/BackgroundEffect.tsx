import React, { useEffect, useRef } from 'react';

const BackgroundEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    interface Star {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      decreasing: boolean;
      speed: number;
    }

    const stars: Star[] = [];
    const starCount = 200;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initStars();
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: Math.random() * 1.5,
          alpha: Math.random(),
          decreasing: Math.random() > 0.5,
          speed: Math.random() * 0.05 + 0.01
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw Gradient Background
      const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
      gradient.addColorStop(0, '#1e293b'); // Lighter slate center
      gradient.addColorStop(1, '#020617'); // Almost black edges
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Connections (Constellation Effect)
      stars.forEach((star, i) => {
        stars.slice(i + 1).forEach((otherStar) => {
          const dx = star.x - otherStar.x;
          const dy = star.y - otherStar.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(star.x, star.y);
            ctx.lineTo(otherStar.x, otherStar.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      stars.forEach((star) => {
        // Twinkle effect
        if (star.decreasing) {
          star.alpha -= 0.005;
          if (star.alpha <= 0.2) star.decreasing = false;
        } else {
          star.alpha += 0.005;
          if (star.alpha >= 1) star.decreasing = true;
        }

        // Movement (Parallax)
        star.y -= star.speed;
        if (star.y < 0) {
          star.y = height;
          star.x = Math.random() * width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // Add a glow to larger stars
        if (star.radius > 1) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = "white";
        } else {
          ctx.shadowBlur = 0;
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default BackgroundEffect;