import { CARTS_DAO } from '../dao/index.js';
import { PRODUCTS_DAO } from '../dao/index.js';

const saveCart = async () => {
    const cart = await CARTS_DAO.save({ product: [] });
    return cart;
};

const getByIdCarts = async (id) => {
    const cart = await CARTS_DAO.getById(id);
    return cart ? cart : { status: 'error', error: 'Cart not found' };
};

const addProductToCarts = async (cid, pid) => {
    try {
        const cart = await this.getByIdCarts(cid);
        const product = await PRODUCTS_DAO.getById(pid);
        const exist = cart.products.findIndex(pro => pro.product.toString() === product._id.toString());
        if (exist !== -1) {
            cart.products[exist].quantity++;
        } else {
            cart.products.push({ product: product._id });
        };
        const result = await CARTS_DAO.addProductToCart(cid, cart);
        return result ? result : { status: 'error', error: 'Cart not found' };
    } catch (error) {
        console.error(error);
    };
};

const deleteProducts = async (cid, pid) => {
    try {
        const result = await CARTS_DAO.deleteProduct(cid, pid);
        return result ? result : { status: 'error', error: 'Cart not found' };
    } catch (error) {
        console.error(error);
    };
};

const updateProducts = async (cid, products) => {
    try {
        const result = await CARTS_DAO.updateProductsDao(cid, products);
        return result ? result : { status: 'error', error: 'Cart not found' };
    } catch (error) {
        console.error(error);
    };
};

const updateQuantity = async (cid, pid, quantity) => {
    try {
        const result = await CARTS_DAO.updateQuantityDao(cid, pid, quantity);
        return result ? result : { status: 'error', error: 'Cart not found' };
    } catch (error) {
        console.error(error);
    };
};

const deleteAllProducts = async (cid) => {
    try {
        const result = await CARTS_DAO.deleteAllProductDao(cid);
        return result ? result : { status: 'error', error: 'Cart not found' };
    } catch (error) {
        console.error(error);
    };
};

export { saveCart, getByIdCarts, addProductToCarts, deleteProducts, updateProducts, updateQuantity, deleteAllProducts };