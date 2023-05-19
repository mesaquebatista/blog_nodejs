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
        response.redirect('/admin/categories');
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
    },

    /*
    ================================================
    (U) UPDATE 
    ================================================
    */
    update(){

    },

    /*
    ================================================
    (D) DELETE 
    ================================================
    */
    async destroy(request, response) {
        try {
            await CategoryService.deleteCategory(request.params.id);
            response.redirect('/admin/categories');
        } catch (error) {
            throw error;
        }
    }


}

export default CategoryController;