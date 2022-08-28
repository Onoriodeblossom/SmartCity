<?php
    include ("../../model/conn.php");
    // include ("../../controller/autoloader.php");
    require "../../vendor/autoload.php";
    use SmatCity\Users;

    header('Access-Control-Origin: *');
    header('Access-control-Allow-Method: GET, POST');
    header('Access-control-Allow-Headers: X-Requested-With');

    //intantiate class
    $users = new Users($con);
    $parts = explode("/" , $_SERVER['REQUEST_URI']);
    $id =  $parts['4']?? NULL;
    $users->processRequest($_SERVER['REQUEST_METHOD'], $id);
?>