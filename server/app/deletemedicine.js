let mysql = require('mysql');
let db = require('../dbms/database');


const initMedicineApp = (app) =>{
    app.post('/delete-a-medicine',(req,res)=>{
     let {code} = req.body;
    var sql ="DELETE FROM tbl_medicine WHERE ?? = ?";
    var data = ['code', code];
    var query = mysql.format(sql, data);
    console.log(query);
   
    db.query(query,(error, results, fields)=>{
        if(error) {
            res.json({message:'error in processing'}).status(400);

        }
        else {
            console.log(results);
            res.json({message:'Successful'}).status(200);
        }
    })
    });
};

module.exports = initMedicineApp;