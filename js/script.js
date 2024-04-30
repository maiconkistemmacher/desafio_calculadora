document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var valor = this.value;
            var input = document.querySelector('input').value;
            if (valor === 'limpar') {
                document.querySelector('input').value = '';
            } else if (valor === '=') {
                document.querySelector('input').value = eval(input);
            } else {
                document.querySelector('input').value = input + valor;
            }
        });
    });
});