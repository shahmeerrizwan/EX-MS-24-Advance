import express from "express";



const router = express.Router()



router.get("/", (req, res) => {
    const products = [
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "new road",
                "number": 7682,
                "zipcode": "12926-3874"
            },
            "id": 1,
            "email": "john@gmail.com",
            "username": "johnd",
            "password": "m38rmF$",
            "name": {
                "firstname": "john",
                "lastname": "doe"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "-37.3159",
                    "long": "81.1496"
                },
                "city": "kilcoole",
                "street": "Lovers Ln",
                "number": 7267,
                "zipcode": "12926-3874"
            },
            "id": 2,
            "email": "morrison@gmail.com",
            "username": "mor_2314",
            "password": "83r5^_",
            "name": {
                "firstname": "david",
                "lastname": "morrison"
            },
            "phone": "1-570-236-7033",
            "__v": 0
        },
        {
            "address": {
                "geolocation": {
                    "lat": "40.3467",
                    "long": "-30.1310"
                },
                "city": "Cullman",
                "street": "Frances Ct",
                "number": 86,
                "zipcode": "29567-1452"
            },
            "id": 3,
            "email": "kevin@gmail.com",
            "username": "kevinryan",
            "password": "kev02937@",
            "name": {
                "firstname": "kevin",
                "lastname": "ryan"
            },
            "phone": "1-567-094-1345",
            "__v": 0
        }
    ]
    res.send({ products })
})


router.post("/adduser", (req, res) => {
    res.send({ message: "User Added Successfully" })
})


router.put("/updateUser", (req, res) => {
    res.send({ message: "User updated Successfully" })
})

router.delete("/deleteUser", (req, res) => {
    res.send({ message: "User deleted Successfully" })
})



export default router