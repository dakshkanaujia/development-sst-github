const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(express.json());

mongoose
    .connect("mongodb+srv://dakshkanaujia:ogR6VJKp5K4DMZfB@cluster0.aagp6g3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch((err)=>{
    console.log("Failed : " + err)
})

const productSchema = new mongoose.Schema({
    product_name : {
        type : String,
        required : true
    },
    product_price : {
        type : Number,
        required : true
    },
    isInStock : {
        type : Boolean,
        required : true
    },
    category : {
        type : String,
        required : true
    }
    
});

const productModel = mongoose.model("products", productSchema);

// Create A Product
app.post('/api/products', async(req, res)=>{
    const body = req.body;
    const product = productModel.create({
        product_name : req.body.product_name,
        product_price : req.body.product_price,
        isInStock : req.body.isInStock,
        category : req.body.category
    })
    console.log(product);
    return res.status(201).json({message : "Product Created"});
})


app.listen(8006, () => {
    console.log("Hello from 8006")
})
