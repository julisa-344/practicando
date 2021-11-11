const button = document.querySelector('button');
const dropdown = document.querySelector('.js_dropdown')

button.onclick = function () {
  if (dropdown.getElementsByClassName.display === 'block') {
    this.textContent = 'ABRIR DROPDOWN';
    dropdown.style.display = 'none'
  } else {
    this.textContent = 'CERRAR DROPDOWN'
    dropdown.style.display = 'block'
  }
};

const input = document.querySelector('input[type="text"]');

console.log('input', input);
input.onkeyup = function (){
  console.log ('acaaa', this.value);
};

const inputCheck = document.querySelector('input[type="checkbox"]');
console.log('input', input)

inputCheck.onchange = function () {
  console.log('acaaa', this.ckecked);
};

const form = document.querySelector('form');

form.onsubmit = function (evt) {
  evt.prevetDefault();
  console.log('nombre', this.querySelector('input[placeholder="Nombre"]').value)
  console.log('apellido', this.querySelector('input[placeholder="Apellido"]').value)
}