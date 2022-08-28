<?php
    ini_set("display_errors", 1);
     include ("../../model/conn.php");
     include ("../../controller/apartments.class.php");
    use SmatCity\Apartments;
    
    header('Access-Control-Origin: *');
    header("Content-type: application/json; charset=utf-8");
    header('Access-control-Allow-Method: GET, POST');
    header('Access-control-Allow-Headers: X-Requested-With');

    //intantiate class
    $apartment = new Apartments($con);
    $parts = explode("/" , $_SERVER['REQUEST_URI']);
    $id =  $parts['4']?? NULL;
    $apartment->processRequest($_SERVER['REQUEST_METHOD'], $id);
?>