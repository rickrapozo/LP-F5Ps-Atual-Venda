import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Crown, Gift, Users, BookOpen, Video, MessageCircle } from 'lucide-react';
const plans = [{
  name: "Plano Essencial",
  originalPrice: 89.00,
  currentPrice: 9.99,
  discount: 90,
  description: "Perfeito para começar com o Método 5Ps",
  features: ["Método 5Ps Completo", "Guia de Aplicação Prática", "Exercícios de Reprogramação", "Garantia de 7 Dias ou Seu Dinheiro de Volta"],
  cta: "INICIAR MINHA TRANSFORMAÇÃO",
  popular: false
}, {
  name: "Plano Acelerador",
  originalPrice: 379.00,
  currentPrice: 27.99,
  discount: 93,
  description: "Tudo que você precisa para transformação rápida",
  features: ["TUDO do Plano Essencial +", "Bônus: MasterClass 'Neurociência das Emoções e Sentimentos ' (R$ 189)", "Bônus: Kit Biblioteca Premium '+ de 50 Títulos Para Seu Desenvolvimento PDFs' (R$ 139)", "Bônus: Acesso a 2 Cursos 'Analise Corporal e Neurociência da Lei da Atração'  (R$ 189)", "Bônus: Comunidade VIP Exclusiva (R$ 139/mês – 3 meses grátis)"],
  bonusValue: 569,
  totalSavings: 450.01,
  cta: "ACELERAR MINHA TRANSFORMAÇÃO",
  popular: true
}];
interface PricingSectionProps {
  id?: string;
  onEssentialPlanClick: () => void;
  onAcceleratorPlanClick: () => void;
}

const PricingSection = ({ id, onEssentialPlanClick, onAcceleratorPlanClick }: PricingSectionProps) => {
  return <section id={id} className="py-20 bg-gradient-to-br from-background to-secondary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Seu Investimento em uma
            <span className="text-gradient-gold"> Mente Próspera</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Escolha o caminho que sente certo para sua jornada de transformação
          </p>
          
          {/* Banner de Urgência */}
          <div className="bg-gradient-to-r from-destructive/10 to-destructive/20 border border-destructive/30 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-destructive font-semibold">
              ⚡ Tempo Limitado: Apenas 153 vagas com desconto restantes
            </p>
          </div>
        </div>

        {/* Cards de Preços */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => <Card key={index} className={`luxury-card relative overflow-hidden transform hover:scale-105 transition-all duration-300 scroll-reveal ${plan.popular ? 'ring-2 ring-accent shadow-gold' : ''}`} style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Badge Popular */}
              {plan.popular && <div className="absolute top-0 right-0 bg-gradient-to-r from-accent-dark to-accent text-accent-foreground px-4 py-2 rounded-bl-lg">
                  <div className="flex items-center gap-2">
                    <Crown className="w-4 h-4" />
                    <span className="font-bold text-sm">MAIS VENDIDO</span>
                  </div>
                </div>}

              <div className="p-8">
                {/* Cabeçalho do Plano */}
                <div className="text-center mb-8">
                  <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {plan.description}
                  </p>

                  {/* Preço */}
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl text-muted-foreground line-through">
                        R$ {plan.originalPrice.toFixed(2)}
                      </span>
                      <Badge variant="destructive">
                        {plan.discount}% OFF
                      </Badge>
                    </div>
                    <div className="text-5xl font-bold text-gradient-gold mb-2">
                      R$ {plan.currentPrice.toFixed(2)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Pagamento único • Acesso imediato
                    </p>
                  </div>

                  {/* Economia */}
                  {plan.totalSavings && <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 mb-6">
                      <p className="text-accent font-semibold">
                        Você economiza R$ {plan.totalSavings}!
                      </p>
                    </div>}
                </div>

                {/* Características */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className={`${feature.includes('EVERYTHING') || feature.includes('Bonus') ? 'font-semibold' : ''}`}>
                        {feature}
                      </span>
                    </div>)}
                </div>

                {/* Valor dos Bônus */}
                {plan.bonusValue && <div className="bg-gradient-to-r from-accent/10 to-accent/20 border border-accent/30 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Gift className="w-5 h-5 text-accent" />
                      <span className="font-semibold text-accent">BÔNUS EXCLUSIVOS</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Valor Total dos Bônus: <span className="text-accent font-bold">R$ {plan.bonusValue}</span>
                    </p>
                  </div>}

                {/* CTA Button */}
                <Button 
                  size="lg" 
                  className={`w-full ${plan.popular ? 'btn-hero animate-glow' : 'btn-luxury'}`}
                  onClick={plan.popular ? onAcceleratorPlanClick : onEssentialPlanClick}
                >
                  {plan.cta}
                </Button>

                {/* Garantia */}
                <div className="text-center mt-4">
                  <p className="text-sm text-muted-foreground">
                    🛡️ Garantia de 7 Dias ou Seu Dinheiro de Volta
                  </p>
                </div>
              </div>
            </Card>)}
        </div>

        {/* Detalhes dos Bônus */}
        <div className="mt-16 scroll-reveal">
          <h3 className="font-heading text-3xl font-bold text-center text-primary mb-12">
            Plano Acelerador <span className="text-gradient-gold">Bônus Exclusivos</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="luxury-card text-center p-6">
              <Video className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">MasterClass</h4>
              <p className="text-sm text-muted-foreground mb-2">Neurociência dos Sentimentos e Emoções</p>
              <p className="text-accent font-bold">R$ 189 de Valor</p>
            </Card>

            <Card className="luxury-card text-center p-6">
              <BookOpen className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">Biblioteca Premium</h4>
              <p className="text-sm text-muted-foreground mb-2">Os Melhores títulos do Desenvolvimento Pessoal em PDF para Levar Onde Quiser.</p>
              <p className="text-accent font-bold">R$ 139 de Valor</p>
            </Card>

            <Card className="luxury-card text-center p-6">
              <Video className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">Cursos Gravados</h4>
              <p className="text-sm text-muted-foreground mb-2">2 Programas Completos</p>
              <p className="text-accent font-bold">R$ 189 de Valor</p>
            </Card>

            <Card className="luxury-card text-center p-6">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h4 className="font-semibold text-primary mb-2">Comunidade VIP</h4>
              <p className="text-sm text-muted-foreground mb-2">3 Meses de Acesso Grátis</p>
              <p className="text-accent font-bold">R$ 417 de Valor</p>
            </Card>
          </div>
        </div>

        {/* Prova Social */}
        <div className="mt-16 text-center scroll-reveal">
          <p className="text-lg text-muted-foreground mb-4">
            Junte-se às <span className="text-accent font-bold">847 pessoas</span> que garantiram sua transformação hoje
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-muted-foreground">
            <span>✓ Download Instantâneo</span>
            <span>✓ Pagamento Seguro</span>
            <span>✓ Garantia de Reembolso</span>
          </div>
        </div>
      </div>
    </section>;
};
export default PricingSection;