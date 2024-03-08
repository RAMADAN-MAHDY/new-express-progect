const express = require('express');
const mongoose = require('mongoose');
const usersfromDb = require("./models/user");
const app = express();
// Middleware للسماح بالوصول من مصدر محدد
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://192.168.1.6:8080');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
// my password in database is 01556299599  ; 
// mongodb+srv://ramadan:<password>@cluster0.m9prvuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
// let user = [];
app.use(express.json())


//database
mongoose.connect("mongodb+srv://ramadan:01556299599@cluster0.m9prvuj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(()=>{
    console.log("connected successfully");

}).catch((error)=>{
console.log("error with connecting with the db" , error);
});



//ejs    
app.set('view engine', 'ejs');



//get
// const name ="ramadan";
// app.get('/', function(req, res) {
//     res.render('index',{name : name} );
//   });



// app.get('/user',async(req,res)=>{
   
//    try{
//     const user = await usersfromDb.find();
//     // res.json(user);
//     res.render('index',{user : user} )
//     return;
//    }catch(err){
//     console.error(err);
//     res.status(500).send('Internal Server Error');
//    }
// })
//pust
 app.post('/user',async(req,res)=>{
    console.log(req.body);
    try{
        const newUser = new usersfromDb(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    return ; 
    }catch(err){
      console.error(err);
      res.status(400).send("internal server Error");
      return;
    }
 })

//delete
//put
// app.put("/",(req , res)=>{
//     const userIndex = user.findIndex((user)=>{
//        return user.id === req.body.id 
//     })
//     if(userIndex !== -1){
//         user[userIndex] = req.body;
//         res.status(201).send("user updated successfully");
//     }else{
//         res.status(404).send("user not found")
//     }
// return;
// })

app.listen(3000 , ()=>{
    console.log("the port 3000 is run .....")
})