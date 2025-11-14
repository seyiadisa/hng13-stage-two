<?php

require_once __DIR__ . "/vendor/autoload.php";

session_start();

/**
 * Checks if the user is authenticated.
 * This function checks for a 'ticketapp_session' cookie, which should be set
 * by your frontend upon successful login. PHP cannot directly access localStorage.
 * @return bool
 */
function isAuthenticated()
{
    // Check if the 'ticketapp_session' cookie is set and not empty.
    // In a real app, you'd also validate this token against your database.
    return isset($_COOKIE['ticketapp_session']) && !empty($_COOKIE['ticketapp_session']);
}

/**
 * Redirects to a given path.
 * @param string $path
 */
function redirect($path)
{
    header("Location: " . $path);
    exit();
}

$loader = new \Twig\Loader\FilesystemLoader(__DIR__ . "/templates");
$twig = new \Twig\Environment($loader);

// Add a global variable to all templates
$twig->addGlobal('isAuthenticated', isAuthenticated());

$requestUri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);

$routes = [
    '/' => 'home.twig',
    '/auth/login' => 'login.twig',
    '/auth/signup' => 'signup.twig',
    '/dashboard' => 'dashboard.twig',
    '/tickets' => 'tickets.twig',
];

$protectedRoutes = ['/dashboard', '/tickets'];

if (array_key_exists($requestUri, $routes)) {
    if (in_array($requestUri, $protectedRoutes) && !isAuthenticated()) {
        redirect('/auth/login');
    }

    try {
        echo $twig->render($routes[$requestUri]);
    } catch (\Twig\Error\LoaderError $e) {
        // Handle template not found error
        http_response_code(500);
        echo "Error: Template not found for route " . $requestUri;
    }
} else {
    redirect('/');
}
