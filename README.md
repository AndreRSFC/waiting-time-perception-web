# Waiting Time Perception Web

Este repositório contém a aplicação web **Waiting Time Perception Web**, que faz parte do meu **Trabalho de Conclusão de Curso (TCC)**. O objetivo deste projeto é investigar e entender melhor a percepção de tempo pelos usuários, com base nas diferentes formas de carregamento de tela.

A aplicação permite experimentar diferentes tipos de carregamento (como spinners, barras de progresso, skeleton loaders) para analisar como cada forma de feedback impacta a experiência do usuário em termos de percepção de tempo.

---

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build e desenvolvimento rápido para projetos front-end.
- **Styled Components**: Biblioteca para estilização de componentes React utilizando CSS-in-JS.
- **Vitest**: Framework de testes para JavaScript com foco em performance e simplicidade.
- **Biome**: Ferramenta de linting e formatação de código.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática ao código.

---

## Ferramentas Adicionais

### Lefthook

O **Lefthook** é utilizado para facilitar a execução de hooks Git, como pre-commit e pre-push, para garantir que o código esteja sempre em conformidade com as melhores práticas antes de ser enviado para o repositório. Ele ajuda a automatizar o processo de verificação e formatação de código.

#### Como o Lefthook é utilizado:

- **Pre-commit Hook**: Antes de cada commit, o Lefthook executa o linting e formatação do código com o **Biome**.
- **Pre-push Hook**: Antes de cada push, o Lefthook executa os testes com o **Vitest** para garantir que todas as funcionalidades estejam funcionando corretamente.

Essa automação garante que o código esteja sempre limpo e funcionando, sem a necessidade de intervenção manual.

---

## Como Rodar o Projeto

### Pré-requisitos

Certifique-se de ter o **Node.js** instalado em sua máquina. Se não tiver, você pode baixá-lo [aqui](https://nodejs.org/).

### Instalação

1. Clone este repositório:

```bash
  git clone https://github.com/seu-usuario/waiting-time-perception-web.git
```

2. Navegue até o diretório do projeto:

```bash
cd waiting-time-perception-web
```

3. Instale as dependências:

```bash
  npm install
```

### Scripts

- **`npm run dev`**: Inicia o servidor de desenvolvimento com Vite.
- **`npm run build`**: Gera a build de produção, compilando o TypeScript e construindo os arquivos estáticos.
- **`npm run preview`**: Visualiza a build de produção gerada localmente.
- **`npm run test`**: Executa os testes utilizando o Vitest.
- **`npm run lint`**: Executa o linting no código com o Biome.

---

## Funcionalidades

- **Carregamento Dinâmico**: Diferentes tipos de carregamento são exibidos com base em condições pré-definidas, permitindo simular diferentes formas de feedback para o usuário.
- **Análise de Percepção de Tempo**: A aplicação foi projetada para coletar dados e realizar análises sobre como os diferentes tipos de carregamento impactam a percepção de tempo pelo usuário.

---

## Contribuições

Este projeto faz parte de um estudo acadêmico, e por enquanto, não está aberto para contribuições externas. No entanto, sugestões e feedbacks são sempre bem-vindos!

---

## Licença

Este projeto é de uso exclusivo para o Trabalho de Conclusão de Curso (TCC), e não possui uma licença pública. A utilização do código ou partes dele deve ser realizada com permissão expressa.

---


Desenvolvido por André Simões - Trabalho de Conclusão de Curso
