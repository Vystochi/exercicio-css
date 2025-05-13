document.getElementById('modoClaro').addEventListener('click', () => {
    document.body.classList.remove('escuro');
    document.body.classList.add('claro');
});

document.getElementById('modoEscuro').addEventListener('click', () => {
    document.body.classList.remove('claro');
    document.body.classList.add('escuro');
});