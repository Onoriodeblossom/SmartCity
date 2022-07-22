<?php

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
                    $this->patchUser();
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
                $this->setUser($data);
                break;
            default:
                # code...
                break;
        }
    }
    }
    
    
    public function getAllUsers()
    {
        $sel = "select * from users";
        $runSel = mysqli_query($this->con, $sel);
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
    public function setUser($data)
    {
        $username = $data['username'];
        $email = $data['email'];
        $password = $data['password'];
        $country = $data['country'];

        $query = "insert into users (username, email, password, country) values ('$username','$email','$password', '$country')";
        $run = mysqli_query($this->con, $query);
        if ($run) {
            echo json_encode([
                'message'=>'succesful'
            ]);
        }
        else{
            echo json_encode([
                'message'=>'succesful'
            ]);
        }
    }
}

?>