import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Timer, Users, Star } from 'lucide-react';
import heroBackground from '../assets/optimized/hero-bg.webp';
interface HeroSectionProps {
  onScrollToPricing: () => void;
}

const HeroSection = ({ onScrollToPricing }: HeroSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  });
  const [visitorCount, setVisitorCount] = useState(847);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let {
          hours,
          minutes,
          seconds
        } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return {
          hours,
          minutes,
          seconds
        };
      });
    }, 1000);

    // Simulate visitor count updates
    const visitorTimer = setInterval(() => {
      setVisitorCount(prev => prev + Math.floor(Math.random() * 3));
    }, 15000);
    return () => {
      clearInterval(timer);
      clearInterval(visitorTimer);
    };
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8" style={{
    backgroundImage: `linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--primary-light) / 0.8)), url(${heroBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}>
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-accent rounded-full animate-particle-dance opacity-60" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${15 + Math.random() * 10}s`
      }} />)}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 py-8">
        {/* Contador de Visitantes */}
        <div className="glass-card inline-flex items-center gap-2 px-4 py-2 mb-12 animate-fade-in">
          <Users className="w-4 h-4 text-accent" />
          <span className="text-white text-sm">
            <span className="text-gradient-gold font-semibold">{visitorCount}</span> pessoas visualizando esta página
          </span>
        </div>

        {/* Título Principal com Efeito Typewriter */}
        <h1 className="font-heading md:text-6xl lg:text-7xl font-bold text-white mb-8 animate-fade-in text-3xl text-center">
          Pare de Lutar Contra
          <span className="block text-gradient-gold animate-typewriter overflow-hidden whitespace-nowrap border-r-4 border-accent mt-2">
            Sua Própria Mente
          </span>
        </h1>

        {/* Subtítulo */}
        <div className="mb-6 animate-slide-up">
          <p className="text-accent text-lg md:text-xl font-accent italic">
            Fator Essencial. Método 5Ps – A Descoberta da Mente Próspera
          </p>
        </div>

        {/* Título Secundário */}
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-white mb-8 animate-slide-up">
          Desbloqueie os 5 Pilares que Separam
          <span className="text-gradient-gold"> Sonhadores de Realizadores</span>
        </h2>

        {/* Prova Social */}
        <div className="flex items-center justify-center gap-2 mb-10 animate-scale-in">
          <div className="flex">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
          </div>
          <span className="text-white">
            Mais de <span className="text-accent font-bold">10.000</span> pessoas já transformaram suas vidas
          </span>
        </div>

        {/* CTA Principal */}
        <div className="mb-10 animate-scale-in">
          <Button 
            size="lg" 
            className="btn-hero text-lg px-10 py-5 mb-6 animate-glow relative overflow-hidden group"
            onClick={onScrollToPricing}
          >
            <span className="relative z-10">DESBLOQUEIE MINHA MENTE AGORA!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 mx-0 px-0" />
          </Button>
          <p className="text-white/90">
            Oferta Especial: A partir de <span className="text-accent font-bold text-xl">R$ 9,99</span>
            <span className="line-through text-white/60 ml-2">R$ 89,00</span>
            <span className="text-accent ml-2">(87% OFF)</span>
          </p>
        </div>

        {/* Timer da Contagem Regressiva */}
        <div className="glass-card inline-flex items-center gap-4 px-6 py-4 animate-pulse-gold mb-20">
          <Timer className="w-6 h-6 text-accent" />
          <span className="text-white">Oferta expira em:</span>
          <div className="flex gap-2">
            <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <span className="text-accent">:</span>
            <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <span className="text-accent">:</span>
            <div className="bg-accent text-accent-foreground px-3 py-1 rounded font-bold">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float z-20">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center mx-0 my-[32px]">
            <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;