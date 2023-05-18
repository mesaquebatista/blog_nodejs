import { Sequelize } from "sequelize";

const connection = new Sequelize('blog', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

export default connection;