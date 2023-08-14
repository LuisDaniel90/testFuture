<?php
$hostServer = 'http://' . $_SERVER['HTTP_HOST'];
session_start();
if (!isset($_SESSION['nameUser'])) {
    header('Location: ../index.php');
    exit();
} else if (!isset($_SESSION['dataFull'])) {
    header('Location: test.php');
    exit();
}


?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous" />
    <link rel="stylesheet" href="<?= $hostServer; ?>/cuestionario_online/src/css/main.min.css" />
    <title>Resultados</title>
</head>

<body>
    <article class="container pt-5" id="completeTest">
        <h1 class="text-center"><strong>Resultados</strong></h1>
        <hr class="separate" />
        <div class="dataFinish text-center">
            <h5><b>Usuario:</b>
                <?= $_SESSION['nameUser'] ?>
            </h5>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-6 d-flex justify-content-center">
                    <div class="dataFinishTest ">
                        <span class="fw-bolder">Cuestionario </span>
                        <span class="nameTest">Informática</span>
                        <span class="fw-bolder">Preguntas contestadas</span>
                        <span class="respTest">5</span>
                        <span class="fw-bolder">Puntaje Posible</span>
                        <span class="pointTest">500</span>
                        <span class="fw-bolder">Tiempo de respuesta:</span>
                        <span class="timeTest">05:32 seg</span>
                    </div>
                </div>
                <div class="col-6">
                    <div class="metaTest">
                        <div class="card resultTest">
                            <div class="card-body">
                                <p class="card-title iconTest">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                        <path
                                            d="M97.12 362.63c-8.69-8.69-4.16-6.24-25.12-11.85-9.51-2.55-17.87-7.45-25.43-13.32L1.2 448.7c-4.39 10.77 3.81 22.47 15.43 22.03l52.69-2.01L105.56 507c8 8.44 22.04 5.81 26.43-4.96l52.05-127.62c-10.84 6.04-22.87 9.58-35.31 9.58-19.5 0-37.82-7.59-51.61-21.37zM382.8 448.7l-45.37-111.24c-7.56 5.88-15.92 10.77-25.43 13.32-21.07 5.64-16.45 3.18-25.12 11.85-13.79 13.78-32.12 21.37-51.62 21.37-12.44 0-24.47-3.55-35.31-9.58L252 502.04c4.39 10.77 18.44 13.4 26.43 4.96l36.25-38.28 52.69 2.01c11.62.44 19.82-11.27 15.43-22.03zM263 340c15.28-15.55 17.03-14.21 38.79-20.14 13.89-3.79 24.75-14.84 28.47-28.98 7.48-28.4 5.54-24.97 25.95-45.75 10.17-10.35 14.14-25.44 10.42-39.58-7.47-28.38-7.48-24.42 0-52.83 3.72-14.14-.25-29.23-10.42-39.58-20.41-20.78-18.47-17.36-25.95-45.75-3.72-14.14-14.58-25.19-28.47-28.98-27.88-7.61-24.52-5.62-44.95-26.41-10.17-10.35-25-14.4-38.89-10.61-27.87 7.6-23.98 7.61-51.9 0-13.89-3.79-28.72.25-38.89 10.61-20.41 20.78-17.05 18.8-44.94 26.41-13.89 3.79-24.75 14.84-28.47 28.98-7.47 28.39-5.54 24.97-25.95 45.75-10.17 10.35-14.15 25.44-10.42 39.58 7.47 28.36 7.48 24.4 0 52.82-3.72 14.14.25 29.23 10.42 39.59 20.41 20.78 18.47 17.35 25.95 45.75 3.72 14.14 14.58 25.19 28.47 28.98C104.6 325.96 106.27 325 121 340c13.23 13.47 33.84 15.88 49.74 5.82a39.676 39.676 0 0 1 42.53 0c15.89 10.06 36.5 7.65 49.73-5.82zM97.66 175.96c0-53.03 42.24-96.02 94.34-96.02s94.34 42.99 94.34 96.02-42.24 96.02-94.34 96.02-94.34-42.99-94.34-96.02z" />
                                    </svg>

                                </p>
                                <h6 class="card-subtitle mb-2 text-body-secondary text-center winnerData">Básico 300pts
                                </h6>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>

    <div class="row w-100 text-center d-flex justify-content-center">
        <div class="col-3">
            <button type="button" class="btn btn-danger closeSession">Finalizar</button>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm"
        crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.7.0.min.js"></script>
    <script src="../src/js/resultTest.js"></script>

</body>

</html>