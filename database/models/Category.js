import { Sequelize } from "sequelize";
import connection from "../database.js";

const Category = connection.define('categories', {
    title: { 
        type: Sequelize.STRING,
        allowNull: false
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
    }
});

Category.sync({force: false})
    .then(() => {});

export default Category;