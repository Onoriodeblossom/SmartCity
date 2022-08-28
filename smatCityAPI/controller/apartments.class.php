<?php
namespace SmatCity;

class Apartments{
    public $con;

    public function __construct($con){
        $this->con = $con;
    }
    public function processRequest($method, $id){
        if ($id) {
            switch ($method) {
                case 'GET':
                    $this->getApartment($id);
                    break;
                default:
                    # code...
                    break;
            }
        }else{
        switch ($method) {
            case 'GET':
                $this->getAllApartments();
                break;
            default:
                # code...
                break;
        }
    }
    }
    
  public function getAllApartments()
    {
        $sel = "select * from apartments order by id desc";
        $runSel = mysqli_query($this->con, $sel);
        $jsonArray = array();
            while ($row = mysqli_fetch_assoc($runSel)) {
                $jsonArray[] = $row;

                echo json_encode([
                    "id"=> $row['id'],
                    "user_id"=> $row['user_id'],
                    "title"=> $row['title'],
                    "initial_fee"=> $row['initial_fee'],
                    "subsequent_fee"=> $row['subsequent_fee'],
                    "country"=> $row['country'],
                    "city"=> $row['city'],             
                    "state"=> $row['state'],
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
    public function getApartment($id)
    {
        $sel = "select * from apartments where id = '$id'";
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

?>