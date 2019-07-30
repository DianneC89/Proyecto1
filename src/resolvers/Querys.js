// contenedor querys 
const Post = require('../models/Post');  // importar el modelo


const getAllPosts = async(root, args) => {
    let posts = await Post.find({title:args.title});
    return posts;
}

module.exports={
    getAllPosts
}