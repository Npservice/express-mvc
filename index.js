import  Express  from "express";
import cors from "cors";
import UserRoute from "./routes/Route.js";
import bodyParser from "body-parser";
import methodoverride from "method-override";
const app = Express();

app.set('view engine','ejs')
app.use(methodoverride('_method'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use(UserRoute);

app.listen(3000,()=>{
    console.log('Server Up and running...')
})