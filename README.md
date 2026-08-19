# Portfólio — João Victor

Site pessoal em HTML, CSS e JavaScript puros (sem frameworks de build),
usando o [Bootstrap 5](https://getbootstrap.com/) via CDN para a estrutura
responsiva e componentes prontos (menu, modal).

## Estrutura de pastas

```
portfolio/
├── index.html        → Home
├── sobreMim.html      → Sobre Mim
├── formacao.html       → Formação
├── portifolio.html      → Projetos
├── contato.html         → Contato (com formulário em modal)
├── css/
│   └── estilo.css      → Todo o visual do site (cores, tema, componentes)
└── js/
    └── script.js         → Tema claro/escuro + validação do formulário
```

## Como o tema claro/escuro funciona

Todas as cores do site são "variáveis CSS", definidas uma única vez no
topo de `css/estilo.css`. O modo escuro é o padrão. Quando o usuário clica
no botão de tema (🌙/☀️), o `js/script.js` adiciona o atributo
`data-theme="light"` na tag `<html>`, o que troca automaticamente todas as
cores para a versão clara — e salva a escolha no `localStorage`, então o
site lembra da preferência na próxima visita.

**Para mudar uma cor do site inteiro:** edite só a seção de variáveis no
topo do `estilo.css` (parte 1 do arquivo). Não precisa mexer em mais nada.

## Como adicionar uma nova página

1. Copie um arquivo `.html` existente (ex: `formacao.html`) como base.
2. Troque o `<title>` e o conteúdo dentro de `<main>`.
3. Atualize o link ativo na navbar (`class="nav-link active"`) para apontar
   pra nova página.
4. Adicione o link da nova página na navbar de **todas** as outras páginas,
   pra manter a navegação consistente.

## Como adicionar um novo projeto ao Portfólio

Em `portifolio.html`, copie um dos blocos `<div class="col-md-6">...</div>`
inteiro e ajuste o título, as tecnologias (`<span class="tag-tech">`), a
descrição e o link do repositório.

## Navegação: várias páginas, não uma "página única"

Optei por manter o site em páginas HTML separadas (multi-page), em vez de
uma única página com pop-ups simulando navegação. É a abordagem mais
simples de manter para quem está começando: cada página é um arquivo
independente e você pode editar uma sem risco de quebrar as outras. O
único "pop-up" real do site é o formulário de contato, que fica bem no
lugar como um modal.

## Rodando localmente

Não precisa de nenhuma instalação. Basta abrir `index.html` no navegador,
ou usar uma extensão como "Live Server" no VS Code para recarregar
automaticamente a cada alteração.

---

Criado inicialmente para a cadeira de Desenvolvimento Web na Uninter,
reconstruído para uso profissional na divulgação de projetos e contato.
