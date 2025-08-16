import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, Heart, Zap, Rocket, Trophy, Clock, CheckCircle, Lock } from 'lucide-react';
import productMockup from '../assets/product-mockup.jpg';

const pillars = [
  {
    id: 'thought',
    icon: Brain,
    title: 'P1 - PENSAMENTO',
    subtitle: 'Identifique e Reprograme Padrões Limitantes',
    description: 'Aprenda a técnica do Observador Neutro para detectar pensamentos sabotadores antes que se manifestem. Descubra como interceptar padrões de pensamento negativos na sua origem.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'feeling',
    icon: Heart,
    title: 'P2 - SENTIMENTO',
    subtitle: 'Decodifique a Origem dos Seus Sentimentos',
    description: 'Descubra a ligação direta entre pensamento e sentimento, dominando a raiz da mudança interna. Entenda como as emoções são criadas e como influenciá-las.',
    color: 'from-pink-500 to-pink-600'
  },
  {
    id: 'emotion',
    icon: Zap,
    title: 'P3 - EMOÇÃO',
    subtitle: 'Cultive Estados Emocionais Poderosos',
    description: 'Entenda a diferença crucial e aprenda a gerar emoções que impulsionam ação e resultados. Domine a energia que alimenta toda conquista.',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'action',
    icon: Rocket,
    title: 'P4 - AÇÃO',
    subtitle: 'Transforme Energia em Movimento Consistente',
    description: 'O sistema exato para converter estados internos em ações que constroem momentum imparável. Conecte a lacuna entre saber e fazer.',
    color: 'from-orange-500 to-orange-600'
  },
  {
    id: 'result',
    icon: Trophy,
    title: 'P5 - RESULTADO',
    subtitle: 'Materialize Seus Objetivos na Realidade',
    description: 'Alinhe todo seu sistema interno para que resultados extraordinários se tornem inevitáveis. Crie a prosperidade que sempre quis.',
    color: 'from-green-500 to-green-600'
  }
];

interface ProductSectionProps {
  onScrollToPricing: () => void;
}

const ProductSection = ({ onScrollToPricing }: ProductSectionProps) => {
  const [activePillar, setActivePillar] = useState('thought');

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Apresentando: <span className="text-gradient-gold">Fator Essencial</span>
          </h2>
          <p className="text-2xl text-accent font-accent italic mb-6">
            Método 5Ps - O Sistema Completo de Reprogramação Mental
          </p>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Este não é apenas mais um curso longo. É a fórmula exata que conecta seus 
            <span className="text-primary font-semibold"> PENSAMENTOS, SENTIMENTOS, EMOÇÕES, AÇÕES e RESULTADOS</span> 
            em um sistema integrado para transformação acelerada.
          </p>
          <div className="bg-gradient-to-r from-accent/20 to-accent/30 border border-accent/40 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Clock className="w-6 h-6 text-accent" />
              <span className="text-lg font-semibold text-primary">Promessa Central</span>
            </div>
            <p className="text-lg">
              Em apenas <span className="text-accent font-bold">15 minutos por dia</span>, você terá o roadmap completo para reprogramar sua mente e criar a realidade próspera que sempre quis.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo - Showcase do Produto */}
          <div className="scroll-reveal">
            <div className="relative">
              {/* Efeito Holográfico */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-2xl blur-xl animate-pulse" />
              
              <Card className="luxury-card relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                <div className="relative z-10 p-8 text-center">
                  <img 
                    src={productMockup} 
                    alt="Livro Método 5Ps" 
                    className="w-64 h-64 mx-auto mb-6 object-contain animate-float rounded-2xl"
                  />
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    Fator Essencial: Método 5Ps
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    A Descoberta da Mente Próspera
                  </p>
                  
                  {/* Características */}
                  <div className="space-y-3 text-left">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Framework Completo dos 5 Pilares</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Guia de Aplicação Prática</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Exercícios Diários de Reprogramação</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Estudos de Casos Reais</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Lado Direito - 5Ps Interativo */}
          <div className="scroll-reveal">
            <h3 className="font-heading text-3xl font-bold text-primary mb-8 text-center">
              Método 5Ps - Demonstração Interativa
            </h3>
            
            {/* Abas dos Pilares */}
            <div className="flex flex-wrap gap-2 mb-8">
              {pillars.map((pillar) => (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    activePillar === pillar.id
                      ? 'bg-gradient-to-r from-accent-dark to-accent text-accent-foreground shadow-gold'
                      : 'bg-white/50 text-muted-foreground hover:bg-white/70'
                  }`}
                >
                  {pillar.title.split(' - ')[1]}
                </button>
              ))}
            </div>

            {/* Conteúdo do Pilar Ativo */}
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                className={`transition-all duration-500 ${
                  activePillar === pillar.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 absolute pointer-events-none'
                }`}
              >
                <Card className="luxury-card">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center animate-glow`}>
                      <pillar.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading text-2xl font-bold text-primary mb-2">
                        {pillar.title}
                      </h4>
                      <p className="text-accent font-semibold text-lg">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {pillar.description}
                  </p>
                </Card>
              </div>
            ))}

            {/* Visualização da Conexão */}
            <div className="mt-8 text-center">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                {pillars.map((pillar, index) => (
                  <div key={pillar.id} className="flex items-center">
                    <div className={`w-8 h-8 bg-gradient-to-r ${pillar.color} rounded-full flex items-center justify-center`}>
                      <pillar.icon className="w-4 h-4 text-white" />
                    </div>
                    {index < pillars.length - 1 && (
                      <div className="w-4 h-0.5 bg-gradient-to-r from-accent to-primary mx-2" />
                    )}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Todos os 5 pilares trabalham juntos como um sistema integrado
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8 text-center">
              <Button size="lg" className="btn-hero" onClick={onScrollToPricing}>
                <Lock className="w-5 h-5 mr-2" />
                APLICAR O MÉTODO 5PS!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;