let mysql = require('mysql');
let db = require('../dbms/database');
let bcrypt = require('bcrypt');

let loginFunc = (req, res) => {
    let {Email, Password} = req.body;
    console.log(req.body);
    if (Email && Password) {


        let sql = 'SELECT User, Name, Email, Address, Phone, Password, Salt from tbl_user where ??=?';
        let data = ['Email', Email];

        let query = mysql.format(sql, data);
        console.log(query);
        let noUser = 'No user found with this mail address';

        db.query(query, (error, results, fields) => {
            if (error) {
                res.json({message: noUser}).status(400);
            } else {
                if (results.length === 0) {
                    res.json({message: noUser}).status(400);
                } else {
                    let user = results[0];

                    bcrypt.hash(Password, user.Salt, (err, hash) => {
                        if (err) {
                            res.send({message: 'Login error'}).status(200);
                        } else if (hash === user.Password) {

                            res.json({
                                message: 'Login Successful',
                                user_email: Email
                            }).status(200);
                        } else {
                            res.send({message: 'Login Error'}).status(200);
                        }
                    });
                }
            }
        });
    } else {
        res.status(400).json({message: 'Invalid Form Submission'});
    }
}

const initLoginApp = (app) => {
    app.post('/login', loginFunc);
};

module.exports = initLoginApp;