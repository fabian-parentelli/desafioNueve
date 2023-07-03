import { cartModel } from './models/carts.model.js';

export default class CartsDao {

    constructor() { };

    save = async (cart) => {
        return await cartModel.create(cart);
    };

    getById = async (id) => {
        return await cartModel.find({ _id: id }).lean();
    };

    addProductToCart = async (cid, cart) => {
        return await cartModel.updateOne({_id : cid}, cart);
    };

    deleteProduct = async (cid, pid) => {
        return await cartModel.updateOne({_id : cid}, {$pull: {products: {product : {_id:pid}}}});
    };

    updateProductsDao = async (cid, products) => {
        return await cartModel.updateOne({_id : cid}, products);    
    };

    updateQuantityDao = async (cid, pid, quantity) => {
        return await cartModel.updateOne({_id : cid, 'products.product': pid}, { $inc: { "products.$.quantity": quantity }});
    };

    deleteAllProductDao = async (cid) => {
        return await cartModel.updateOne({_id : cid}, {products: []});
    };
};