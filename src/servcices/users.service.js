import { USER_DAO, CARTS_DAO } from "../dao/index.js";
import { isValidPassword, generateToken, createHash } from '../utils.js';

const saveUser = async (user) => {
    const { first_name, last_name, age, role, email, password } = user;

    if (!first_name || !last_name || !role || !email || !password || !age) {
        return { status: 'error', error: 'Incomplete value' };
    };

    try {
        const exists = await USER_DAO.getByEmail(email);
        if (exists) return { status: 'error', error: 'User already exists' };

        const hashedPassword = createHash(password);
        const newUser = { ...user };

        const addCart = await CARTS_DAO.save();
        newUser.cart = addCart._id;

        newUser.password = hashedPassword;

        const result = await USER_DAO.save(newUser);

        const objResult = result.toObject();
        delete objResult.password;
        return { status: 'success', payload: objResult };
    } catch (error) {
        console.error(error);
    };
};

const loginUser = async (email, password) => {
    const user = await USER_DAO.getByEmail(email);
    if (!user) return { status: 'error', error: 'Incorrect credentoals' };

    const comparePassword = isValidPassword(user, password);
    if (!comparePassword) return { status: 'error', error: 'Incorrect credentials' };

    delete user.password;
    const accesToken = generateToken(user);
    return { accesToken };
};
export { saveUser, loginUser };