const form = document.querySelector("#Pagamentos")

const handleSubimit = (event) => {
    event.preventDefault();
    alert("Pagamento efetuado com sucesso!");
    window.location = "../paginas/menu.html";
}
form.addEventListener('submit', handleSubimit);
