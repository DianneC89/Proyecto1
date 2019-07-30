
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },

    body:{
        type: String,
        required: true
    },

    createdAT: {
        type: String,
        required: true

    },

    user: {
        type: Schema.Types.ObjectId,
        ref : 'user'
    }
})



const Post = mongoose.model('post', postSchema);

//module.exports =mongoose.model('Posts', postSchema);
 module.exports =Post;

