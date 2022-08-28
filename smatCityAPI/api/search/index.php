<?php
    include ("../../model/conn.php");
    include ("../../controller/autoloader.php");

    
    header('Access-Control-Origin: *');
    header('Access-control-Allow-Method: POST');
    header('Access-control-Allow-Headers: X-Requested-With');

    //intantiate class
    $search = new Search($con);
    $data = json_decode(file_get_contents('php://input'), true);
    $search->search($data);


?>