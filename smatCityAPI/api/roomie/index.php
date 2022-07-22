<?php
    include ("../../includes/conn.php");
    include ("../../classes/autoloader.php");
    
    header('Access-Control-Origin: *');
    header('Access-control-Allow-Method: GET, POST');
    header('Access-control-Allow-Headers: X-Requested-With');

    //intantiate class
    $users = new Roomie($con);
    $parts = explode("/" , $_SERVER['REQUEST_URI']);
    $id =  $parts['4']?? NULL;
    $users->processRequest($_SERVER['REQUEST_METHOD'], $id);
?>