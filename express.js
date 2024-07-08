const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const app = express();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL)
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


app.get('/api/products', async(req, res) => {
    const prods = await productModel.find({});
    res.json(prods);
})


app.get('/api/products/:id', async(req, res) => {
    const product = await productModel.findById(req.params.id);
    res.json(product);
})

app.put('/api/products/:id' , async(req, res) => {
    const update = await productModel.findByIdAndUpdate(req.params.id, req.body);
    return res.json(update);
})

app.delete('/api/products/:id', async(req, res) => {
    const delProd = await productModel.findByIdAndDelete(req.params.id);
    return res.json(delProd);
})



app.listen(8006, () => {
    console.log("Hello from 8006")
})
