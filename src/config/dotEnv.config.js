import dotenv from 'dotenv';

dotenv.config();

export default {
    mongoUrl: process.env.MONGO_URL,
    privateKey: process.env.PRIVATE_KEY,
    clienteId: process.env.CLIENTEID,
    clienteSecret: process.env.CLIENTESECRET,
    callBackUrl: process.env.CALLBACKURL
};