<?php

class Roomie{
    public $con;

    public function __construct($con){
        $this->con = $con;
    }
    public function processRequest($method, $id){
        if ($id) {
            switch ($method) {
                case 'GET':
                    $this->getRoomie($id);
                    break;
                case 'POST':
                    $this->setRoomie();
                    break;
                default:
                    # code...
                    break;
            }
        }else{
        switch ($method) {
            case 'GET':
                $this->getAllRoomie();
                break;
            case 'POST':
                $this->setApartment();
                break;
            default:
                # code...
                break;
        }
    }
    }
    
    
    public function getAllRoomie()
    {
        $sel = "select * from roomie";
        $runSel = mysqli_query($this->con, $sel);
        $jsonArray = array();
            while ($row = mysqli_fetch_assoc($runSel)) {
                $jsonArray[] = $row;

                echo json_encode([
                    "id"=> $row['id'],
                    "user_id"=> $row['user_id'],
                    "fee"=> $row['fee'],
                    "title"=> $row['title'],
                    "house_type"=> $row['house_type'],
                    "country"=> $row['country'],           
                    "state"=> $row['state'],
                    "city"=> $row['city'],
                    "community"=> $row['community'],   
                    "address"=> $row['address'],                          
                    "street"=> $row['street'],                     
                    "room_img"=> $row['image'],
                    "gender"=> $row['gender'],
                    "occupation"=> $row['occupation'],
                    "updated_at"=> $row['updated_at'],
                    "created_at"=> $row['created_at']

                ]);
            }
    }
    public function getRoomie($id)
    {
        $sel = "select * from Roomie where id = '$id'";
        $runSel = mysqli_query($this->con, $sel);
        $count = mysqli_num_rows($runSel);
        if ($count < 1) {
            http_response_code(404);
         echo json_encode([
            "message"=> "Apartment not found"
         ]);
            exit;
        }
        $row = mysqli_fetch_assoc($runSel);
        echo json_encode([
            "id"=> $row['id'],
            "user_id"=> $row['user_id'],
            "fee"=> $row['fee'],
            "title"=> $row['title'],
            "house_type"=> $row['house_type'],
            "country"=> $row['country'],           
            "state"=> $row['state'],
            "city"=> $row['city'],
            "community"=> $row['community'],   
            "address"=> $row['address'],                          
            "street"=> $row['street'],                     
            "room_img"=> $row['image'],
            "gender"=> $row['gender'],
            "occupation"=> $row['occupation'],
            "updated_at"=> $row['updated_at'],
            "created_at"=> $row['created_at']

        ]);
    }
}

?>