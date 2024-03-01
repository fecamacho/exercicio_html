const form = document.getElementById('form-valido');



form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);
    
    if (!isNaN(numeroA) && !isNaN(numeroB)) {

        if (numeroB > numeroA) {
            alert('Formulário válido');
        } else {
            alert('Formulário inválido');
        }
    } 

    
});

console.log(form);