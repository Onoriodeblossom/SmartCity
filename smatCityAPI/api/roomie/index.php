<?php
   ini_set("display_errors", 1);
   include ("../../model/conn.php");
   include ("../../controller/apartments.class.php");
    use SmatCity\Roomie;

   header('Access-Control-Origin: *');
    header("Content-type: application/json; charset=utf-8");
    header('Access-control-Allow-Method: GET');
    header('Access-control-Allow-Headers:  Content-Type, Action, Authorization, X-Requested-With'); 

    //intantiate class
    $users = new Roomie($con);
    $parts = explode("/" , $_SERVER['REQUEST_URI']);
    $id =  $parts['4']?? NULL;
    $users->processRequest($_SERVER['REQUEST_METHOD'], $id);
?>