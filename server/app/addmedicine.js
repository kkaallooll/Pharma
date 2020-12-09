let mysql = require('mysql');
let db = require('../dbms/database');
let path = require('path');
let multer = require('multer');

const storage = multer.diskStorage({
    destination: '../images',
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
})
const upload = multer({
    storage: storage
}).single('product')



const initAddMedicineApp = (app) => {
    app.post('/add-medicine', (req, res) => {
        //console.log(req.body);
        let { name, price, detail } = req.body;


        var sql = "Insert into tbl_medicine(??,??,??,??) values (?,?,?,?)";
        var data = ['name', 'price', 'detail', 'img', name, price, detail, ''];
        var query = mysql.format(sql, data);
        //  console.log(query);
        db.query(query, (error, results, field) => {
            if (error) {
                res.json({ message: 'Server Failed' }).status(400);
            } else {

                res.json({ message: 'Successful' }).status(200);

            }
        });


    });
};
let update = (filename, res) => {
    query = "SELECT code FROM tbl_medicine ORDER BY code DESC LIMIT 1;";
    db.query(query, (error, results, field) => {
        if (error) {
            res.json({ message: 'Image Uploading Failed' }).status(200);

        } else {
            var code = results[0].code;
            var sql = "Update tbl_medicine set ??=? where ??=?";
            var data = ['img', filename, 'code', code];
            var query = mysql.format(sql, data);
            console.log(query);

            db.query(query, (error, results, field) => {
                if (error) {
                    res.json({ message: 'Image Uploading Failed' }).status(400);
                } else {

                    res.json({ message: 'Successful' }).status(200);

                }
            });

        }
    });
}

const initAddImageApp = (app) => {
    app.post('/upload-image', (req, res) => {

        upload(req, res, (err) => {
            if (err) {

            }
            else {
                console.log(req.file.filename);
                update(req.file.filename, res)

            }
        });


    });
}

module.exports = {
    addmedcine: initAddMedicineApp,
    addimage: initAddImageApp
}