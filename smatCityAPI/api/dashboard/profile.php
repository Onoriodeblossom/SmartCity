<?php
    ini_set("display_errors", 1);
    include "../../model/conn.php";
    require "../../vendor/autoload.php";
    use \Firebase\JWT\JWT;
    use \Firebase\JWT\KEY;
    header('Access-Control-Origin: *');
    header("Content-Type: application/json; charset=UTF-8");
    header('Access-control-Allow-Method: GET, PATCH');
    header('Access-control-Allow-Headers:  Content-Type, Action, Authorization, X-Requested-With');

    $data = json_decode(file_get_contents("php://input"), true);
    $secret_key = "SmatCity";
    $allheaders = getallheaders();
    $jwt = $allheaders['Authorization'];
    $user_data = JWT::decode($jwt, new Key($secret_key, 'HS256'));
    $id = $user_data->data->id;
    processRequest($_SERVER['REQUEST_METHOD'], $id, $con, $data);
    function processRequest($method, $id, $con, $data){
            switch ($method) {
                case 'GET':
                    getUser($id, $con);
                    break;
                case 'PATCH':
                    updateUser($id, $con, $data);
                    break;
                default:
                    # code...
                    break;
            }
    }
    function getUser($id, $con)
    {
      /* A function that gets a user by id. */
        $sel = "select * from users where id = '$id'";
        $runSel = mysqli_query($con, $sel);
        $count = mysqli_num_rows($runSel);
        if ($count < 1) {
            http_response_code(404);
            echo json_encode([
            "message"=> "User not found"
         ]);
            exit;
        }
        $row = mysqli_fetch_assoc($runSel);
        echo json_encode([
            "id"=> $row['id'],
            "username"=> $row['username'],
            "email"=> $row['email'],
            "country"=> $row['country']
        ]);
    }
    function updateUser($id, $con, $data)
    {
        $username = $data['username'];
        $email = $data['email'];
        $country = $data['country'];

        if (!empty($username) AND !empty($email) AND !empty($country)) {
            $sql = "update users set username = '$username', email = '$email', country = '$country', updatedat = Now() where id = '$id'";
            $run = mysqli_query($con, $sql);
            if ($run) {
                echo json_encode([
                    "message"=> 'update successful'
                ]);
            }else{
                echo json_encode([
                    "message"=> 'update not successful'
                ]);
            }
        }else{
            echo json_encode([
                "message"=> 'Fields can not be empty'
            ]);
        }

    }
?>