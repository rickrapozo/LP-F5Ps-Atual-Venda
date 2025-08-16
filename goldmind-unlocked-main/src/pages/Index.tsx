import { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import SocialProofSection from '@/components/SocialProofSection';
import PainPointSection from '@/components/PainPointSection';
import ProductSection from '@/components/ProductSection';
import PricingSection from '@/components/PricingSection';
import FinalUrgencySection from '@/components/FinalUrgencySection';

// Função para scroll suave até a seção de preços
const scrollToPricing = () => {
  const pricingSection = document.getElementById('pricing-section');
  if (pricingSection) {
    pricingSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Função para abrir link do plano essencial
const openEssentialPlan = () => {
  window.open('https://imperdivel.fator5ps.shop', '_blank');
};

// Função para abrir link do plano acelerador
const openAcceleratorPlan = () => {
  window.open('https://pay.cakto.com.br/sregdp8', '_blank');
};

const Index = () => {
  // Scroll reveal animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.scroll-reveal');
    elementsToReveal.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection onScrollToPricing={scrollToPricing} />
      <SocialProofSection />
      <PainPointSection onScrollToPricing={scrollToPricing} />
      <ProductSection onScrollToPricing={scrollToPricing} />
      <PricingSection 
        id="pricing-section"
        onEssentialPlanClick={openEssentialPlan}
        onAcceleratorPlanClick={openAcceleratorPlan}
      />
      <FinalUrgencySection onScrollToPricing={scrollToPricing} />
    </div>
  );
};

export default Index;
