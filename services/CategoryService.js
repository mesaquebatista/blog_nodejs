import CategoryRepository from "../database/repositories/CategoryRepository.js";
import Slug from "../utils/Slug.js";

const CategoryService = {
    getCategoryBySlug(slug){
        let category = CategoryRepository.getBySlug(slug);
        return category;
    },
    async createCategory(data){
        let { title } = data;
        let slug = Slug.generate(title);
            
        let category = await CategoryRepository.getBySlug(slug);

        if(category){
            slug = slug + '-' + Math.floor(Math.random() * 10000);
        }

        let newCategory = await CategoryRepository.create({
            title: data.title,
            slug: slug
        })

        return newCategory;
    },
    getAllCategories() {
        return CategoryRepository.getAll();
    },
    deleteCategory(id) {
        return CategoryRepository.delete();
    }
}

export default CategoryService;