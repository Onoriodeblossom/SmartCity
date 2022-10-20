<?php
    include ("../../model/conn.php");
    // include ("../../controller/autoloader.php");
    include ("../../vendor/autoload.php");
    use \Firebase\JWT\JWT;

    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    //intantiate class
    // $users = new users($con);
    $data = json_decode(file_get_contents('php://input'), true);
    // $users->login($data);

    function login($data, $con)
    {
        $email = mysqli_real_escape_string($con, htmlspecialchars($data['email']));
        $password = mysqli_real_escape_string($con,$data['password']);

        
        /* Checking if the email exist in the database. */
        $sel = "select * from users where email = '$email'";
        $run = mysqli_query($con, $sel);
        $row = mysqli_fetch_assoc($run);
        $get_pass = $row['password'];
        $get_id = $row['id'];
        //check if email exist
        $email_exist = mysqli_num_rows($run);
    

        if ($email_exist === 0 OR !password_verify($password, $get_pass)) {
            echo json_encode([
                'message'=>"invalide email or password"
            ]);
        }
        if ($email_exist === 1 AND password_verify($password, $get_pass)) {
            $now = time();
            $payload = [
                "iat" => $now,
                "nbf" => $now,
                'iss' => "localhost",
                'aud' => 'localhost',
                'exp' => $now + 1000, //10 mint
                'data' => [
                    'id'=> $get_id,
                    'email' => $email
                ]
            ];
            $secret_key = "SmatCity";
            $jwt = JWT::encode($payload, $secret_key, 'HS256');
            echo json_encode([
                'status' => 1,
                'id'=> $get_id,
                'jwt' => $jwt,
                'message' => 'Login Successfull',
            ]);
    }
    else{

        http_response_code(401);
        echo json_encode(array("message" => "Login failed."));
    }
}
login($data, $con);
?>