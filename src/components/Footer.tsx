const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Copyright */}
          <div className="mb-4">
            <p className="text-lg font-semibold text-accent">
              © 2024 Fator Essencial Método 5Ps
            </p>
            <p className="text-sm text-slate-400 mt-1">
              Todos os direitos reservados.
            </p>
          </div>
          
          {/* Disclaimer */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-slate-500 leading-relaxed">
              <strong>Aviso Legal:</strong> Este site não é afiliado ao Facebook, Instagram, Google, YouTube ou qualquer outra rede social ou plataforma digital. 
              Após você deixar o Facebook ou qualquer outra plataforma, a responsabilidade não é mais deles e sim do nosso site. 
              Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais. 
              Nós não vendemos o seu e-mail ou qualquer informação para terceiros. Nunca fazemos nenhum tipo de spam. 
              Se você tiver alguma dúvida, sinta-se à vontade para usar o link de contato e falar conosco em horário comercial de Segunda a Sextas das 09h00 às 18h00. 
              Lemos e respondemos todas as mensagens por ordem de chegada.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;