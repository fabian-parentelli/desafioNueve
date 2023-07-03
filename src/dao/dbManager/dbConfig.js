import mongoose from "mongoose";
import config from '../../config/dotEnv.config.js';

export default class MongoSingleton {
    static #instance;

    constructor() { mongoose.connect(config.mongoUrl) };

    static getInstance() {
        if(this.#instance) {
            console.log('The connection already exists');
            return this.#instance;
        };
        console.log('connected to the db');
        this.#instance = new MongoSingleton();
        return this.#instance;
    };
};


