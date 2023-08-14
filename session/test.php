<?php
$hostServer = 'http://' . $_SERVER['HTTP_HOST'];
session_start();
if (!isset($_SESSION['nameUser'])) {
  header('Location: ../index.php');
  exit();
}
?>


<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
  <link rel="stylesheet" href="<?= $hostServer; ?>/cuestionario_online/src/css/main.min.css" />
  <title>Cuestionario</title>
</head>

<body>
  <nav class="navbar navbar-future">
    <div class="container-fluid">
      <a class="navbar-brand dataTime"></a>
      <form class="d-flex" id="dataTest">
        <button class="btn btn-success" disabled type="submit" id="finishSend">Enviar y terminar</button>
      </form>
    </div>
  </nav>
  <div class="dataTest">
    <div class="desplaceItems">
      <span class="desplaceLeft"><a href="#">&lt;</a></span>
      <span class="desplaceRight"><a href="#">&gt;</a></span>
    </div>
  </div>
  <article id="questionArticle"> </article>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
    crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="<?= $hostServer; ?>/cuestionario_online/src/js/main.js"></script>
  <script src="<?= $hostServer; ?>/cuestionario_online/src/js/resultTest.js"></script>
  <script src="<?= $hostServer; ?>/cuestionario_online/src/js/sesion.js"></script>
</body>

</html>