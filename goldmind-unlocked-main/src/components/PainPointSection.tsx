import { X, ArrowRight, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const painPoints = [
  {
    icon: X,
    title: "Procrastinação roubando seus sonhos",
    description: "Você sabe o que precisa fazer, mas de alguma forma nunca consegue começar"
  },
  {
    icon: X,
    title: "Ciclo infinito de autossabotagem",
    description: "Quando as coisas começam a dar certo, você encontra uma forma de estragar tudo"
  },
  {
    icon: X,
    title: "Pensamentos negativos em loop constante",
    description: "Seu crítico interno nunca para de te dizer por que você não pode ter sucesso"
  },
  {
    icon: X,
    title: "Medo paralisante do fracasso",
    description: "Você prefere não tentar a correr o risco de parecer idiota ou ser rejeitado"
  },
  {
    icon: X,
    title: "Sentimento de 'não ser bom o suficiente'",
    description: "No fundo, você não acredita que merece o sucesso que deseja"
  },
  {
    icon: X,
    title: "Desperdiçando energia com preocupações",
    description: "Sua mente dispara com cenários catastróficos ao invés de soluções"
  }
];

interface PainPointSectionProps {
  onScrollToPricing: () => void;
}

const PainPointSection = ({ onScrollToPricing }: PainPointSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo - Pontos de Dor */}
          <div className="scroll-reveal">
            <div className="flex items-center gap-3 mb-8">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                Você Reconhece Estes Sinais de uma 
                <span className="text-destructive"> Mente Travada?</span>
              </h2>
            </div>

            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-white/50 border border-destructive/20 hover:border-destructive/40 transition-all duration-300 scroll-reveal"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                    <point.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dor Amplificada */}
            <div className="mt-12 p-6 bg-gradient-to-r from-destructive/10 to-destructive/20 border-l-4 border-destructive rounded-lg scroll-reveal">
              <p className="text-lg font-semibold text-destructive mb-2">
                A Verdade Dura:
              </p>
              <p className="text-foreground text-lg italic">
                "Cada dia sem mudança é um dia roubado da vida que você merece."
              </p>
            </div>
          </div>

          {/* Lado Direito - Preview da Solução */}
          <div className="scroll-reveal">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-light rounded-2xl p-8 text-white">
                <h3 className="font-heading text-3xl font-bold mb-6 text-center">
                  E se houvesse uma forma de 
                  <span className="text-accent"> se libertar</span>?
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Mente clara e focada em seus objetivos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Confiança inabalável em cada decisão</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Energia ilimitada para seus projetos</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span>Prosperidade fluindo naturalmente</span>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent-light text-accent-foreground font-bold px-6 py-3 text-sm"
                    onClick={onScrollToPricing}
                  >
                    QUERO SAIR DESTE CICLO!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Texto Final */}
        <div className="mt-16 text-center scroll-reveal">
          <p className="text-xl text-muted-foreground">
            A boa notícia? Você está a apenas <span className="text-accent font-semibold">uma decisão</span> de mudar tudo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointSection;