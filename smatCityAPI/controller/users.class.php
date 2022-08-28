<?php
namespace SmatCity;
class Users{
    public $con;
    public $username;

    public function __construct($con){
        $this->con = $con;
    }
    public function processRequest($method, $id){
        if ($id) {
            switch ($method) {
                case 'GET':
                    $this->getUser($id);
                    break;
                case 'PATCH':
                    $this->updateUser();
                    break;
                default:
                    # code...
                    break;
            }
        }else{
        switch ($method) {
            case 'GET':
                $this->getAllUsers();
                break;
            case 'POST':
                $data = json_decode(file_get_contents("php://input"), true);       
                $this->signIn($data);
                break;
            default:
                # code...
                break;
        }
    }
    }
    public function login($data)
    {
        $email = mysqli_real_escape_string($this->con, htmlspecialchars($data['email']));
            $password = mysqli_real_escape_string($this->con,$data['password']);
    
            
            /* Checking if the email exist in the database. */
            $sel = "select * from users where email = '$email'";
            $run = mysqli_query($this->con, $sel);
            $row = mysqli_fetch_assoc($run);
            $get_pass = $row['password'];
            //check if email exist
            $email_exist = mysqli_num_rows($run);
        
    
            if ($email_exist === 0 OR !password_verify($password, $get_pass)) {
                echo json_encode([
                    'message'=>"invalide email or password"
                ]);
            }
            if ($email_exist === 1 AND password_verify($password, $get_pass)) {
                    $payload = [
                    'iss' => "localhost",
                    'aud' => 'localhost',
                    'exp' => time() + 1000, //10 mint
                    'data' => [
                        'id'=> $data['id'],
                        'email' => $email
                    ],
                ];
                $secret_key = "SmatCity";
                $jwt = JWT::encode($payload, $secret_key, 'HS256');
                echo json_encode([
                    'status' => 1,
                    'jwt' => $jwt,
                    'message' => 'Login Successfull',
                ]);
        }
        else{
    
            http_response_code(401);
            echo json_encode(array("message" => "Login failed."));
        }
    }
    
    public function getAllUsers()
    {
        $sel = "select * from users";
        $runSel = mysqli_query($this->con, $sel);
        $count = mysqli_num_rows($runSel);
        if ($count == 0) {
            echo json_encode([
                'message'=>'No user found'
            ]);
        }
        $jsonArray = array();
            while ($row = mysqli_fetch_assoc($runSel)) {
                $jsonArray[] = $row;

                echo json_encode([
                    "id"=> $row['id'],
                    "username"=> $row['username'],
                    "email"=> $row['email'],
                    "country"=> $row['country']

                ]);
            }
    }
    public function getUser($id)
    {
      /* A function that gets a user by id. */
        $sel = "select * from users where id = '$id'";
        $runSel = mysqli_query($this->con, $sel);
        $count = mysqli_num_rows($runSel);
        if ($count < 1) {
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
    public function signIn($data)
    {
        $username =mysqli_real_escape_string($this->con, htmlspecialchars(ucfirst($data['username'])));
        $email = mysqli_real_escape_string($this->con, htmlspecialchars($data['email']));
        $password = mysqli_real_escape_string($this->con,$data['password']);
        $c_password = mysqli_real_escape_string($this->con,$data['c_password']);
        $country = mysqli_real_escape_string($this->con, htmlspecialchars(ucfirst($data['country'])));
        $pass_encode = password_hash($password, PASSWORD_BCRYPT);

        $sel = "select email from users where email = '$email'";
        $run_sel = mysqli_query($this->con, $sel);
        $check_email = mysqli_num_rows($run_sel);
        if (strlen($password) < 8) {
            echo json_encode([
                'message'=>'password must be eight characters or more'
            ]);
        }
        if ($check_email > 0) {
            echo json_encode([
                'message'=>'Email already exist'
            ]);
        }
        if ($password !== $c_password) {
            echo json_encode([
                'message'=>'Passwords do not match '
            ]);
        }
       if ($check_email == 0 AND strlen($password) >= 8 AND $password === $c_password) {
        $query = "insert into users (username, email, password, country) values ('$username','$email','$pass_encode', '$country')";
        $run = mysqli_query($this->con, $query);
        if ($run) {
            echo json_encode([
                'message'=>'sign up succesful'
            ]);
        }
        else{
            echo json_encode([
                'message'=>'sign up failed'
            ]);
        }
       }
    }
}

?>