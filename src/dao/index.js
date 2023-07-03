import CartsDao from './dbManager/carts.dao.js';
import ProductsDao from './dbManager/products.dao.js';
import Users from './dbManager/users.dao.js';

const cartsDao = new CartsDao();
const producstDao = new ProductsDao();
const userDao = new Users();

export const CARTS_DAO = cartsDao;
export const PRODUCTS_DAO = producstDao;
export const USER_DAO = userDao; 