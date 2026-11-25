# Wild Stories — Image Slider

Aplicação React + Vite + Tailwind CSS que apresenta um slider de imagens da vida
selvagem com dados, navegação, internacionalização (PT/EN/ES) e tema claro/escuro.

## Funcionalidades

- Slider de 5 imagens com navegação (anterior/próxima), teclado (←/→) e contador.
- Exibição dinâmica de título, descrição, local e texto alternativo por slide.
- Internacionalização com `i18next` (Português, English, Español) e seletor de idioma.
- Tema claro/escuro com persistência e detecção da preferência do sistema.
- Layout responsivo e acessível (foco visível, `aria-live`, `aria-roledescription`).

## Como executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Estrutura principal

```
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   ├── Background.jsx
│   ├── ImageSlider.jsx
│   ├── LanguageSwitcher.jsx
│   ├── SliderControls.jsx
│   └── ThemeSwitcher.jsx
├── data/slides.js
├── hooks/useTheme.js
└── i18n/
    ├── index.js
    └── locales/{pt,en,es}.js
```

## Limitações

- A referência do Notion informada não pôde ser acessada (erro 429/indisponível).
  O conteúdo (imagens e textos) foi baseado nos arquivos locais do projeto.
- Nenhuma API, banco de dados ou serviço externo é utilizado.
