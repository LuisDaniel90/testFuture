<?php
$hostServer = 'http://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
session_start();

if (isset($_SESSION['nameUser'])) {
  header('Location: ./session/test.php');
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
  <link rel="stylesheet" href="./src/css/main.min.css" />
  <title>Cuestionario</title>
</head>

<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-8">
        <div class="dataCuestionario m-5 p-5">
          <h1 class="text-center">Cuestionario</h1>
          <hr class="separate" />
          <div class="row d-flex justify-content-center">
            <div class="card card-futuros text-center" style="width: 30rem">
              <div class="card-body">
                <p class="card-text p-3">
                  Bienvenido al cuestionario en línea de
                  <b>Futuros Residentes</b>, a continuación usted podrá
                  seleccionar el tema para evaluar sus conocimientos
                </p>
              </div>
            </div>
          </div>
          <div class="container mt-5 text-center">
            <div class="row d-flex justify-content-center">
              <div class="col-6">
                <form class="pr-5 pl-5" id="dataForm">
                  <div class="form-group">
                    <input type="text" class="form-control" id="dataName" name="dataName"
                      placeholder="Escribe tu nombre" autocomplete="off" />
                    <small id="errorName" class="form-text text-danger" style="display:none;">Digita tu nombre sin
                      espacios</small>
                  </div>
                  <button type="submit" class="btn btn-primary mt-2">
                    Presentar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 d-flex align-items-end justify-content-end m-0 p-0">
        <picture>
          <img class="dataImage" src="src/img/cuestionario.avif" alt="" />
        </picture>
      </div>
    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
    crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
  <script src="./src/js/main.js"></script>
  <script src="./src/js/sesion.js"></script>

</body>

</html>