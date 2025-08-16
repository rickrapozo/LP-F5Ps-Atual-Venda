import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Clock, Users, AlertTriangle, Star, TrendingUp } from 'lucide-react';
interface FinalUrgencySectionProps {
  onScrollToPricing: () => void;
}

const FinalUrgencySection = ({ onScrollToPricing }: FinalUrgencySectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 45
  });
  const [spotsLeft, setSpotsLeft] = useState(153);
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

    // Simulate spots decreasing
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => Math.max(prev - Math.floor(Math.random() * 2), 50));
    }, 30000);
    return () => {
      clearInterval(timer);
      clearInterval(spotsTimer);
    };
  }, []);
  return <section className="py-20 bg-gradient-to-br from-primary to-primary-light relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-accent rounded-full animate-particle-dance opacity-40" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 20}s`,
        animationDuration: `${10 + Math.random() * 10}s`
      }} />)}
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Ícone de Alerta */}
        <div className="mb-8 scroll-reveal">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-gold">
            <AlertTriangle className="w-10 h-10 text-accent-foreground" />
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-4">
            ATENÇÃO: Esta Oferta
            <span className="text-accent"> Vai Acabar Em Breve!</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Já são <span className="text-accent font-bold">847 pessoas</span> que garantiram sua transformação hoje. 
            Não deixe sua mente próspera para amanhã.
          </p>
        </div>

        {/* Cards de Urgência */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 scroll-reveal">
          
          {/* Timer da Contagem Regressiva */}
          <Card className="glass-card p-6 text-center">
            <Clock className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold mb-4 text-base text-slate-950">Oferta Expira Em:</h3>
            <div className="flex justify-center gap-2">
              <div className="bg-accent text-accent-foreground px-3 py-2 rounded font-bold text-xl">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <span className="text-accent text-xl">:</span>
              <div className="bg-accent text-accent-foreground px-3 py-2 rounded font-bold text-xl">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <span className="text-accent text-xl">:</span>
              <div className="bg-accent text-accent-foreground px-3 py-2 rounded font-bold text-xl">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
            </div>
          </Card>

          {/* Vagas Limitadas */}
          <Card className="glass-card p-6 text-center">
            <Users className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold mb-4 text-slate-950">Vagas com Desconto Restantes:</h3>
            <div className="text-3xl font-bold text-accent mb-2">
              Apenas {spotsLeft}
            </div>
            <div className="w-full bg-white/20 rounded-full h-2">
              <div className="bg-accent h-2 rounded-full transition-all duration-500" style={{
              width: `${spotsLeft / 200 * 100}%`
            }} />
            </div>
          </Card>

          {/* Prova Social */}
          <Card className="glass-card p-6 text-center">
            <TrendingUp className="w-10 h-10 text-accent mx-auto mb-4" />
            <h3 className="font-bold mb-4 text-slate-950">Pessoas Se Juntando:</h3>
            <div className="text-3xl font-bold text-accent mb-2">
              Contador Ao Vivo
            </div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
            </div>
          </Card>
        </div>

        {/* Mensagem Final */}
        <div className="mb-12 scroll-reveal">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-heading text-3xl font-bold text-white mb-6">
              Sua Mente Próspera Está Esperando
            </h3>
            <p className="text-lg text-white/90 mb-6">
              Cada momento que você hesita é mais um dia vivendo abaixo do seu potencial. 
              O Método 5Ps já transformou mais de 10.000 vidas. 
              <span className="text-accent font-semibold"> A sua será a próxima?</span>
            </p>
            
            {/* Reversão de Risco */}
            <div className="bg-accent/20 border border-accent/40 rounded-lg p-4 mb-6">
              <p className="text-white font-semibold">
                🛡️ Lembre-se: Você está protegido pela nossa Garantia de 7 Dias
              </p>
              <p className="text-white/80 text-sm mt-2">
                Experimente sem risco. Se não ver resultados, receba 100% do seu dinheiro de volta.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Final */}
        <div className="scroll-reveal">
          <Button 
            size="lg" 
            className="btn-hero text-xl px-12 py-6 mb-6 animate-glow relative overflow-hidden group transform hover:scale-105"
            onClick={onScrollToPricing}
          >
            <span className="relative z-10">GARANTIR MINHA VAGA AGORA!</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none" />
          </Button>
          
          <p className="text-white/80 text-lg mb-4">
            A partir de <span className="text-accent font-bold text-2xl">R$ 9,99</span>
            <span className="line-through text-white/60 ml-2">R$ 89,00</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70">
            <span>✓ Acesso Instantâneo</span>
            <span>✓ Garantia de 7 Dias</span>
            <span>✓ Apenas Por Tempo Limitado</span>
            <span>✓ Junte-se a 10.000+ Histórias de Sucesso</span>
          </div>
        </div>

        {/* Citação de Depoimento */}
        <div className="mt-16 scroll-reveal">
          <blockquote className="text-xl italic text-white/90 max-w-2xl mx-auto">
            "No momento em que apliquei o Método 5Ps, tudo fez sentido. Passei de lutando para prosperando em apenas 30 dias."
          </blockquote>
          <cite className="text-accent font-semibold mt-4 block">— Sarah J., Empresária</cite>
        </div>
      </div>
    </section>;
};
export default FinalUrgencySection;