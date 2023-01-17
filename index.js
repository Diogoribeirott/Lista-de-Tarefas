//evento do click do botao
let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", (ev) => {
  ev.preventDefault();
  addtask();
});

// verifica se tem tarefa e cria uma li
function addtask() {
  const inputtop = document.querySelector(".inputtop");

  if (inputtop) {
    const ul = document.getElementById("ul");
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = inputtop.value;
    const div = document.createElement("div");
    div.classList = "buttonopcao";
    const button = document.createElement("button");
    button.innerHTML = '<ion-icon name="checkmark-outline"></ion-icon>';
    button.setAttribute("onclick", "feito()");
    const button2 = document.createElement("button");
    button2.innerHTML = '<ion-icon name="close-outline"></ion-icon>';

    div.append(button, button2);
    li.append(span, div);
    ul.appendChild(li);
  } else {
    alert("Erro digite uma tarefa");
  }
  inputtop.focus();
  inputtop.value = "";
}

function feito() {}
