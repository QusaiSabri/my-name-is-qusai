export default function SkyStars() {
    return (
      <svg
        viewBox="0 0 1920 1080"
        fill="white"
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 w-full h-full origin-top-right rotate-[7deg] opacity-70"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
          </filter>
          <style>
            {`
              @keyframes twinkle {
                0%, 100% { opacity: 0.2; }
                50% { opacity: 1; }
              }
            `}
          </style>
        </defs>
        {Array.from({ length: 600 }).map((_, i) => (
          <circle
            key={i}
            cx={Math.random() * 1920}
            cy={Math.random() * 1080}
            r="0.6"
            style={{
              opacity: i % 2 === 0 ? 0.2 : 1,
              transform: 'scale(var(--motion-scale))',
              animation: `twinkle ${3 + Math.random() * 7}s infinite ease-in-out`,
              filter: i % 3 === 0 ? 'url(#blurFilter)' : 'none',
            }}
          />
        ))}
      </svg>
    );
  }
  