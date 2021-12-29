const mongoose = require('mongoose')
const {
   firstItem,
   secondItem,
   thirdItem,
   fourthItem,
   fithItem,
   sixthItem
} = require('./routes/data')


const url = 'mongodb://localhost:27017/store';

mongoose
   .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
   .then(() => console.log("Connected to MongoDB..."))
   .catch(err => console.log("Could not Connected to MongoDB..."));

const dataSchema = new mongoose.Schema({
   type: String,
   title: String,
   description: String,
   shipping: Object,
   pricing: Object,
   details: Object
})


const products = mongoose.model("products", dataSchema)


const supreme = new products(firstItem)
const blackstar = new products(secondItem)
const funeral = new products(thirdItem)
const matrix = new products(fourthItem)
const interstellar = new products(fithItem)
const inception = new products(sixthItem)

supreme.save();

products.insertMany([blackstar, funeral, matrix, interstellar, inception], (err => {
   console.log(err)
}));

// 1-3
//  A
products.find({}, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
});
// C
products.find({ _id: 0 }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})
// D
products.find({ "type": "Audio Album" }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})
// E
products.find({ "pricing.retail": { $lt: 5000 } }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})
// F
products.find({ "type": { $ne: "Film" } }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})
// G
products.find({ "shipping.weight": { $gt: 15 } }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})
// H
products.updateOne({ "details.title": "The Matrix" }, { $set: { "pricing.list": 2500 } }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})
// I
products.find([{ type: "Film" }, { "shipping.dimensions.depth": 1 }], (err, foundList) => {
   try {
      console.log(foundList);
   } catch (err) {
      console.log(err)
   }
})
// J
products.count({ type: "Film" }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err);
   }
})
// L
products.find({}).sort("-pricing.savings").exec((err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})
// M
products.find({ "details.title": { $regex: "x" } }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})
// N
products.deleteOne({ "details.aspect_ratio": "1.66:1" }, (err, foundList) => {
   try {
      console.log(foundList)
   } catch (err) {
      console.log(err)
   }
})