import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { X, Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Mostrar o popup após 2 segundos para não interferir no carregamento
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-slide-up">
      <div className="bg-white/95 backdrop-blur-lg border border-gray-200 rounded-xl shadow-2xl p-6 relative">
        {/* Close button */}
        <button
          onClick={declineCookies}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Cookie icon */}
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
            <Cookie className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 text-sm mb-2">
              Cookies e Privacidade
            </h3>
            <p className="text-gray-600 text-xs leading-relaxed">
              Utilizamos cookies para melhorar sua experiência, personalizar conteúdo e analisar nosso tráfego. 
              Seus dados estão seguros conosco.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button
            onClick={acceptCookies}
            size="sm"
            className="bg-accent hover:bg-accent/90 text-white text-xs px-4 py-2 flex-1"
          >
            Aceitar
          </Button>
          <Button
            onClick={declineCookies}
            variant="outline"
            size="sm"
            className="text-gray-600 border-gray-300 hover:bg-gray-50 text-xs px-4 py-2"
          >
            Recusar
          </Button>
        </div>

        {/* Privacy link */}
        <p className="text-xs text-gray-500 mt-3 text-center">
          Ao continuar, você concorda com nossa política de privacidade.
        </p>
      </div>
    </div>
  );
};

export default CookieConsent;