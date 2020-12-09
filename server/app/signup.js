let mysql = require('mysql');
let db = require('../dbms/database');

let bcrypt = require('bcrypt');

let _config = require('../config');

let config = _config;

let registerUser = (name,email,address,phone,password,res)=>{
    bcrypt.genSalt(config.saltRounds,(err1,salt)=>{
        if(err1){
            res.send({message: 'Salt generation failed'});
        }else {
            bcrypt.hash(password, salt, (err1, hash) => {
                if (err1) res.status(400).send({message: 'Hash Generation Failed'});
                else if (name && address && email && password && phone) {
                    let sql = 'INSERT INTO tbl_user(??,??,??,??,??,??) values(?,?,?,?,?,?)';
                    let data = ['Name', 'Email', 'Address', 'Phone', 'Password', 'Salt', name, email, address, phone, hash, salt];

                    let query = mysql.format(sql, data);
                    console.log(query);

                    db.query(query, (error, results, fields) => {
                        if (error) {
                            res.status(400).send({
                                message: 'User Registration Failed'
                            })
                        } else if (results) {
                            res.status(200).send({message: 'Registration Successful'});

                        }
                    });
                }
                else {
                    res.status(200).send({message: "Please fill-up all the information to register"});
                }
            })
        }

    });
};

const initRegistrationApp = (app) =>{
    app.post('/sign-up',(req,res)=>{
        console.log(req.body);

        let {Name,Email,Address, Phone, Password} = req.body;

        registerUser(Name,Email,Address,Phone,Password,res);
    });
};

module.exports = initRegistrationApp;