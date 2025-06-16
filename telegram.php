<?php
// ТВОЙ ТОКЕН от @BotFather
$token = "7664895421:AAF1QezsJBk7AFhfAkS3R6s5c-ePhFb85Wc";

// Твой chat_id от @userinfobot
$chat_id = "760863418";

// Получаем данные из формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Формируем текст
$text = "🧾 Новая заявка с сайта:\n";
$text .= "👤 Имя: $name\n";
$text .= "📞 Телефон: $phone\n";
$text .= "💬 Сообщение: $message";

// Отправка в Telegram
$url = "https://api.telegram.org/bot$token/sendMessage";
$params = [
    'chat_id' => $chat_id,
    'text' => $text,
    'parse_mode' => 'HTML'
];

// Отправляем запрос
file_get_contents($url . '?' . http_build_query($params));

// Перенаправление после отправки
header("Location: thankyou.html"); // создайте отдельную страницу "Спасибо"
exit;
?>