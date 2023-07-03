import {
    saveProducts as saveProductService,
    getAllProducts as getAllProductService,
    getProductById as getProductByIdService, 
    modifyProducts as modifyProductService,
    deleteProductsById as deleteProductService
} from '../servcices/products.service.js';

export default class ProductsController {

    async getAllProdducts(req, res) {
        try {
            const { limit = 10, page = 1, query = false, sort } = req.query;
            const result = await getAllProductService(limit, page, query, sort);
            if (result.status === 'error') {
                res.sendClientError(result.error)
            } else {
                res.sendSuccess(result.payload);
            };
        } catch (error) {
            res.sendServerError(error.message);
        };
    };

    async getByIdProduct(req, res) {
        const { pid } = req.params;
        try {
            const result = await getProductByIdService(pid);
            if (result.status === 'error') {
                res.sendClientError(result.error)
            } else {
                res.sendSuccess(result.payload);
            };
        } catch (error) {
            res.sendServerError(error.message);
        };
    };

    async createProduct(req, res) {
        try {
            const result = await saveProductService({ ...req.body });
            if (result.status === 'error') {
                res.sendClientError(result.message)
            } else {
                res.sendSuccess(result.payload);
            };
        } catch (error) {
            res.sendServerError(error.message);
        };
    };

    async modifyProduct(req, res) {
        const { pid } = req.params;
        try {
            const result = await modifyProductService( pid, { ...req.body });
            if (result.status === 'error') {
                res.sendClientError(result.error);
            } else {
                res.sendSuccess(result.payload);
            };
        } catch (error) {
            res.sendServerError(error.message);
        };
    };

    async getByIdProduct(req, res) {
        const { pid } = req.params;
        try {
            const result = await deleteProductService(pid);
            if (result.status === 'error') {
                res.sendClientError(result.error)
            } else {
                res.sendSuccess(result.payload);
            };
        } catch (error) {
            res.sendServerError(error.message);
        };
    };
}