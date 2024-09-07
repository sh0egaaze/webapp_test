const form = document.getElementById('registration-form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const shortName = document.getElementById('short-name').value;

    // Отправляем данные через Telegram Web App API
    Telegram.WebApp.sendData(JSON.stringify({
        fullName: fullName,
        shortName: shortName
    }));
});