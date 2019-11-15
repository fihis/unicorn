## Задача 1

Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
```javascript
document.getElementById('btn').addEventListener('click', () => {
  document.getElementById('text').style.opacity = '0';
  }) 
```
## Задача 2

Создайте кнопку, которая будет скрывать себя по нажатию.
```javascript
let button = document.createElement('button');
button.style.width = '100px'  ;
button.style.height = '20px'  ;
document.body.append(button);
button.onclick = () => {
  button.style.display = 'none';
}
```
## Задача 3

В переменной button находится кнопка. Изначально на ней нет обработчиков.

Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);

## Задача 4-12 отдельно
