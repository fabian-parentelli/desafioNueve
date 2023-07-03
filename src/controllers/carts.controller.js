import { 
    saveCart as saveCartService, 
    getByIdCarts as getByIdServcie,
    addProductToCarts as addProductToCartsService,
    deleteProducts as deleteProductService,
    updateProducts as updateProductService,
    updateQuantity as updateQuantityService,
    deleteAllProducts as deleteAllProductService
} from '../servcices/carts.service.js';

export default class CartController {

    async createCart(req, res) {
        try {
            const result = await saveCartService();
            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        };
    };
    
    async getByIdCart(req, res) {
        const { cid } = req.params;
        try {
            const result = await getByIdServcie(cid);
            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        };
    };
    
    async productToCart(req, res) {
        const cid = req.params.cid;
        const pid = req.params.pid;
        try {
            const result = await addProductToCartsService(cid, pid);
            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        };
    };
    
    async removeProduct(req, res) {
        const { cid } = req.params;
        const { pid } = req.params;
        try {
            const result = await deleteProductService(cid, pid);
            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        };
    };
    
    async modifyCart(req, res) {
        const { cid } = req.params;
        const products = req.body;
        try {
            const result = await updateProductService(cid, products);
            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        };
    };
    
    async modifyQuantity(req, res) {
        const { cid, pid } = req.params;
        const { quantity } = req.body;
        try {
            const result = await updateQuantityService(cid, pid, quantity);
            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        };
    };
    
    async eliminateAllProducts(req, res) {
        const { cid } = req.params;
        try {
            const result = await deleteAllProductService(cid);
            res.sendSuccess(result);
        } catch (error) {
            res.sendServerError(error.message);
        };
    };
};