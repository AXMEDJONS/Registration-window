AOS.init();
let doc = document

let login__button = doc.querySelector('.login__button')
let container = doc.querySelector('.container')
let container__close = doc.querySelector('.close__button')
let form = doc.querySelector('.form__registration')

login__button.addEventListener('click', () => {
    container.classList.toggle('container__not__active')
    login__button.classList.toggle('container__not__active')
})

container__close.addEventListener('click', () => {
    container.classList.toggle('container__not__active')
    login__button.classList.toggle('container__not__active')
})

let form__registration = doc.forms.form__registration
let input__name = form__registration.elements.name
let input__surname = form__registration.elements.surname
let input__city = form__registration.elements.city
let input__email = form__registration.elements.email
let input__create__password = form__registration.elements.create__password
let input__confirm__password = form__registration.elements.confirm__password
let input__checkbox = form__registration.elements.checkbox

let btn = doc.querySelector('.button__submit')

form__registration.addEventListener('submit',(event)=>{
    event.preventDefault()
    let obj = {
        name: input__name.value,
        surname: input__surname.value,
        city: input__city.value,
        email: input__email.value,
        create__password: input__create__password.value,
        confirm__password: input__confirm__password.value,
        remember: input__checkbox.checked,
    }
    console.log(obj);
    input__name.value = ''
    input__surname.value = ''
    input__city.value = ''
    input__email.value = ''
    input__create__password.value = ''
    input__confirm__password.value = ''
    input__checkbox.checked = 'false'
})