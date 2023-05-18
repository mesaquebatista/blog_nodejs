import { Sequelize } from "sequelize";
import connection from "../database.js";
import Category from "./Category.js";

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    slug: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    categoryId: {
        type: Sequelize.INTEGER, // Altere o tipo de dados, se necessário
        allowNull: false // ou false, dependendo dos requisitos
    }
});

Category.hasMany(Article);
Article.belongsTo(Category);

Article.sync({ force: false })
    .then(() => {});

export default Article;