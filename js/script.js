AOS.init();
let doc = document

// let form_reg = doc.forms.form_reg // Обращаемся к форме через атрибут "name" в нашем случае name="form_reg"

// console.log(form_reg);
// let pas = form_reg.elements.pass // Обращаемся к инпуту через атрибут "name" в нашем случае name="pass"
// let radio = form_reg.elements.rad // Обращаемся к инпуту через атрибут "name" в нашем случае name="rad"

// let text = form_reg.elements.txt // Обращаемся к инпуту через атрибут "name" в нашем случае name="txt"

// let txt = doc.querySelector('.content')

// console.log(pas, radio, text);
// console.log(pas.value); // Проверяем что есть внутри ключа 'value'
// console.log(radio.checked); // Проверяем что есть внутри ключа 'checked'

// let btn = doc.querySelector('.btn')

// form_reg.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     let obj = {
//         name: text.value,
//         pass: pas.value,
//         ismarried: radio.checked,
//     }
//     console.log(obj);
//     text.value = ''
// })

// text.addEventListener('focus', ()=>{
//     doc.body.style.backgroundColor = 'red'
//     text.style.outlineColor = 'blue'
// })


// text.addEventListener('blur', () => {
//     doc.body.style.backgroundColor = 'white'
//     text.style.borderColor = 'blue'
// })

// text.addEventListener('input', () => {
//     txt.innerHTML = text.value
// })













// console.log(pas.value, radio.checked);
// let form = doc.querySelector('form')
// let input = form.elements.namedItem('radio')

// console.log(form, input);

// form_reg.addEventListener('submit', ()=>{
//     event.preventDefault()
//     let obj = {
//         name:  
//     }
// })









// const names = document.querySelectorAll('.name');
// names.forEach(name => {
//     // Обработчик начала перетаскивания
//     name.addEventListener('dragstart', dragStart);
//     // Обработчик окончания перетаскивания
//     name.addEventListener('dragend', dragEnd);
//     // Обработчик события "бросания" элемента
//     name.addEventListener('dragover', dragOver);
//     // Обработчик события "отпускания" элемента
//     name.addEventListener('drop', dragDrop);
// });





// let dragElement;
// function dragStart(event) {
//     // Сохраняем элемент, который начали перетаскивать
//     dragElement = event.target;
//     // Добавляем класс для стилизации элемента при перетаскивании
//     dragElement.classList.add('dragging');
// }
// function dragEnd(event) {
//     // Удаляем класс для стилизации элемента
//     dragElement.classList.remove('dragging');
// }
// function dragOver(event) {
//     // Отменяем стандартное поведение браузера для "бросания" элемента
//     event.preventDefault();
//     // Добавляем класс для стилизации области, куда можно бросить элемент
//     event.target.classList.add('drag-over');
// }
// function dragDrop(event) {
//     // Отменяем стандартное поведение браузера для "бросания" элемента
//     event.preventDefault();
//     // Удаляем класс для стилизации области, куда можно бросить элемент
//     event.target.classList.remove('drag-over');
//     // Меняем местами элементы
//     swapElements(dragElement, event.target);
// }
// function swapElements(el1, el2) {
//     // Получаем родительские элементы для обоих элементов
//     const parent1 = el1.parentNode;
//     const parent2 = el2.parentNode;
//     // Получаем индексы элементов
//     const index1 = Array.prototype.indexOf.call(parent1.children, el1);
//     const index2 = Array.prototype.indexOf.call(parent2.children, el2);
//     // Меняем местами элементы в DOM-дереве
//     parent1.insertBefore(el2, parent1.children[index1]);
//     parent2.insertBefore(el1, parent2.children[index2]);
// }


// const zone_1 = doc.querySelector('.zone__1')
// const zone_2 = doc.querySelector('.zone__2')
// const disk = doc.querySelector('#disk')



// disk.ondragover = allowDrop

// function allowDrop(event){
//     event.preventDefault()
// }

// disk.ondragstart = drag

// function drag (event){
//     event.dataTransfer.setData('id', event.target.id)
// }

// zone_1.ondrop = drop
// function drop (event){
//     let itemId = event.dataTransfer.getData('id')
//     console.log(itemId);
// }


// let drag_and_drop = () => {
//     let li = document.querySelector('.item')
//     let puc = document.querySelector('.pacman')

//     let dr_st = function () {
//         setTimeout(() => {
//             this.classList.add('hide')
//             console.log('start');
//         })
//     }
//     let dr_end = function () {
//         this.classList.remove('hide')
//         console.log('end');
//     }
//     let dr_ov = function (event) {
//         event.preventDefault();
//     }
//     let dr_entr = function () {
//         this.classList.add('hovered')
//         console.log('enter');
//     }
//     let dr_lv = function () {
//         this.classList.remove('hovered')
//     }
//     let dr_op = function () {
//         this.append(puc)
//         this.classList.remove('hovered')
//     }
//     li.forEach(item => {
//         item.addEventListener('dragover', dr_ov)
//         item.addEventListener('dragenter', dr_entr)
//         item.addEventListener('dragleave', dr_lv)
//         item.addEventListener('drop', dr_op)
//     });
//     puc.addEventListener('dragstart', dr_st)
//     puc.addEventListener('dragend   ', dr_end)
// }
// drag_and_drop()





















// // let doc = document
// // let body = doc.body
// // let button_menu = doc.querySelector('.burger__menu')
// // let navigation_menu = doc.querySelector('.menu')
// // let top_line = doc.querySelector('.top__line')
// // let center_line = doc.querySelector('.center__line')
// // let bottom_line = doc.querySelector('.bottom__line')
// // let button__add__card = doc.querySelector('.button__add__card')
// // let modal_window = doc.querySelector('.wrap__okno')
// // let cross = doc.querySelector('.button__cross')
// // cross.addEventListener('click', () => {
// //     modal_window.classList.toggle('not__active')
// //     body.style.overflow = 'auto'
// // })
// // button__add__card.addEventListener('click', () => {
// //     modal_window.classList.toggle('not__active')
// //     body.style.overflow = 'hidden'
// // })
// // button__add__card.addEventListener('keyup', (event) => {
// //     if (event.keyCode === 27) {
// //         modal_window.classList.add('not__active')
// //         body.style.overflow = 'auto'
// //     }
// // })
// // button_menu.addEventListener('click', function () {
// //     navigation_menu.classList.toggle('active')
// //     button_menu.classList.toggle('fix')
// //     top_line.classList.toggle('rotate__top')
// //     center_line.classList.toggle('delete__center')
// //     bottom_line.classList.toggle('rotate__bottom')
// // })
// // let swiper = new Swiper(".mySwiper", {
// //     slidesPerView: 4,
// //     spaceBetween: 10,
// //     freeMode: true,
// //     autoplay: {
// //         delay: 2500,
// //         disableOnInteraction: false,
// //     },
// //     scrollbar: {
// //         el: ".swiper-scrollbar",
// //         hide: true,
// //     },
// //     grabCursor: true,
// //     breakpoints: {
// //         300: {
// //             slidesPerView: 1,
// //         },
// //         565: {
// //             slidesPerView: 2,
// //         },
// //         767: {
// //             slidesPerView: 3,
// //         },
// //         992: {
// //             slidesPerView: 4,
// //         },
// //     },
// // });
// // let swiper2 = new Swiper(".mySwiper2", {
// //     grabCursor: true,
// //     effect: "creative",
// //     autoplay: {
// //         delay: 2500,
// //         disableOnInteraction: false,
// //     },
// //     creativeEffect: {
// //         prev: {
// //             shadow: true,
// //             translate: ["-120%", 0, -500],
// //         },
// //         next: {
// //             shadow: true,
// //             translate: ["120%", 0, -500],
// //         },
// //     },
// // });

// // // const anchors = document.querySelectorAll('a[href*="#"]')
// // // for (let anchor of anchors) {
// // //     anchor.addEventListener('click', function (event) {
// // //         event.preventDefault()
// // //         const blockID = anchor.getAttribute('href')
// // //         document.querySelector('' + blockID).scrollIntoView({
// // //             behavior: 'smooth',
// // //             block: 'center'
// // //         })
// // //     })
// // // }

// // let yakor_1 = doc.querySelector('.yakor_1')
// // let yakor_2 = doc.querySelector('.yakor_2')
// // let yakor_3 = doc.querySelector('.yakor_3')
// // let page_1 = doc.querySelector('.wrap__two__girls')
// // let page_2 = doc.querySelector('.wrap__bags')
// // let page_3 = doc.querySelector('.wrap__one__girl')

// // yakor_1.addEventListener('click', (event) => {
// //     event.preventDefault()
// //     window.scrollTo({ top: page_1.offsetTop - 150, behavior: 'smooth' })
// // })
// // yakor_2.addEventListener('click', (event) => {
// //     event.preventDefault()
// //     window.scrollTo({ top: page_2.offsetTop - 210, behavior: 'smooth' })
// // })
// // yakor_3.addEventListener('click', (event) => {
// //     event.preventDefault()
// //     window.scrollTo({ top: page_3.offsetTop - 100, behavior: 'smooth' })
// // })

// let doc = document
// mainElement = doc.documentElement

// let main_element_width = mainElement.clientWidth // Весь размер экрана без учета скролбара
// let main_element_height = mainElement.clientHeight

// console.log(main_element_width, main_element_height);

// let m_width = window.innerWidth // Весь размер экрана с учетом всего
// let m_height = window.innerHeight

// if (m_width < 600) {
//     mainElement.style.background = 'red'
// }

// console.log(m_width, m_height);

// // Проверка на ширину и высоту всеми методами
// let scroll_width = Math.max(
//     doc.body.scrollWidth, doc.documentElement.scrollWidth,
//     doc.body.offsetWidth, doc.documentElement.offsetWidth,
//     doc.body.clientWidth, doc.documentElement.clientWidth,
// )

// let scroll_height = Math.max(
//     doc.body.scrollHeight, doc.documentElement.scrollHeight,
//     doc.body.offsetHeight, doc.documentElement.offsetHeight,
//     doc.body.clientHeight, doc.documentElement.clientHeight,
// )

// console.log(scroll_width, scroll_height);

// let window_scroll_top = window.pageYOffset // Эта функция показывает на сколько мы прокрутили сайт
// console.log(window_scroll_top);

// let block1 = doc.querySelectorAll('.item')[0]
// let section4 = doc.querySelectorAll('.wrap')[3]
// let pos_sec4 = section4.offsetTop // Эта функция показывает где находится элемент
// console.log(pos_sec4);

// block1.addEventListener('click', jakor) // Слушатель событий
// // Прокрутка
// function jakor(event) {
//     event.preventDefault() // Отключение ссылки
//     window.scrollTo({ // Функция скролла
//         top: pos_sec4 - 0, // На сколько вниз он должен прокрутиться
//         left: 0,
//         behavior: 'smooth' // Плавность
//     })
// }
// // Прокрутка
// block1.addEventListener('click', (event) => {
//     event.preventDefault() // Отключение ссылки
//     window.scrollTo({ // Функция скролла
//         top: pos_sec4 - 0, // На сколько вниз он должен прокрутиться
//         left: 0,
//         behavior: 'smooth' // Плавность
//     })
// })

// let block2 = doc.querySelector('.wrap')
// let perntOf = block2.offsetParent // Так можно найти родительский элемент
// console.log(perntOf);

// let pos_top = block2.offsetTop // Где находится по вертикали
// let pos_left = block2.offsetLeft // Где находится по горизонтали
// let razm_w = block2.offsetWidth // Ширина
// let razm_h = block2.offsetHeight // Высота
// console.log(pos_top, pos_left, 'Нахождение элемента сверху и слева');
// console.log(razm_w, razm_h, 'Ширина и высота');

// let coordblock2 = block2.getBoundingClientRect() // x - сколько сдвинут по горизонтали влево, y - на сколько сдвинут по вертикали и когда до него дойти, top - сколько нужно чтобы дойти до его начала, left и right это насколько он сдвинут слева и справа, bottom - сколько нужно чтобы дойти до его низа
// console.log(coordblock2);

// let coordblock3 = block2.getBoundingClientRect().y // так с помощью точки мы можем вытаскивать оттуда как в объекте ключи
// console.log(coordblock3);