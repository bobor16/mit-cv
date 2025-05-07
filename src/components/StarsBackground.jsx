import { useEffect } from "react";

function StarsBackground({ isDarkMode }) {
  useEffect(() => {
    if (!isDarkMode) return;

    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const stars = Array.from({ length: 100 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5,
      alpha: Math.random(),
      delta: Math.random() * 0.02
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);

      // Baggrund (galaxy mørk blå-sort)
      const gradient = ctx.createRadialGradient(
        width / 2, height / 2, width / 8,
        width / 2, height / 2, width
      );
      gradient.addColorStop(0, "rgba(20, 20, 40, 0.8)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Stjerner
      for (let star of stars) {
        star.alpha += star.delta;
        if (star.alpha <= 0 || star.alpha >= 1) star.delta = -star.delta;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      }
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isDarkMode]);

  return isDarkMode ? (
    <canvas id="starsCanvas" className="fixed top-0 left-0 w-full h-full z-0"></canvas>
  ) : null;
}

export default StarsBackground;
