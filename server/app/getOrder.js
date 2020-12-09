let mysql = require('mysql');
let db = require('../dbms/database');


const initMedicineApp = (app) =>{
    app.get('/get-order',(req,res)=>{
     
    var sql ="Select * from tbl_order";
    console.log(sql);
   
    db.query(sql,(error, results, fields)=>{
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