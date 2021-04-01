//first create a server
const express=require('express');
const app= express();
const morgan=require('morgan');
const bodyparser=require('body-parser');
const path=require('path');
const connectDB=require('./server/database/connection');
//dotenv (allows you to not share your credentials in source code)
const dotenv=require('dotenv');
dotenv.config({path:'config.env'});
const PORT=process.env.PORT||3000;

//log requests (morgan allows us to log requests on console whenever we make requests)
app.use(morgan('tiny'));

//mongo db connection
connectDB();

//parse requests to body parser (body parser)(module)
app.use(bodyparser.urlencoded({extended:true}));

//set view engine(embeded javascript (ejs))
app.set('view engine',"ejs");
//app.set('views',path.resolve(__dirname,'views/ejs'));
//use the above step if you want to put ejs in a seperate file inside views folder

//load assets (using middleware)
app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));
//(now you can access the folders in assets file directly for eg:css/style.css(if you have created it inside css))



//load routers
app.use('/',require('./server/routes/router'));

app.listen(PORT,()=>{console.log(`server running on http://localhost:${PORT}`)});