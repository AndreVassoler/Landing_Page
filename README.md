# WisePark Landing Page

Landing page moderna para o sistema de gestão de estacionamentos WisePark.

## 🚀 Deploy no Railway

### Pré-requisitos

- Conta no [Railway](https://railway.app)
- Repositório Git configurado

### Passos para Deploy

1. **Conecte seu repositório ao Railway:**

   - Acesse [railway.app](https://railway.app)
   - Clique em "New Project"
   - Selecione "Deploy from GitHub repo"
   - Escolha este repositório

2. **Configure as variáveis de ambiente (opcional):**

   - O Railway detectará automaticamente que é um projeto Node.js
   - As variáveis de ambiente podem ser configuradas no painel do Railway

3. **Deploy automático:**
   - O Railway fará o build automaticamente usando o Dockerfile
   - O site estará disponível em uma URL do Railway

### Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Header com navegação
│   ├── Hero.tsx        # Seção principal
│   ├── Features.tsx    # Recursos do produto
│   ├── Benefits.tsx    # Benefícios
│   ├── Testimonials.tsx # Depoimentos
│   ├── Pricing.tsx     # Planos
│   ├── CTA.tsx         # Call to Action
│   └── Footer.tsx      # Rodapé
├── pages/              # Páginas
└── App.tsx             # Componente principal
```

### Tecnologias Utilizadas

- **React 19** - Framework principal
- **TypeScript** - Tipagem estática
- **Chakra UI** - Biblioteca de componentes
- **Lucide React** - Ícones
- **React Router** - Roteamento
- **Framer Motion** - Animações

### Paleta de Cores

- **Primary**: `#43B7A0` (Teal)
- **Secondary**: `#45A2B0` (Teal azulado)

### Scripts Disponíveis

- `yarn start` - Inicia o servidor de desenvolvimento
- `yarn build` - Gera build de produção
- `yarn test` - Executa testes
- `yarn eject` - Ejecta configurações do Create React App

### Deploy Local com Docker

```bash
# Build da imagem
docker build -t wisepark-landing .

# Executar container
docker run -p 3000:3000 wisepark-landing
```

O site estará disponível em `http://localhost:3000`
