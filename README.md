# ARF Solar & Climatização

Aplicação web institucional moderna da **ARF Solar**, desenvolvida em **Next.js** com estilização premium em **Tailwind CSS**. O site apresenta as soluções de climatização técnica e energia solar fotovoltaica oferecidas pela empresa fundada em 2006.

---

## 🚀 Tecnologias Utilizadas

* **Framework**: Next.js (App Router)
* **Estilização**: Tailwind CSS (visual premium, responsivo e adaptado para dispositivos móveis)
* **Ícones**: Lucide React
* **Integração de Formulários**: Web3Forms (envio de e-mails em tempo real sem necessidade de backend)

---

## 🛠️ Funcionalidades Principais

1. **Página Inicial (Home)**:
   * Carrossel de destaque com 9 slides e controle de tempo reativo (reinicia o contador ao passar manualmente).
   * 7 seções com fotos e descrições detalhadas cobrindo painéis solares, produção própria, sustentabilidade, valorização, e sistemas residenciais/estacionamento/industriais.
2. **Página Institucional (Empresa)**:
   * Trajetória histórica detalhando a fundação em 2006 (ar-condicionado) e expansão em 2017 (energia solar).
   * Apresentação das facilidades de financiamento pelo Banco Santander (em até 60x com carência de 6 meses) e estimativa de payback de 5 anos com 20 anos de energia gratuita.
   * Vídeo institucional em formato vertical adaptado para dispositivos móveis.
3. **Página de Energia Solar**:
   * Abas informativas detalhando sistemas residenciais, industriais, estacionamentos (Carport) e agronegócio.
   * Aba explicativa com infográfico do fluxo de geração de 5 passos e vantagens do sistema.
   * **Circuito de Energia Animado**: Fluxo interativo em tempo real via SVG/CSS que ilustra a conversão de energia CC em CA e créditos de energia.
4. **Página de Ar Condicionado (Instalação e Infraestrutura)**:
   * Detalhamento de serviços sob medida e galerias com carrossel dinâmico dos projetos executados e furos técnicos.
5. **Simulador Fotovoltaico**:
   * Slider interativo para cálculo sob demanda da quantidade de painéis, potência e economia anual/25 anos.
   * **Payback Financeiro**: Demonstração passo a passo da fórmula matemática padrão:
     $$\text{Payback (em anos)} = \frac{\text{Valor do Investimento}}{\text{Economia Anual Total}}$$
6. **Formulários de Contato Integrados**:
   * Formulários na página de Contato e Energia Solar conectados ao **Web3Forms** via variável de ambiente, com fallback de simulação local automática para testes ágeis sem chaves de API.

---

## 📦 Como Rodar o Projeto Localmente

### Pré-requisitos
Certifique-se de ter o **Node.js** instalado em seu computador.

### Passos
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Crie ou configure o arquivo `.env.local` na raiz do projeto contendo a sua chave de e-mail do Web3Forms:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=a79361ff-f974-4c22-bab0-7d1015f391c2
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Abra o navegador em `http://localhost:3000`.

### Geração de Build de Produção
Para compilar a aplicação otimizada para publicação:
```bash
npm run build
```

---

## ✉️ Canais de Atendimento

* **WhatsApp**: [(11) 94776-9974](https://wa.me/5511947769974)
* **E-mail**: [contato@arfsolar.com.br](mailto:contato@arfsolar.com.br)
* **Endereço**: Rua Manoel Rodrigues, 16 - Vila Monte Santo, São Paulo - SP - CEP 08062-015
