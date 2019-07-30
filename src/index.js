
require('dotenv').config();
const {GraphQLServer} = require('graphql-yoga');
const {importSchema} = require('graphql-import');
const typeDefs = importSchema('./src/schema.graphql');
const mongoose =require('mongoose');

//const mongoUrl = 'mongodb+srv://administrador:administrador@clusterdev-fi9jc.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true}, (err) => {
    if(!err){
        console.log('mongo conectado correctamente');
    }
});




const Post = require('./models/Post');


const { getAllPosts } = require('./resolvers/Querys');
const { createPost, createUser } = require('./resolvers/Mutations');

const resolvers = {
    Query: {
        
        getAllPosts
        //saludo: (root, args) => `Hola ${args.name}`,
      
        //despedida: (root, args) => "K"
      
    },

    Mutation: {
        
        createPost,
        createUser

    }
  
    
  }

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))