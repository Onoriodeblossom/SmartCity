<?php
namespace SmatCity;
class Search{
    public $con;

    public function __construct($con){
        $this->con = $con;
    }
   public function search($data){
    $budgetFrom =mysqli_real_escape_string($this->con, htmlspecialchars(ucfirst($data['budgetfrom'])));
    $budgetTo =mysqli_real_escape_string($this->con, htmlspecialchars(ucfirst($data['budgeto'])));
    $country = mysqli_real_escape_string($this->con, htmlspecialchars($data['country']));
    $state = mysqli_real_escape_string($this->con, htmlspecialchars($data['state']));
    $city = mysqli_real_escape_string($this->con, htmlspecialchars($data['city']));
    $community = mysqli_real_escape_string($this->con, htmlspecialchars($data['community']));
    $street = mysqli_real_escape_string($this->con, htmlspecialchars($data['street']));
    $tiled = mysqli_real_escape_string($this->con, htmlspecialchars($data['tiled']));
    $house_type = mysqli_real_escape_string($this->con, htmlspecialchars($data['house_type']));
    // $occupation = mysqli_real_escape_string($this->con, htmlspecialchars($data['occupation']));
    // $gender = mysqli_real_escape_string($this->con, htmlspecialchars($data['gender']));
    // $phoneNum = mysqli_real_escape_string($this->con, htmlspecialchars($data['phonenum']));

    $sel = "SELECT * FROM apartments WHERE initial_fee BETWEEN '$budgetFrom' AND '$budgetTo' AND country LIKE '%$country%' AND state LIKE '%$state%' AND city LIKE '%$city%' AND community LIKE '%$community%' AND street LIKE '%$street%' AND tiled LIKE '%$tiled%' AND house_type LIKE '%$house_type%'";
    $run = mysqli_query($this->con, $sel);
    $count = mysqli_num_rows($run);
    if ($count < 1) {
        echo json_encode([
            'message'=> 'No result found'
        ]);
    }
    if ($run) {
        $jsonArray = array();
            while ($row = mysqli_fetch_assoc($run)) {
                $jsonArray[] = $row;
        echo json_encode([
                "id"=> $row['id'],
                    "user_id"=> $row['user_id'],
                    "title"=> $row['title'],
                    "initial_fee"=> $row['initial_fee'],
                    "subsequent_fee"=> $row['subsequent_fee'],
                    "country"=> $row['country'],          
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
   }
    
    
}

?>