import CategoryService from "../services/CategoryService.js";

const CategoryController = {
    /*
    ================================================
    (C) CREATE 
    ================================================
    */
    create(request, response) {
        response.render('admin/categories/create');
    },
    async store(request, response) {
        await CategoryService.createCategory({ title: request.body.title });
        response.redirect('/admin/categories/create');
    },

    /*
    ================================================
    (R) READ 
    ================================================
    */
    async index(request, response) {
        let categories = await CategoryService.getAllCategories();
        response.render('admin/categories/index', {
            categories: categories
        });
    }

}

export default CategoryController;