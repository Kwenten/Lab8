// Простой скрипт для обработки формы
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Сообщение отправлено!');
});
