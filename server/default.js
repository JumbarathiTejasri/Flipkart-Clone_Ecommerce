
import {products} from "./constants/data.js";
import  Product from "./model/product-schema.js"

const DefaultData=async()=>{
    try{
        await Product.insertMany(products);
        console.log('Data imported Successfully');
    }catch(error){
        console.log('Error While inserting default data',error.message);
    }

}

export default DefaultData;