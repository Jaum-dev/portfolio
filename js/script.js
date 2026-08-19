/* ==========================================================================
   SCRIPT.JS
   Duas responsabilidades, bem separadas:
   1) Tema claro/escuro (com "memória": o site lembra sua escolha)
   2) Validação do formulário de contato

   Obs: o menu mobile (hamburguer) e o modal de contato agora são
   controlados pelo próprio Bootstrap via atributos "data-bs-*" no HTML,
   então você não vai ver código para eles aqui — é uma das vantagens
   de usar um framework para esses componentes prontos.
   ========================================================================== */


/* --------------------------------------------------------------------
   1) TEMA CLARO / ESCURO
   --------------------------------------------------------------------
   Como funciona:
   - Guardamos a escolha do usuário em localStorage (um "cofre" que o
     navegador mantém salvo mesmo depois de fechar a aba).
   - A cor de cada tema já está pronta no estilo.css, em [data-theme="light"].
     Aqui no JS a gente só ADICIONA ou REMOVE esse atributo na tag <html>.
   - Se o usuário nunca escolheu nada, o padrão é o modo escuro.
   -------------------------------------------------------------------- */

const CHAVE_TEMA = "portfolio-tema"; // nome usado para salvar no localStorage
const html = document.documentElement; // é a tag <html>
const botaoTema = document.getElementById("btn-tema");

function aplicarTema(tema) {
  if (tema === "light") {
    html.setAttribute("data-theme", "light");
    botaoTema.textContent = "☀️";
    botaoTema.setAttribute("aria-label", "Mudar para modo escuro");
  } else {
    html.removeAttribute("data-theme"); // sem o atributo = modo escuro (padrão)
    botaoTema.textContent = "🌙";
    botaoTema.setAttribute("aria-label", "Mudar para modo claro");
  }
}

// Ao carregar a página: usa o tema salvo, ou "dark" se for a 1ª visita
const temaSalvo = localStorage.getItem(CHAVE_TEMA) || "dark";
aplicarTema(temaSalvo);

// Ao clicar no botão: inverte o tema atual e salva a escolha
botaoTema.addEventListener("click", () => {
  const temaAtual = html.getAttribute("data-theme") === "light" ? "light" : "dark";
  const novoTema = temaAtual === "light" ? "dark" : "light";
  aplicarTema(novoTema);
  localStorage.setItem(CHAVE_TEMA, novoTema);
});


/* --------------------------------------------------------------------
   2) VALIDAÇÃO DO FORMULÁRIO DE CONTATO
   --------------------------------------------------------------------
   Este bloco só existe (o form-contato) na página contato.html, então
   verificamos se o formulário existe antes de mexer nele — assim o
   mesmo script.js pode ser usado em todas as páginas sem dar erro.
   -------------------------------------------------------------------- */

const formContato = document.getElementById("form-contato");

if (formContato) {
  formContato.addEventListener("submit", (evento) => {
    evento.preventDefault(); // impede o recarregamento da página

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nome === "" || email === "" || mensagem === "") {
      alert("⚠️ Preencha todos os campos antes de enviar.");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("⚠️ Insira um e-mail válido (ex: usuario@dominio.com).");
      return;
    }

    // Aqui é onde, no futuro, você poderia enviar os dados para um
    // backend de verdade (ex: uma API sua, ou um serviço como o
    // Formspree). Por enquanto, é só uma simulação:
    console.log("Dados do formulário:", { nome, email, mensagem });
    alert(`✅ Sucesso, ${nome}! Sua mensagem foi enviada.`);

    formContato.reset();

    // Fecha o modal do Bootstrap por código, já que o envio não é
    // um clique no botão de fechar (X) do modal.
    const modalEl = document.getElementById("modal-contato");
    const instanciaModal = bootstrap.Modal.getInstance(modalEl);
    if (instanciaModal) instanciaModal.hide();
  });
}
