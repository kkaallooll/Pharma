let mysql = require('mysql');
let db = require('../dbms/database');


const initMedicineApp = (app) =>{
    app.post('/get-medicine',(req,res)=>{
        console.log(req.body);

        let {code} = req.body;
    var sql ="Select * from tbl_medicine where ??=?";
    var fields=['code', code];
    var query= mysql.format(sql, fields);
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