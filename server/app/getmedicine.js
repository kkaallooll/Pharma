let mysql = require('mysql');
let db = require('../dbms/database');


const initMedicineApp = (app) =>{
    app.get('/get-all-medicine',(req,res)=>{
     
    var sql ="Select * from tbl_medicine";

   
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

const initMedicineNameApp = (app) =>{
    app.get('/get-medicine-name',(req,res)=>{
     
    var sql ="Select Distinct name from tbl_medicine";

   
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
module.exports = {
    getAllmedicine: initMedicineApp,
    getMedicineName: initMedicineNameApp
}