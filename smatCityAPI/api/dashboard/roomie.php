<?php
    ini_set("display_errors", 1);
     include ("../../model/conn.php");
     require "../../vendor/autoload.php";
    use \Firebase\JWT\JWT;
    use \Firebase\JWT\KEY;
    
    header('Access-Control-Origin: *');
    header("Content-type: application/json; charset=utf-8");
    header('Access-control-Allow-Method: GET, POST, PATCH, DELETE');
    header('Access-control-Allow-Headers:  Content-Type, Action, Authorization, X-Requested-With'); 

    $parts = explode("/" , $_SERVER['REQUEST_URI']);
    $id =  $parts['5']?? NULL;
    $data = json_decode(file_get_contents("php://input"), true);
    $secret_key = "SmatCity";
    $allheaders = getallheaders();
    $jwt = $allheaders['Authorization'];
    $user_data = JWT::decode($jwt, new Key($secret_key, 'HS256'));
    $user_id = $user_data->data->id;
    processRequest($_SERVER['REQUEST_METHOD'], $user_id, $con, $data, $id);
    function processRequest($method, $user_id, $con, $data, $id){
        if ($id) {
            switch ($method) {
                case 'GET':
                    getRoom($id, $con);
                    break;
                case 'PATCH':
                    updateRoom($id, $con, $data);
                    break;
                case 'DELETE':
                    deleteRoom($id, $con);
                    break;
                default:
                    # code...
                    break;
            }
        }else{
        switch ($method) {
            case 'GET':
                getAllRooms($user_id, $con);
                break;
            case 'POST':     
                setRoom($data, $con, $user_id);
                break;
            default:
                # code...
                break;
        }
    }
    }
    function getRoom($id , $con)
    {
        $sel = "select * from Roomie where id = '$id'";
        $runSel = mysqli_query($con, $sel);
        $count = mysqli_num_rows($runSel);
        if ($count < 1) {
            http_response_code(404);
         echo json_encode([
            "message"=> "You do not have any post yet"
         ]);
            exit;
        }
        $row = mysqli_fetch_assoc($runSel);
        echo json_encode([
            "id"=> $row['id'],
            "user_id"=> $row['user_id'],
            "country"=> $row['country'],
            "city"=> $row['city'],             
            "state"=> $row['state'],
            "community"=> $row['community'],               
            "street"=> $row['street'],
            "address"=> $row['address'],           
            "house_type"=> $row['house_type'],
            "gender"=> $row['gender'],
            "room_img"=> $row['room_img'],
            "updated_at"=> $row['updated_at'],
            "created_at"=> $row['created_at']

        ]);
    }
    function updateRoom($id , $con, $data)
    {
        $country = $data['country'];
        $city = $data['city'];
        $state = $data['state'];
        $community = $data['community'];
        $street = $data['street'];
        $address = $data['address'];
        $house_type = $data['house_type'];
        $gender = $data['gender'];

        $sql = "update Roomie set house_type = '$house_type',  country = '$country', city = '$city', state = '$state', community = '$community', street = '$street', address = '$address', gender = '$gender', updated_at = NOW() where id = '$id'";
        $runSel = mysqli_query($con, $sql);
        if ($runSel) {
            echo json_encode([
                "message"=> 'update successful'
            ]);
        }else{
            echo json_encode([
                "message"=> 'update not successful'
            ]);
        }
    }
    function deleteRoom($id, $con)
    {
        $sql = "delete from Roomie where id = '$id'";
        $runSel = mysqli_query($con, $sql);
        if ($runSel) {
            echo json_encode([
                "message"=> 'delete successful'
            ]);
        }else{
            echo json_encode([
                "message"=> 'could not delete'
            ]);
        }
    }
    function getAllRooms($user_id , $con)
    {
        $sel = "select * from Roomie where user_id = '$user_id' order by id desc";
        $runSel = mysqli_query($con, $sel);
        $count = mysqli_num_rows($runSel);
        if ($count < 1) {
            http_response_code(404);
         echo json_encode([
            "message"=> "You do not have any post yet"
         ]);
            exit;
        }
        while ($row = mysqli_fetch_assoc($runSel)) {
            echo json_encode([
                "id"=> $row['id'],
                "user_id"=> $row['user_id'],
                "country"=> $row['country'],
                "city"=> $row['city'],             
                "state"=> $row['state'],
                "community"=> $row['community'],               
                "street"=> $row['street'],
                "address"=> $row['address'],           
                "house_type"=> $row['house_type'],
                "gender"=> $row['gender'],
                "room_img"=> $row['room_img'],
                "updated_at"=> $row['updated_at'],
                "created_at"=> $row['created_at']
    
            ]);
        }
    }
    function  setRoom($data, $con, $user_id)
    {
        $country = $data['country'];
        $city = $data['city'];
        $state = $data['state'];
        $community = $data['community'];
        $street = $data['street'];
        $address = $data['address'];
        $house_type = $data['house_type'];
        $gender = $data['gender'];
        $sql = "insert Into Roomie(user_id, house_type, country, state, city, community, street, address, gender, updated_at) values ('$user_id','$house_type','$country', '$state','$city','$community','$street','$address', '$gender', NOW())";
        $run = mysqli_query($con, $sql);
        echo json_encode([
            "message"=> $user_id
         ]);
        if ($run) {
            http_response_code(200);
            echo json_encode([
                "message"=> "Posted"
             ]);
        }else{
            http_response_code(500);
            echo json_encode([
                "message"=> "Error"
             ]);
        }
    }
?>