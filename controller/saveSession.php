<?php

session_start();

function obtenerSesion()
{
    if (isset($_SESSION['nameUser'])) {
        return $_SESSION['nameUser'];
    } else {
        return null;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['nameUser']) && !empty($_POST['nameUser'])) {
        $nombre = $_POST['nameUser'];
        $_SESSION['nameUser'] = $nombre;
        echo 'success';
    } else {
        echo 'error';
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['getSession'])) {
    $sesion = obtenerSesion();
    if ($sesion !== null) {
        echo $sesion;
    } else {
        echo 'No se encontró la sesión.';
    }
}




?>