import {
    saveUser as saveUserService,
    loginUser as loginUserService
} from '../servcices/users.service.js';

export default class UserController {

    async registerUser(req, res) {
        try {
            const result = await saveUserService({ ...req.body });
            if (result.status === 'error') {
                res.sendClientError(result.error)
            } else {
                res.sendSuccess(result.payload);
            };
        } catch (error) {
            res.sendServerError(error.message);
        };
    };

    async loginUser(req, res) {
        const { email, password } = req.body;
        try {
            const result = await loginUserService(email, password);
            if (result.status === 'error') {
                res.sendClientError(result.error)
            } else {
                res.sendSuccess(result);
            };
        } catch (error) {
            res.sendServerError(error.message);
        }
    };

    async current(req, res) {
        const { user } = req.user;
        res.sendSuccess(user);
    };
};
