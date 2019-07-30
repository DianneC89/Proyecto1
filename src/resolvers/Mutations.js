const  Post = require('../models/Post');
const User = require('../models/User');

const createPost = async (root, args) => {
    let newPost = new Post({
       title : args.data.title,
        body: args.data.body,
        createdAT: args.data.createdAT,
        user: args.data.user

        //name : args.data.name,
        //email: args.data.email,
        //password: args.data.password,
       // ...args.data
    })
    const miPost = await newPost.save();
    const post =await Post.findOne({_id:miPost._id}).populate('user')
    //return miPost;
    return post;
}


const createUser = async (root, args) => {

    let newUser = new User ({
       // ...args.data
       name : args.data.name,
        email: args.data.email,
        password: args.data.password
      
    })

    const user = await newUser.save();
    return user;
}

module.exports = {
    createPost,
    createUser
}