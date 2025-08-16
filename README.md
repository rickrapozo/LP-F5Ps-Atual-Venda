# Fator Essencial - Landing Page do Método 5Ps

Landing page de vendas para o produto "Fator Essencial - Método 5Ps" com design premium e funcionalidades avançadas de conversão.

## 🚀 Tecnologias Utilizadas

- **React 18** + **TypeScript**
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **shadcn/ui** - Componentes
- **React Router DOM** - Navegação
- **React Query** - Gerenciamento de estado

## 📋 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**

## 🛠️ Instalação e Execução

### 1. Clone o repositório
```bash
git clone https://github.com/rickrapozo/LP-F5Ps-Atual-Venda.git
cd LP-F5Ps-Atual-Venda
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute o servidor de desenvolvimento
```bash
npm run dev
```

### 4. Acesse a aplicação
Abra [http://localhost:8080](http://localhost:8080) no seu navegador.

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter

## 🐛 Solução de Problemas

### Erro de importação de imagens
Se você encontrar erros como:
```
Failed to resolve import "@/assets/product-mockup.jpg"
```

**Solução**: Os imports de imagens foram corrigidos para usar caminhos relativos. Se o problema persistir:

1. Verifique se os arquivos existem em `src/assets/`
2. Limpe o cache: `npm run dev -- --force`
3. Reinstale as dependências: `rm -rf node_modules && npm install`

### Erro de dependências
Se houver problemas com dependências:

```bash
# Limpe o cache do npm
npm cache clean --force

# Remova node_modules e reinstale
rm -rf node_modules package-lock.json
npm install
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   ├── HeroSection.tsx
│   ├── PricingSection.tsx
│   └── ...
├── assets/             # Imagens e recursos
├── pages/              # Páginas da aplicação
├── hooks/              # Custom hooks
├── lib/                # Utilitários
└── index.css           # Estilos globais
```

## 🎯 Funcionalidades

- ✅ Landing page responsiva
- ✅ Tags de rastreamento (GTM, UTMify)
- ✅ Links dos planos configurados
- ✅ Animações e efeitos visuais
- ✅ Scroll suave entre seções
- ✅ Timer de contagem regressiva
- ✅ Contador de visitantes

## 🔗 Links dos Planos

- **Plano Essencial**: https://imperdivel.fator5ps.shop
- **Plano Acelerador**: https://pay.cakto.com.br/sregdp8

## 📞 Suporte

Para problemas técnicos, abra uma issue no repositório ou entre em contato.
