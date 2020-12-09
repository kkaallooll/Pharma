let mysql = require('mysql');
let db = require('../dbms/database');


const initMedicineApp = (app) =>{
    app.post('/get-my-order',(req,res)=>{
     let {email}=req.body;
    var sql ="SELECT * FROM tbl_order as o, tbl_user as u where ??=?? and ??=?";
    var data = ['o.Email','u.Email', 'u.Email', email];
    var query=mysql.format(sql, data);
    console.log(query);
    db.query(query,(error, results, fields)=>{
        if(error) {
            res.json({message:'error in processing'}).status(400);

        }
        else {
            console.log(results);
            res.json(results).status(200);
        }
    })
    });
};

module.exports = initMedicineApp;