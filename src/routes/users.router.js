import Router from "./router.js";
import UserController from '../controllers/users.controller.js';
import { passportEnum } from "../config/enums.config.js";

const userController = new UserController();

export default class UsersRouter extends Router {
    init() {
        this.post('/login', ['PUBLIC'], passportEnum.NOTHING, userController.loginUser);
        this.post('/register', ['PUBLIC'], passportEnum.NOTHING, userController.registerUser);
        this.get('/current', ['ADMIN'], passportEnum.JWT, userController.current);
    };
};