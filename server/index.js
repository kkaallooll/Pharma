let express = require('express');

let middlewares = require('./middlewares');
let getMedicine = require('./app/register');
let order = require('./app/makeOrder');
let signup = require('./app/signup');
let login = require('./app/login');
let getMedcine = require('./app/getmedicine');
let getAllOrder = require('./app/getOrder');
let profile = require('./app/profile');
let deleteMedicine = require('./app/deletemedicine')
let myorder= require('./app/myorder');
let deleteOrder = require('./app/deleteOrder')
let addMedicine = require('./app/addmedicine');
let app = express();
let port = 3000;


//initializing middlewares
middlewares(app);

//initializing application

getMedicine(app);
order(app);
signup(app);
login(app);
getMedcine.getAllmedicine(app);
getMedcine.getMedicineName(app);
getAllOrder(app);
deleteOrder(app);
profile(app);
myorder(app);
deleteMedicine(app);
addMedicine.addmedcine(app);
addMedicine.addimage(app);

app.listen(port,()=>{
    console.log('Server is connected');
})