import Category from "../models/Category.js";
const CategoryRepository = {
    getAll() {
        let categories = Category.findAll({ raw: true });
        return categories;
    },
    getBySlug(slug) {
        let category = Category.findOne({
            raw: true,
            where: {
                slug: slug
            }
        });

        return category;
    },
    create(data) {
        let category = Category.create(data);
        return category;
    }
}

export default CategoryRepository;