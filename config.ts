import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize({
    database: 'item',
    username: 'root',
    password: 'password',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres'
});