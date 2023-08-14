<?php

session_start();

if (isset($_POST['getResult'])) {
    getResult();

} elseif (isset($_POST['putResult'])) {
    putResult();
}

function getResult()
{
    if (isset($_POST['dataFull'])) {
        $dataFull = $_POST['dataFull'];
        $responseTest = json_decode($dataFull, true);
        $_SESSION['dataFull'] = $responseTest;
        echo json_encode(array("error" => false, "dataResult" => $_SESSION['dataFull']));
    }
}

function putResult()
{
    $dataTest = $_SESSION['dataFull'];
    $userName = $_SESSION['nameUser'];

    if ($dataTest) {
        echo json_encode(array("error" => false, "dataResult" => $dataTest));
    }

}






?>