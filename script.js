/* ✅ Вивід повідомлення в консоль — перевірка, що скрипт підключений */
console.log("✅ Скрипт успішно підключено");

/* 🔹 Отримуємо HTML-елементи за класами */
const box = document.querySelector('.box'); /* Знаходимо блок із класом box */
const toggleBtn = document.querySelector('.toggle-btn'); /* Кнопка перемикання кольору */
const input = document.querySelector('.number-input'); /* Поле вводу */
const checkBtn = document.querySelector('.check-btn'); /* Кнопка перевірки числа */
const listItems = document.querySelectorAll('.list li'); /* Всі елементи списку */

/* ✅ Подія при натисканні кнопки для зміни кольору блоку */
toggleBtn.addEventListener('click', function () {
  /*
    .classList.contains('active') — перевіряє, чи є клас 'active'
    Якщо є — видаляємо, інакше додаємо
  */
  if (box.classList.contains('active')) {
    box.classList.remove('active'); // Прибираємо клас
  } else {
    box.classList.add('active'); // Додаємо клас
  }
});

/* ✅ Подія при натисканні на кнопку перевірки числа */
checkBtn.addEventListener('click', function () {
  /*
    Отримуємо значення з поля
    Перетворюємо його в число за допомогою Number()
  */
  const value = Number(input.value);

  /* if else — перевіряємо умову */
  if (value > 10) {
    alert("Число більше 10");
  } else if (value === 10) {
    alert("Число дорівнює 10");
  } else {
    alert("Число менше 10 або некоректне");
  }
});

/* ✅ Перебираємо список фруктів за допомогою forEach() */
listItems.forEach(function (item, index) {
  /* Додаємо подію при кліку на кожен елемент списку */
  item.addEventListener('click', function () {
    alert(`Ти натиснув на фрукт №${index + 1}: ${item.textContent}`);
  });
});
