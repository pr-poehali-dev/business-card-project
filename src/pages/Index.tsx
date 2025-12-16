import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const telegramLinks = [
    { label: 'Написать мне', icon: 'MessageCircle' },
    { label: 'Подписаться', icon: 'UserPlus' },
    { label: 'Канал', icon: 'Radio' },
    { label: 'Группа', icon: 'Users' }
  ];

  const Snowflake = ({ delay, duration, left }: { delay: number; duration: number; left: string }) => (
    <div 
      className="snowflake text-2xl opacity-60"
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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {[...Array(15)].map((_, i) => (
        <Snowflake 
          key={i}
          delay={i * 0.7}
          duration={8 + Math.random() * 4}
          left={`${Math.random() * 100}%`}
        />
      ))}

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <div className={`max-w-4xl w-full text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          <div className="mb-8 animate-float">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl">
              <Icon name="Sparkles" size={64} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-foreground">
            Ваше имя
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            Описание деятельности
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Краткая информация о том, чем вы занимаетесь и что предлагаете
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16">
            {telegramLinks.map((link, index) => (
              <Button
                key={index}
                onClick={() => window.open('https://t.me/your_username', '_blank')}
                variant="outline"
                size="lg"
                className="h-16 text-lg font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon name={link.icon as any} size={24} className="mr-3" />
                {link.label}
              </Button>
            ))}
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-3">
              <Icon name="Mail" size={28} />
              Контакты
            </h2>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                <Icon name="Mail" size={24} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:your@email.com" className="text-lg hover:text-primary transition-colors">
                    your@email.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                <Icon name="Phone" size={24} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Телефон</p>
                  <a href="tel:+1234567890" className="text-lg hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4 rounded-lg hover:bg-accent transition-colors">
                <Icon name="MapPin" size={24} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Местоположение</p>
                  <p className="text-lg">Город, Страна</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-muted-foreground text-sm">
            <p>© 2025 Все права защищены</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
