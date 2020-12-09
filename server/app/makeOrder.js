let mysql = require('mysql');
let db = require('../dbms/database');


const initOrderApp = (app) =>{
    app.post('/make-order',(req,res)=>{
        console.log(req.body);
        let {FirstName, LastName, Address, Email, Phone, Product, Total}=req.body;
        if(FirstName && LastName && Address && Email && Phone && Product && Total) {
            var sql = "INSERT INTO `tbl_order` (??,??,??,??,??,??,??) VALUES (?,?,?,?,?,?,?)";
            var fields = ['FirstName', 'LastName', 'Address', 'Email', 'Phone', 'Product', 'Total', FirstName, LastName, Address, Email, Phone, Product, Total];
            var query = mysql.format(sql, fields);
            console.log(query);
            db.query(query, (error, results, fields) => {
                if (error) {
                    res.json({message: 'Error in processing'}).status(400);

                } else {
                    console.log(results);
                    res.json({message: 'Order Placed'}).status(200);
                }
            })
        }
        else{
            res.json({message: 'Form is not filled up with all information'}).status(200);
        }
    });
};

module.exports = initOrderApp;