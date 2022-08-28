<?php
    spl_autoload_register(function ($class)
    {
        if (file_exists(__DIR__  ."/$class.class.php")) {
            require __DIR__  ."/$class.class.php";
        }
        
    });
?>