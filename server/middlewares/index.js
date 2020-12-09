const bodyParser = require('body-parser');

const initMiddlewares = (app) =>{
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use((req,res,next) =>{
        
        res.header('Access-Control-Allow-Origin',req.get('Origin')||'*');
        res.header('Access-Control-Allow-Credentials','true');
        res.header('Access-Control-Allow-Methods','GET,HEAD,POST,PATCH,DELETE');
        res.header('Access-Control-Allow-Headers','Content-Length');
        res.header('Access-Control-Allow-Headers','Accept,Authorization,Content-Type,X-Requested-With,Range');
        next();
    })
};

module.exports = initMiddlewares;