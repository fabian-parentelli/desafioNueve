import { userModel } from "./models/user.model.js";

export default class Users {
    
    constructor() {};

    getAll = async () => {
        return await userModel.find().lean();
    };

    getByEmail = async (email) => {
        return await userModel.findOne({email}).lean();
    };

    save = async (user) => {
        return await userModel.create(user);
    };
};