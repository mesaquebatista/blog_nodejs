const Slug = {
    generate(text){
        return text.replaceAll('?', '')
            .replaceAll(' ', '-')
            .toLowerCase();
    }
}

export default Slug;