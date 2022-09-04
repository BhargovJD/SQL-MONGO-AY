const mongoose = require('mongoose')

// Connection URL and create database fruitsDBV2
const url = 'mongodb://localhost:27017/fruitsDBV2';
mongoose.connect(url)

// For Fruit(Fruits) collection
const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "name field is required"]
  },
  rating:{
    type:Number,
    min:1,
    max:10
  },
  review:String
});

// Fruit = Fruits is collection
const Fruit = mongoose.model("Fruit", fruitSchema);


// fruit is a document to be stored inside Fruit(Fruits) collection.
const fruit = new Fruit({ 
  name: 'Apple',
  rating:7,
  review:"Good..." 
});

// Save : insert one
// fruit.save().then(() => console.log('okk'));;



// For People(Peoples) collection
const peopleSchema = new mongoose.Schema({
  name:String,
  age:Number,
});

// Collection
const People = mongoose.model("People", peopleSchema);

// Document
const people1 = new People({ 
  name: 'John',
  age:37,
});

const people2 = new People({ 
  name: 'Alex',
  age:37,
});

const people3 = new People({ 
  name: 'Max',
  age:37,
});



// Save document insert many
People.insertMany([people1,people2,people3], function(err){
  if(err){
    console.log(err)
  }
  else{
    console.log("Saved!")
  
  }
});

// READ
Fruit.find(function(err, fruits){
  if(err){
    console.log(err)
  }else{
    // console.log(fruits)
    fruits.forEach(function(fruit){
      // console.log(fruit.name)
    })
  }
})


People.find(function(err, peoples){
  if(err){
    console.log(err)
  }else{

    // mongoose.connection.close();

    // console.log(peoples)
    peoples.forEach(function(people){
      console.log(people.name)
    })
  }
})



