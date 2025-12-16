import { useEffect, useState } from 'react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const telegramLinks = [
    { label: 'ОПЕРАТОР', url: 'https://t.me/your_operator' },
    { label: 'ЧАТ', url: 'https://t.me/your_chat' },
    { label: 'КАНАЛ', url: 'https://t.me/your_channel' },
    { label: 'БОТ', url: 'https://t.me/your_bot' }
  ];

  const Snowflake = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
    <div 
      className="snowflake text-xl"
      style={{
        left,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      ❄
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0d3d47] to-[#1a5a67] relative overflow-hidden flex items-center justify-center px-4">
      {[...Array(20)].map((_, i) => (
        <Snowflake 
          key={i}
          delay={i * 0.5}
          duration={10 + Math.random() * 5}
          left={`${Math.random() * 100}%`}
        />
      ))}

      <div className="relative z-10 w-full max-w-2xl">
        <div 
          className={`bg-gradient-to-br from-[#1a5a67]/80 to-[#0d3d47]/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-[#2a6a77] glow-effect transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-12 text-[#FFD700] tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif', textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' }}>
            Secret Room
          </h1>

          <div className="space-y-4">
            {telegramLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => window.open(link.url, '_blank')}
                className="button-glow w-full bg-gradient-to-r from-[#8B6914] to-[#B8860B] hover:from-[#B8860B] hover:to-[#DAA520] text-[#FFD700] font-semibold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg relative overflow-hidden"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '0.1em',
                  fontSize: '1.125rem',
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3), inset 0 -2px 10px rgba(0, 0, 0, 0.2)'
                }}
              >
                <span className="relative z-10">{link.label}</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#5dd9d1] rounded-full"></div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex justify-center gap-8 text-[#5dd9d1]/60 text-sm">
            <span>✨</span>
            <span>🎄</span>
            <span>⭐</span>
            <span>🎁</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
