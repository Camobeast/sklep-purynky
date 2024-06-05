<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $phone = htmlspecialchars($_POST['phone']);
    $email = htmlspecialchars($_POST['email']);
    $guests = htmlspecialchars($_POST['guests']);
    $date = htmlspecialchars($_POST['date']);
    $nights = htmlspecialchars($_POST['nights']);

    $to = 'zavinohradem@seznam.cz';
    $subject = 'New Reservation Request';
    $message = "You have a new reservation request:\n\n";
    $message .= "Jméno: $firstName\n";
    $message .= "Příjmení: $lastName\n";
    $message .= "Telefon: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Počet hostů: $guests\n";
    $message .= "Termín: $date\n";
    $message .= "Počet nocí: $nights\n";

    $headers = "From: noreply@yourdomain.com";

    if (mail($to, $subject, $message, $headers)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Email sending failed.';
    }
} else {
    echo 'Invalid request method.';
}
?>