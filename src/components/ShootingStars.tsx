'use client';

import { useEffect, useState } from 'react';

interface ShootingStar {
  id: number;
  top: number;
  left: number;
  delay: number;
  duration: number;
}

export default function ShootingStars() {
  const [stars, setStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Create a fixed set of stars on mount to avoid hydration mismatch
    // In a real random scenario, we might want to generate them purely client-side
    // or use a seed. Here we'll just generate them on client mount.
    const newStars = Array.from({ length: 1 }).map((_, i) => ({
      id: i,
      top: Math.random() * 50, // Top 50% of the screen
      left: Math.random() * 100, // Anywhere horizontally
      delay: Math.random() * 15, // Random delay up to 20s
      duration: 30 + Math.random() * 20, // Slow cycle (30-50s), motion happens in first 5%
    }));
    setStars(newStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full shadow-[0_0_0_4px_rgba(255,255,255,0.1)] animate-shooting-star opacity-0"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

