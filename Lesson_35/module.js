(function () {
    var message = 'сообщение модуля';

    function showMessage() {
        alert(message);
    }
window.showMessage = showMessage;
}());

