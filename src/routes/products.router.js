import Router from './router.js';
import ProductsController from '../controllers/products.controller.js';
import { passportEnum } from '../config/enums.config.js';

const productsController = new ProductsController();

export default class ProductRouter extends Router {

    init() {
        this.get('/', ['PUBLIC'], passportEnum.NOTHING, productsController.getAllProdducts);
        this.get('/:pid', ['PUBLIC'], passportEnum.NOTHING, productsController.getByIdProduct);
        this.post('/', ['ADMIN'], passportEnum.JWT, productsController.createProduct);
        this.put('/:pid', ['ADMIN'], passportEnum.JWT, productsController.modifyProduct);
        this.delete('/:pid', ['ADMIN'], passportEnum.JWT, productsController.getByIdProduct);
    };
};