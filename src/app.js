import express from 'express';
import handlebars from 'express-handlebars';
import MongoSingleton from './dao/dbManager/dbConfig.js';
import passport from 'passport';
import {__dirname} from './utils.js';
import initializePassport from './config/passport.config.js';
import viewsRouter from './routes/views.router.js';
import UsersRouter from './routes/users.router.js';
import CartsRouter from './routes/carts.router.js';
import ProductRouter from './routes/products.router.js';

MongoSingleton.getInstance();
const usersRouter = new UsersRouter();
const productsRouter = new ProductRouter();
const cartsRouter = new CartsRouter();

const app = express();

initializePassport();
app.use(passport.initialize());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');

app.use('/api/products', productsRouter.getRouter());
app.use('/api/carts', cartsRouter.getRouter());
app.use('/', viewsRouter);
app.use('/api/users', usersRouter.getRouter());

app.listen(8080, () => console.log('Server runing in port 8080'));