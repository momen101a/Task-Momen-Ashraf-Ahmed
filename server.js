const express = require('express'); 
const mongoose = require('mongoose');

let app =express();

// connect server to mongo server ==> local db
async function connect(){
    let connection =  await mongoose.connect("mongodb://0.0.0.0:27017/courses");
    if (!connection) {
     console.log('noo')
    } else {
     console.log('good')
  }
 }
 connect()

  
  // schema
  const studentSchema = new mongoose.Schema({
    name:String,
    age:Number,
    phone:String,
    favsubject:String,
  });



  //convert schema  to model (class)
  let studentModel=mongoose.model("student",studentSchema);

// schema 2

  const coursesSchema = new mongoose.Schema({
    name:String,
    course:String,
    ID:Number,
  });
    
  // convert schema2 to model (class)

  let coursesModel=mongoose.model("courses",coursesSchema);

  let courseUser = new coursesModel({
   course: "back end" ,
   name: "momen ashraf",
   ID:"111",
  }) .save();

  let newUser = new studentModel({
    name:"Momen Ashraf Ahmed",
    age:"20",
    phone : "01099122391",
    favsubject:"math",

  }) .save();

  let Mohameduser = new studentModel({
    name:" mohamed fahmy",
    age :"20",
    phone:"01285413935",
    favsubject:"math",
  }).save();
   
  let courseuser1 = new coursesModel({
    name:"mohmed fahmy",
    course:"back end",
    ID:"112",
  }).save();


app.listen (3000, function(){
    console.log('now server is opend')
} ) 
