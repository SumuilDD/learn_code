/* Виводимо повідомлення в консоль, щоб переконатися, що скрипт підключено */
console.log("✅ Скрипт підключено успішно");

/* Знаходимо кнопку за класом .my-button і зберігаємо її в змінну btn
   document — це глобальний об’єкт, який представляє HTML-документ
   .querySelector('.my-button') — знаходить перший елемент з класом my-button
   const — створює змінну, яку не можна переназначити
*/
const btn = document.querySelector('.my-button');

/* Знаходимо div з класом box */
const box = document.querySelector('.box');

/* Додаємо обробник події "click" до кнопки
   btn — це змінна з кнопкою
   .addEventListener('click', function() {...}) — коли натиснеш на кнопку, виконується код всередині function
*/
btn.addEventListener('click', function () {
  
  /* if — умовний оператор
     box.classList.contains('active') — перевіряє, чи має box клас 'active'
  */
  if (box.classList.contains('active')) {
    /* Якщо клас є, видаляємо його */
    box.classList.remove('active');  // .remove() — видаляє клас з classList
  } else {
    /* Якщо класу немає, додаємо */
    box.classList.add('active');     // .add() — додає клас до classList
  }

  /* Тепер демонструємо Number() — перетворимо текст в число
     box.textContent — містить текст всередині div (наприклад, "42")
  */
  const numberValue = Number(box.textContent);  // Перетворюємо текст "42" → число 42

  /* Виводимо число в консоль */
  console.log("Значення числа:", numberValue);

  /* Масив прикладів, щоб показати forEach */
  const colors = ['red', 'green', 'blue'];  // Масив з 3 рядків (кольорів)

  /* .forEach() — перебирає кожен елемент масиву
     function(color, index) — функція з 2 параметрами: елемент і його індекс
  */
  colors.forEach(function (color, index) {
    console.log(index + ": " + color);  /* Виводимо індекс і назву кольору */
  });

});
