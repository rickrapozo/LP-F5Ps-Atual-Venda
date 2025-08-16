import { Star, CheckCircle, TrendingUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

const testimonials = [
  {
    name: "Sarah Johnson",
    result: "Aumentou renda em 150%",
    text: "Em apenas 30 dias, o Método 5Ps transformou completamente minha mentalidade. Passei da constante dúvida para uma confiança inabalável.",
    avatar: "SJ",
    verified: true
  },
  {
    name: "Michael Chen", 
    result: "Abriu 2 empresas",
    text: "A clareza mental que obtive é incrível. Finalmente parei de procrastinar e transformei minhas ideias em realidade.",
    avatar: "MC",
    verified: true
  },
  {
    name: "Emma Rodriguez",
    result: "Perdeu 20kg e foi promovida",
    text: "Este método me ajudou a entender a conexão entre meus pensamentos e ações. Tudo mudou quando minha mente mudou.",
    avatar: "ER",
    verified: true
  },
  {
    name: "David Thompson",
    result: "Quitou R$ 250mil em dívidas",
    text: "Descobri as crenças limitantes que me mantinham preso financeiramente. Os 5Ps me deram o framework exato para reprogramar minha mentalidade de prosperidade.",
    avatar: "DT",
    verified: true
  }
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent transform rotate-12 scale-150" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
            Junte-se a Mais de <span className="text-gradient-gold">10.000 Pessoas</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Que Já Descobriram o Fator Essencial
          </p>
          
          {/* Estatísticas */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-gold">10.847</div>
              <div className="text-sm text-muted-foreground">Transformações</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-gold">98,2%</div>
              <div className="text-sm text-muted-foreground">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-gold">4,9/5</div>
              <div className="text-sm text-muted-foreground flex items-center gap-1">
                <Star className="w-4 h-4 fill-accent text-accent" />
                Avaliação
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="luxury-card hover:shadow-gold scroll-reveal p-6"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Texto do Depoimento */}
              <p className="text-card-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Badge de Resultado */}
              <div className="bg-gradient-to-r from-accent/10 to-accent/20 border border-accent/30 rounded-lg p-3 mb-4">
                <div className="flex items-center gap-2 text-accent font-semibold">
                  <TrendingUp className="w-4 h-4" />
                  {testimonial.result}
                </div>
              </div>

              {/* Autor */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-card-foreground">{testimonial.name}</span>
                    {testimonial.verified && (
                      <CheckCircle className="w-4 h-4 text-accent" />
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">Cliente Verificado</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Inferior */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-lg text-muted-foreground mb-6">
            Pronto para se juntar a milhares de pessoas que transformaram suas vidas?
          </p>
          <div className="flex justify-center gap-4">
            <div className="glass-card px-6 py-3">
              <span className="text-accent font-bold">153</span> vagas restantes neste preço
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;