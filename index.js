let p = document.getElementById(`lox`);
let button = document.getElementById(`btn`);

let a = 'ТЫ ЛОХ'

button.addEventListener(`click`, () => {
    p.innerHTML = a;
})