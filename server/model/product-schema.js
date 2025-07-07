import mongoose from "mongoose";

const productShema=new mongoose.Schema({
    id:{
        type:String,
        require:true,
        unique:true
    },
    url:String,
    detailUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String

});

const Product=mongoose.model('product',productShema);

export default Product;
