# 🌍 Way Beyond — Viagens com Propósito

> *"Menos pressa. Mais presença."*

O **Way Beyond** é uma aplicação web minimalista e imersiva focada em turismo de contemplação e roteiros desenhados com calma, profundidade e um novo olhar sobre o mundo.

---

## ✨ Funcionalidades Principais

* **Modo Escuro / Claro (Dark/Light Mode):** Sistema dinâmico de alternância de tema com persistência de preferência utilizando o `localStorage`.
* **Logótipo Adaptativo:** O logótipo e o favicon alternam automaticamente entre a versão clara e a versão escura (`logo-way-beyond-favicon.png` e `logo-way-beyond-transparent-faviconb.png`) com base no tema ativo.
* **Curadoria & Pesquisa de Destinos:** Renderização dinâmica dos cartões de destinos a partir de um módulo de dados estruturado, acompanhado de sistema de busca interativo.
* **Design Responsivo:** Layout adaptável para dispositivos móveis e desktop, equipado com menu hambúrguer.
* **Código Hardened (Defensivo):** Estrutura blindada com salvaguardas no DOM, tratamento de exceções com `try-catch` e fallbacks automáticos para prevenir erros de execução.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando tecnologias nativas e modernas, sem dependências de frameworks pesados:

* **HTML5 Semantic** (Estruturação de páginas)
* **CSS3 Custom Properties / Variáveis** (Estilização modular e temas)
* **Vanilla JavaScript (ES6+)** (Lógica de interatividade, busca e manipulação de estado)
* **Google Fonts & Material Symbols** (Tipografia *Plus Jakarta Sans* e ícones)
* **Cloudflare Pages** (Hospedagem estática e CDN global de alta performance)

---

## 📁 Estrutura de Ficheiros

```text
way-beyond/
├── index.html                  # Página Inicial
├── destinos.html               # Página de Listagem e Busca de Destinos
├── contato.html                # Página de Contato
├── logo-way-beyond-favicon.png # Logótipo (Modo Claro)
├── logo-way-beyond-transparent-faviconb.png # Logótipo (Modo Escuro)
├── README.md                   # Documentação do Projeto
└── assets/
    ├── css/
    │   ├── base.css            # Variáveis globais e resets
    │   ├── components.css      # Componentes (Header, Cards, Footer, Dark Mode)
    │   └── pages.css           # Estilos específicos de páginas
    ├── images/
    │   ├── cerejeira.jpg       # Imagem do Hero
    │   └── destinos/           # Imagens dos destinos
    └── js/
        ├── busca.js            # Lógica de pesquisa e filtragem
        ├── contato.js          # Validações do formulário de contato
        ├── destinos-data.js    # Base de dados estática dos destinos
        └── main.js             # Lógica principal, menu mobile e tema