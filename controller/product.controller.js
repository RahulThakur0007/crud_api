const Product = require('../model/product.model.js');

const getProducts = async(req, res)=> {
    try{
        const products = await Product.find({});
        res.status(200).json(products);

    }catch(error){
        console.log(error);
        res.status(500).json({message: error.message});

    }
}
const getProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    }catch(error){
        console.log(error);
        res.status(500).json({message: error.message})
    }
}

const createProduct = async(req, res) => {
     // console.log(req.body);
      // res.send(req.body);

      try {
        const product =  await Product.create(req.body);
        res.status(201).json(product);
         
     } catch (error) {
         console.log(error);
         res.status(500).json({message: error.message})
     }
}

const updateProduct = async(req, res) => {
    try{
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate();

        if(!product){
            return res.status(404).json({message: "product not found"});
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    }catch(error){
        console.log(error);
        res.status(500).json({message:error.message});
        
    }
}

const deleteProduct = async(req, res) => {
    try{

        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(400).json.apply({message: "product not found"});

        }
        res.status(200).json({message: "product deleted successfully"});
    }
    catch(error){
        console.log(error);
        res.status(500).json({message: error.message});
    }
}


module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
};














































    
