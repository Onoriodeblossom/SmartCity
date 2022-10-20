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
                    getApartment($id, $con);
                    break;
                case 'PATCH':
                    updateApartment($id, $con, $data);
                    break;
                case 'DELETE':
                    deleteApartment($id, $con);
                    break;
                default:
                    # code...
                    break;
            }
        }else{
        switch ($method) {
            case 'GET':
                getAllApartments($user_id, $con);
                break;
            case 'POST':     
                setApartment($data, $con, $user_id);
                break;
            default:
                # code...
                break;
        }
    }
    }
    function getApartment($id , $con)
    {
        $sel = "select * from apartments where id = '$id'";
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
            "title"=> $row['title'],
            "initial_fee"=> $row['initial_fee'],
            "subsequent_fee"=> $row['subsequent_fee'],
            "country"=> $row['country'],
            "country"=> $row['country'],
            "city"=> $row['city'],             
            "state"=> $row['state'],
            "city"=> $row['city'],
            "community"=> $row['community'],               
            "street"=> $row['street'],
            "address"=> $row['address'],
            "tiled"=> $row['tiled'],               
            "house_type"=> $row['house_type'],
            "compound_type"=> $row['compound_type'],
            "kitchen_img"=> $row['kitchen_img'],
            "toilet_img"=> $row['toilet_img'],
            "bathroom_img"=> $row['bathroom_img'],
            "room_img"=> $row['room_img'],
            "compound_img"=> $row['compound_img'],
            "updated_at"=> $row['updated_at'],
            "created_at"=> $row['created_at']

        ]);
    }
    function updateApartment($id , $con, $data)
    {
        $title = $data['title'];
        $initial_fee = $data['initial_fee'];
        $subsequent_fee = $data['subsequent_fee'];
        $country = $data['country'];
        $city = $data['city'];
        $state = $data['state'];
        $community = $data['community'];
        $street = $data['street'];
        $address = $data['address'];
        $tiled = $data['tiled'];
        $house_type = $data['house_type'];
        $compound_type = $data['compound_type'];

        $sql = "update apartments set title = '$title', initial_fee = '$initial_fee', subsequent_fee = '$subsequent_fee', country = '$country', city = '$city', state = '$state', community = '$community', street = '$street', address = '$address', tiled = '$tiled', house_type = '$house_type', compound_type = '$compound_type', updated_at = NOW() where id = '$id'";
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
    function deleteApartment($id, $con)
    {
        $sql = "delete from apartments where id = '$id'";
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
    function getAllApartments($user_id , $con)
    {
        $sel = "select * from apartments where user_id = '$user_id' order by id desc";
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
                "title"=> $row['title'],
                "initial_fee"=> $row['initial_fee'],
                "subsequent_fee"=> $row['subsequent_fee'],
                "country"=> $row['country'],
                "country"=> $row['country'],
                "city"=> $row['city'],             
                "state"=> $row['state'],
                "city"=> $row['city'],
                "community"=> $row['community'],               
                "street"=> $row['street'],
                "address"=> $row['address'],
                "tiled"=> $row['tiled'],               
                "house_type"=> $row['house_type'],
                "compound_type"=> $row['compound_type'],
                "kitchen_img"=> $row['kitchen_img'],
                "toilet_img"=> $row['toilet_img'],
                "bathroom_img"=> $row['bathroom_img'],
                "room_img"=> $row['room_img'],
                "compound_img"=> $row['compound_img'],
                "updated_at"=> $row['updated_at'],
                "created_at"=> $row['created_at']
    
            ]);
        }
    }
    function  setApartment($data, $con, $user_id)
    {
        $title = $data['title'];
        $initial_fee = $data['initial_fee'];
        $subsequent_fee = $data['subsequent_fee'];
        $country = $data['country'];
        $city = $data['city'];
        $state = $data['state'];
        $community = $data['community'];
        $street = $data['street'];
        $address = $data['address'];
        $tiled = $data['tiled'];
        $house_type = $data['house_type'];
        $compound_type = $data['compound_type'];
        //adding image and video upload functionality
        $r_img = time()."_".$_FILES['room_img']['name'];
        $r_tmp_img = $_FILES['room_img']['tmp_name'];
        $k_img = time()."_".$_FILES['kitchen_img']['name'];
        $k_tmp_img = $_FILES['kitchen_img']['tmp_name'];
        $t_img = time()."_".$_FILES['toilet_img']['name'];
        $t_tmp_img = $_FILES['toilet_img']['tmp_name'];
        $b_img = time()."_".$_FILES['bathroom_img']['name'];
        $b_tmp_img = $_FILES['bathroom_img']['tmp_name'];
        $c_img = time()."_".$_FILES['compound_img']['name'];
        $c_tmp_img = $_FILES['compound_img']['tmp_name'];
        $h_vid = time()."_".$_FILES['house_vid']['name'];
        $h_tmp_vid = $_FILES['house_vid']['tmp_name'];
        
        
        $extention1 = pathinfo($_FILES["room_img"]["name"], PATHINFO_EXTENSION);
        $extention2 = pathinfo($_FILES["kitchen_img"]["name"], PATHINFO_EXTENSION);
        $extention3 = pathinfo($_FILES["toilet_img"]["name"], PATHINFO_EXTENSION);
        $extention4 = pathinfo($_FILES["bathroom_img"]["name"], PATHINFO_EXTENSION);
        $extention5 = pathinfo($_FILES["compound_img"]["name"], PATHINFO_EXTENSION);
        $extention6 = pathinfo($_FILES['house_vid']["name"], PATHINFO_EXTENSION);

        if (!in_array(strtolower($extention1), ['png', 'jpeg', 'jpg', 'svg']) ) {
            echo json_encode([
                "message"=> "File is not an image"
             ]);
        }
        if (!in_array(strtolower($extention2), ['png', 'jpeg', 'jpg', 'svg']) ) {
            echo json_encode([
                "message"=> "File is not an image"
             ]);
        }
        if (!in_array(strtolower($extention3), ['png', 'jpeg', 'jpg', 'svg']) ) {
            echo json_encode([
                "message"=> "File is not an image"
             ]);
        }
        if (!in_array(strtolower($extention4), ['png', 'jpeg', 'jpg', 'svg']) ) {
            echo json_encode([
                "message"=> "File is not an image"
             ]);
        }
        if (!in_array(strtolower($extention5), ['png', 'jpeg', 'jpg', 'svg']) ) {
            echo json_encode([
                "message"=> "File is not an image"
             ]);
        }
        if (!in_array(strtolower($extention6), ['mp4', 'gif']) ) {
            echo json_encode([
                "message"=> "File is not a video"
             ]);
        }
        if (empty($country)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($city)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($state)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($community)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($street)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($address)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($house_type)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($title)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($initial_fee)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
        if (empty($subsequent_fee)) {
            echo json_encode([
                "message"=> "Field is required"
             ]);
        }
         if (in_array(strtolower($extention1), ['png', 'jpeg', 'jpg', 'svg']) AND in_array(strtolower($extention2), ['png', 'jpeg', 'jpg', 'svg']) AND in_array(strtolower($extention3), ['png', 'jpeg', 'jpg', 'svg']) AND in_array(strtolower($extention4), ['png', 'jpeg', 'jpg', 'svg']) AND in_array(strtolower($extention5), ['png', 'jpeg', 'jpg', 'svg']) AND in_array(strtolower($extention6), ['mp4', 'gif']) AND !empty($initial_fee) AND !empty($subsequent_fee) AND !empty($country) AND !empty($city) AND !empty($state) AND !empty($community) AND !empty($street) AND !empty($address) AND !empty($house_type) AND !empty($title)) {
            move_uploaded_file($r_tmp_img, "uploads/$r_img");
            move_uploaded_file($k_tmp_img, "uploads/$k_img");
            move_uploaded_file($t_tmp_img, "uploads/$t_img");
            move_uploaded_file($b_tmp_img, "uploads/$b_img");
            move_uploaded_file($c_tmp_img, "uploads/$c_img");
            move_uploaded_file($h_tmp_vid, "uploads/$h_vid");
            $sql = "insert Into apartments(user_id, title, initial_fee, subsequent_fee, country, state, city, community, street, address, tiled, house_type, compound_type, kitchen_img, toilet_img, bathroom_img, room_img, compound_img, house_video, updated_at) values ('$user_id','$title','$initial_fee','$subsequent_fee','$country', '$state','$city','$community','$street','$address','$tiled','$house_type','$compound_type','$k_img','$t_img','$b_img','$r_img','$c_img','$h_vid',NOW())";
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
    }
?>