Endpoints
User Login
Make post request to https://smatcity.000webhostapp.com/api/authUser/login

User Sign Up
Make post request to https://smatcity.000webhostapp.com/api/users/

User View Profile
Make get request to https://smatcity.000webhostapp.com/api/dashboard/profile
Example response
{
    "id": "1",
    "username": "Jackie",
    "email": "jackie@gmail.com",
    "country": "China"
}

User Update profile
Make patch request to https://smatcity.000webhostapp.com/api/dashboard/profile

Get apartment details (without authorization)
Make get request to https://smatcity.000webhostapp.com/api/apartment/{id}
Example response
{
    "id": "3",
    "user_id": "2",
    "title": "",
    "initial_fee": "300000",
    "subsequent_fee": "250000",
    "country": "Nigeria",
    "city": "Benin",
    "state": "Newton",
    "community": "Ekosodin",
    "street": "Edo",
    "address": "",
    "tiled": "Yes",
    "house_type": "Bungalow",
    "compound_type": "fenced",
    "kitchen_img": "",
    "toilet_img": "",
    "bathroom_img": "",
    "room_img": "",
    "compound_img": "",
    "updated_at": "2022-08-06 12:31:44",
    "created_at": "2022-08-06 12:31:44"
}


