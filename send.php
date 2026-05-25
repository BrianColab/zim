<?php
header('Content-Type: application/json');

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// Sanitize inputs
$name    = strip_tags(trim($_POST['name']    ?? ''));
$email   = filter_var(trim($_POST['email']   ?? ''), FILTER_SANITIZE_EMAIL);
$unit    = strip_tags(trim($_POST['unit']    ?? ''));
$movein  = strip_tags(trim($_POST['movein']  ?? ''));
$message = strip_tags(trim($_POST['message'] ?? ''));

// Basic validation
if (empty($name) || empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input']);
    exit;
}

$to      = 'info@homyspot.com';
$cc      = 'bpallister@gmail.com';
$subject = '1660 Baseline — Room Inquiry from ' . $name;

$body  = "New room inquiry from the ZIM.ca website\n";
$body .= "==========================================\n\n";
$body .= "Name:          $name\n";
$body .= "Email:         $email\n";
$body .= "Interested in: $unit\n";
$body .= "Move-in date:  $movein\n\n";
$body .= "Message:\n$message\n";

$headers  = "From: ZIM.ca Contact <noreply@zim.ca>\r\n";
$headers .= "Reply-To: $name <$email>\r\n";
$headers .= "Cc: $cc\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $body, $headers)) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail failed']);
}
