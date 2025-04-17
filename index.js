const express = require('express');

const app = express();
const mongoose = require('mongoose');

const Product = require('./model/product.model.js')
const ProductRoutes = require('./routes/product.route.js');
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended : true}));


// route

app.use("/api/products", ProductRoutes);




app.get('/', (req, res) => {
    res.send("hello world from node api ");
})

// // get all products
// app.get('/api/products', async(req, res) => {
//     try{
//         const products = await Product.find({});
//         res.status(200).json(products);

//     }catch(error){
//         console.log(error);
//         res.status(500).json({message: error.message});

//     }
// });

// get specific products

// app.get('/api/products/:id', async(req, res) => {
//     try{
//         const {id} = req.params;
//         const product = await Product.findById(id);
//         res.status(200).json(product);

//     }catch(error){
//         console.log(error);
//         res.status(500).json(message: error.message)
//     }
// })

// post product or created first procuts etc

// app.post('/api/products', async(req, res) => {
//       // console.log(req.body);
//       // res.send(req.body);

//     try {
//        const product =  await Product.create(req.body);
//        res.status(201).json(product);
        
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({message: error.message})
//     }
// });

// // update a product

// app.put('/api/products/:id', async(req, res) => {
//     try{
//         const { id } = req.params;
//         const product = await Product.findByIdAndUpdate();

//         if(!product){
//             return res.status(404).json({message: "product not found"});
//         }
//         const updatedProduct = await Product.findById(id);
//         res.status(200).json(updatedProduct);

//     }catch(error){
//         console.log(error);
//         res.status(500).json({message:error.message});
        
//     }
// });

// // delete a product

// app.delete('/api/products/:id', async(req, res) =>{
//     try{

//         const { id } = req.params;
//         const product = await Product.findByIdAndDelete(id);
//         if(!product){
//             return res.status(400).json.apply({message: "product not found"});

//         }
//         res.status(200).json({message: "product deleted successfully"});
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({message: error.message});
//     }
// })



mongoose.connect("mongodb+srv://<username>:<password>@cluster0.s1jlmso.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    console.log("database connected successfully")
    app.listen(3000, () => {
        console.log('server is running on port 3000');
    });
   
    
}).catch(() => {
    console.log("database connection failed")
})